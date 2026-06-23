/* ============================================================
   Walid Aketous — Portfolio interactions
   ============================================================ */
(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Nav: scrolled state + scroll progress ---------- */
  const nav = document.getElementById('nav');
  const progress = document.getElementById('scroll-progress');
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 40);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('nav-burger');
  const links = document.querySelector('.nav__links');
  const toggleMenu = (open) => {
    const willOpen = open ?? !links.classList.contains('open');
    links.classList.toggle('open', willOpen);
    burger.classList.toggle('open', willOpen);
    burger.setAttribute('aria-expanded', String(willOpen));
  };
  burger.addEventListener('click', () => toggleMenu());
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  /* ---------- Typing effect ---------- */
  const typed = document.getElementById('typed');
  const words = ['enterprise networks', 'Wi-Fi coverage', 'FortiGate firewalls', 'Cisco fabrics', 'virtual datacenters'];
  if (typed && !prefersReduced) {
    let wi = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = words[wi];
      typed.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) { ci++; setTimeout(tick, 70); }
      else if (!deleting && ci === word.length) { deleting = true; setTimeout(tick, 1600); }
      else if (deleting && ci > 0) { ci--; setTimeout(tick, 35); }
      else { deleting = false; wi = (wi + 1) % words.length; setTimeout(tick, 350); }
    };
    tick();
  } else if (typed) {
    typed.textContent = words[0];
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('in'), i * 60);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('.stat__num');
  const runCounter = (el) => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const dur = 1400; const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && !prefersReduced) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { runCounter(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(c => cio.observe(c));
  } else {
    counters.forEach(c => c.textContent = c.dataset.count + (c.dataset.suffix || ''));
  }

  /* ---------- Skill card spotlight ---------- */
  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------- Animated network background ---------- */
  const canvas = document.getElementById('network-bg');
  const ctx = canvas.getContext('2d');
  let w, h, nodes, raf, dpr;
  const mouse = { x: -9999, y: -9999 };

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    const density = Math.min(Math.floor((innerWidth * innerHeight) / 16000), 110);
    nodes = Array.from({ length: density }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25 * dpr,
      vy: (Math.random() - 0.5) * 0.25 * dpr,
      r: (Math.random() * 1.6 + 0.6) * dpr
    }));
  };

  const LINK = 130;
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    const link = LINK * dpr;
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;

      // links
      for (let j = i + 1; j < nodes.length; j++) {
        const m = nodes[j];
        const dx = n.x - m.x, dy = n.y - m.y;
        const dist = Math.hypot(dx, dy);
        if (dist < link) {
          const a = (1 - dist / link) * 0.28;
          ctx.strokeStyle = `rgba(46,230,200,${a})`;
          ctx.lineWidth = dpr * 0.6;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();
        }
      }

      // mouse interaction
      const mdx = n.x - mouse.x, mdy = n.y - mouse.y;
      const mdist = Math.hypot(mdx, mdy);
      const mRange = 160 * dpr;
      if (mdist < mRange) {
        const a = (1 - mdist / mRange) * 0.5;
        ctx.strokeStyle = `rgba(56,189,248,${a})`;
        ctx.lineWidth = dpr * 0.7;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }

      // node
      ctx.fillStyle = mdist < mRange ? 'rgba(56,189,248,.9)' : 'rgba(46,230,200,.65)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  };

  if (!prefersReduced) {
    resize();
    draw();
    window.addEventListener('resize', () => { cancelAnimationFrame(raf); resize(); draw(); });
    window.addEventListener('pointermove', (e) => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; }, { passive: true });
    window.addEventListener('pointerleave', () => { mouse.x = -9999; mouse.y = -9999; });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else draw();
    });
  } else {
    canvas.style.display = 'none';
  }
})();
