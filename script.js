/* ============================================================
   Walid Aketous — Portfolio interactions
   ============================================================ */
(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ============================================================
     i18n — English / French
     ============================================================ */
  const I18N = {
    en: {
      'nav.about': 'About', 'nav.skills': 'Skills', 'nav.experience': 'Experience',
      'nav.certs': 'Certifications', 'nav.contact': 'Contact', 'nav.resume': 'Resume',
      'hero.eyebrow': 'Available for opportunities · Marrakech, Morocco',
      'hero.roleStatic': 'I build &amp; secure',
      'hero.desc': 'Network &amp; Security Engineer specializing in enterprise <strong>Cisco</strong> infrastructure, <strong>wireless design</strong>, <strong>Fortinet</strong> security, and <strong>VMware</strong> virtualization. Turning complex networks into fast, reliable and secure systems.',
      'hero.cta': 'Get in touch',
      'stat.years': 'Years experience', 'stat.certs': 'Certifications',
      'stat.vendors': 'Vendor stacks', 'stat.devices': 'Devices deployed',
      'about.title': 'About me',
      'about.p1': "I'm a <strong>Network &amp; Security Engineer</strong> based in Marrakech, holding a <strong>Professional Master's in Systems, Networks &amp; Security Engineering</strong> from ENSI Tangier.",
      'about.p2': "Since 2021 I've worked at <strong>Axians–Cegelec</strong>, deploying and maintaining enterprise networks end to end — from active/passive <strong>Wi-Fi site surveys</strong> with Ekahau, to configuring <strong>Catalyst 9000</strong> switches, <strong>Catalyst 9800 (WLC)</strong> wireless controllers and <strong>Catalyst 9100</strong> access points, hardening networks with <strong>Fortinet firewalls &amp; SD-WAN</strong>, and virtualizing servers on <strong>VMware ESXi</strong>.",
      'about.p3': 'I care about networks that are fast, resilient and secure by design — and I enjoy the puzzle of optimizing coverage, performance and reliability for real users.',
      'about.chip1': '📍 Marrakech, Morocco', 'about.chip2': "🎓 Master's @ ENSI Tangier",
      'about.chip3': '🗣️ Arabic · French · English',
      'skills.title': 'Skills &amp; Stack',
      'skills.rs.title': 'Routing &amp; Switching', 'skills.rs.desc': 'Design, deployment and maintenance of enterprise LAN.',
      'skills.wifi.title': 'Enterprise Wireless', 'skills.wifi.desc': 'Active &amp; passive site surveys and AP deployment.',
      'skills.sec.title': 'Network Security', 'skills.sec.desc': 'Perimeter security, segmentation and secure WAN.',
      'skills.virt.title': 'Virtualization', 'skills.virt.desc': 'Server virtualization and resource management.',
      'skills.vms.title': 'Video Surveillance', 'skills.vms.desc': 'VMS design &amp; integration for security monitoring.',
      'skills.sys.title': 'Systems &amp; Tools', 'skills.sys.desc': 'Foundations that keep infrastructure running.',
      'skills.softTitle': 'Ways I work',
      'soft.problem': 'Problem solving', 'soft.team': 'Teamwork', 'soft.adapt': 'Adaptability',
      'soft.react': 'Responsiveness', 'soft.punctual': 'Punctuality',
      'exp.title': 'Experience',
      'exp.date1': 'Oct 2025 — Present', 'exp.role1': 'Network Engineer', 'exp.type1': 'Full-time',
      'exp.j1p1': 'Install &amp; configure Catalyst 9100 Wi-Fi access points (C9115, C9130, C9124) for efficient connectivity.',
      'exp.j1p2': 'Deploy &amp; configure distribution/access switches (2960, 9200, 9300, 9407, 9500) for reliability and performance.',
      'exp.j1p3': 'Run active &amp; passive site surveys with <strong>Ekahau</strong> to optimize coverage and performance.',
      'exp.j1p4': 'Stand up <strong>Fortinet</strong> firewalls and a <strong>FortiGate SD-WAN</strong> to harden security and optimize WAN traffic.',
      'exp.j1p5': 'Implement <strong>Milestone</strong> video-surveillance solutions and deploy <strong>VMware ESXi</strong> for virtualization.',
      'exp.j1p6': 'Maintain network equipment and manage firmware lifecycle across the estate.',
      'exp.date2': 'Jun 2021 — Oct 2022', 'exp.role2': 'Network Technician', 'exp.type2': 'Contract',
      'exp.j2p1': 'Performed active &amp; passive site surveys with <strong>AirMagnet</strong> to optimize wireless coverage.',
      'exp.j2p2': 'Configured Cisco switches and deployed access points (C9115, C9130, C9124).',
      'exp.j2p3': 'Deployed distribution/access switches (2960, 9200, 9300, 9407, 9500) and maintained Cisco equipment.',
      'exp.date3': 'Feb 2021 — May 2021', 'exp.role3': 'Network Technician', 'exp.type3': 'Internship',
      'exp.j3p1': 'Conducted active &amp; passive site surveys with AirMagnet.',
      'exp.j3p2': 'Carried out base configuration of Cisco switches.',
      'exp.j3p3': 'Assisted in maintaining Cisco network equipment for optimal performance and reliability.',
      'certs.title': 'Certifications',
      'cert.d1': 'Aug 2023', 'cert.d2': 'Aug 2023', 'cert.d3': 'Jul 2023', 'cert.d4': 'Feb 2023',
      'cert.d5': 'Jan 2023', 'cert.d6': 'Jul 2022', 'cert.d7': 'May 2022', 'cert.d8': 'Jan 2022', 'cert.d9': 'Feb 2020',
      'edu.title': 'Education',
      'edu.e1.h': "Professional Master's — Systems, Networks &amp; Security Engineering", 'edu.e1.p': 'ENSI · Tangier, Morocco',
      'edu.e2.h': "Professional Bachelor's — Systems, Networks &amp; Security Engineering", 'edu.e2.p': 'Faculty of Sciences &amp; Techniques · Settat',
      'edu.e3.h': 'Specialized Technician — Computer Networks', 'edu.e3.p': 'ISTA Jbel Lakhder · Marrakech',
      'edu.e4.h': 'Baccalaureate — Life &amp; Earth Sciences (SVT)', 'edu.e4.p': 'Lycée Sahnoun · Marrakech',
      'contact.eyebrow': "06 — What's next",
      'contact.title': "Let's build something <span class=\"accent\">reliable</span>.",
      'contact.desc': "Open to network &amp; security engineering roles. Whether it's a deployment, a Wi-Fi survey or hardening your infrastructure — let's talk.",
      'contact.email': 'Email', 'contact.phone': 'Phone', 'contact.resume': 'Resume', 'contact.download': 'Download PDF',
      'footer.role': 'Network &amp; Security Engineer',
      'footer.built': 'Built with ⚡ &amp; a love for clean topologies',
    },
    fr: {
      'nav.about': 'À propos', 'nav.skills': 'Compétences', 'nav.experience': 'Expérience',
      'nav.certs': 'Certifications', 'nav.contact': 'Contact', 'nav.resume': 'CV',
      'hero.eyebrow': 'Ouvert aux opportunités · Marrakech, Maroc',
      'hero.roleStatic': 'Je conçois &amp; sécurise',
      'hero.desc': "Ingénieur réseau &amp; sécurité spécialisé dans l'infrastructure <strong>Cisco</strong> d'entreprise, le <strong>design Wi-Fi</strong>, la sécurité <strong>Fortinet</strong> et la virtualisation <strong>VMware</strong>. Je transforme des réseaux complexes en systèmes rapides, fiables et sécurisés.",
      'hero.cta': 'Me contacter',
      'stat.years': "Années d'expérience", 'stat.certs': 'Certifications',
      'stat.vendors': 'Écosystèmes constructeurs', 'stat.devices': 'Équipements déployés',
      'about.title': 'À propos',
      'about.p1': "Je suis <strong>ingénieur réseau &amp; sécurité</strong> basé à Marrakech, titulaire d'un <strong>Master professionnel en Ingénierie Systèmes, Réseaux &amp; Sécurité</strong> de l'ENSI Tanger.",
      'about.p2': "Depuis 2021, je travaille chez <strong>Axians–Cegelec</strong>, où je déploie et maintiens des réseaux d'entreprise de bout en bout — des <strong>site surveys Wi-Fi</strong> actives/passives sous Ekahau, à la configuration de commutateurs <strong>Catalyst 9000</strong>, de contrôleurs Wi-Fi <strong>Catalyst 9800 (WLC)</strong> et de points d'accès <strong>Catalyst 9100</strong>, au renforcement de la sécurité avec des <strong>pare-feux Fortinet &amp; SD-WAN</strong>, et à la virtualisation de serveurs sous <strong>VMware ESXi</strong>.",
      'about.p3': "J'attache de l'importance à des réseaux rapides, résilients et sécurisés par conception — et j'aime le défi d'optimiser la couverture, les performances et la fiabilité pour de vrais utilisateurs.",
      'about.chip1': '📍 Marrakech, Maroc', 'about.chip2': '🎓 Master @ ENSI Tanger',
      'about.chip3': '🗣️ Arabe · Français · Anglais',
      'skills.title': 'Compétences &amp; Stack',
      'skills.rs.title': 'Routage &amp; Commutation', 'skills.rs.desc': "Conception, déploiement et maintenance du LAN d'entreprise.",
      'skills.wifi.title': "Wi-Fi d'entreprise", 'skills.wifi.desc': "Site surveys actives &amp; passives et déploiement d'AP.",
      'skills.sec.title': 'Sécurité réseau', 'skills.sec.desc': 'Sécurité périmétrique, segmentation et WAN sécurisé.',
      'skills.virt.title': 'Virtualisation', 'skills.virt.desc': 'Virtualisation de serveurs et gestion des ressources.',
      'skills.vms.title': 'Vidéosurveillance', 'skills.vms.desc': 'Conception &amp; intégration VMS pour la sécurité.',
      'skills.sys.title': 'Systèmes &amp; Outils', 'skills.sys.desc': "Les fondations qui font tourner l'infrastructure.",
      'skills.softTitle': 'Ma façon de travailler',
      'soft.problem': 'Résolution de problèmes', 'soft.team': 'Travail en équipe', 'soft.adapt': "Sens de l'adaptation",
      'soft.react': 'Réactivité', 'soft.punctual': 'Ponctualité',
      'exp.title': 'Expérience',
      'exp.date1': 'Oct 2025 — Présent', 'exp.role1': 'Ingénieur réseau', 'exp.type1': 'Temps plein',
      'exp.j1p1': "Installer &amp; configurer des points d'accès Wi-Fi Catalyst 9100 (C9115, C9130, C9124) pour une connectivité efficace.",
      'exp.j1p2': "Déployer &amp; configurer des commutateurs de distribution/accès (2960, 9200, 9300, 9407, 9500) pour la fiabilité et les performances.",
      'exp.j1p3': "Réaliser des site surveys actives &amp; passives avec <strong>Ekahau</strong> pour optimiser la couverture et les performances.",
      'exp.j1p4': "Mettre en place des pare-feux <strong>Fortinet</strong> et une solution <strong>FortiGate SD-WAN</strong> pour renforcer la sécurité et optimiser le trafic WAN.",
      'exp.j1p5': "Mettre en œuvre des solutions de vidéosurveillance <strong>Milestone</strong> et déployer <strong>VMware ESXi</strong> pour la virtualisation.",
      'exp.j1p6': "Assurer la maintenance des équipements réseau et gérer le cycle de vie des firmwares sur l'ensemble du parc.",
      'exp.date2': 'Juin 2021 — Oct 2022', 'exp.role2': 'Technicien réseau', 'exp.type2': 'Intérim',
      'exp.j2p1': "Réaliser des site surveys actives &amp; passives avec <strong>AirMagnet</strong> pour optimiser la couverture Wi-Fi.",
      'exp.j2p2': "Configurer des commutateurs Cisco et déployer des points d'accès (C9115, C9130, C9124).",
      'exp.j2p3': "Déployer des commutateurs de distribution/accès (2960, 9200, 9300, 9407, 9500) et maintenir les équipements Cisco.",
      'exp.date3': 'Fév 2021 — Mai 2021', 'exp.role3': 'Technicien réseau', 'exp.type3': 'Stage',
      'exp.j3p1': 'Réaliser des site surveys actives &amp; passives avec AirMagnet.',
      'exp.j3p2': 'Effectuer la configuration de base des commutateurs Cisco.',
      'exp.j3p3': "Participer à la maintenance des équipements réseau Cisco pour des performances et une fiabilité optimales.",
      'certs.title': 'Certifications',
      'cert.d1': 'Août 2023', 'cert.d2': 'Août 2023', 'cert.d3': 'Juil 2023', 'cert.d4': 'Fév 2023',
      'cert.d5': 'Jan 2023', 'cert.d6': 'Juil 2022', 'cert.d7': 'Mai 2022', 'cert.d8': 'Jan 2022', 'cert.d9': 'Fév 2020',
      'edu.title': 'Formation',
      'edu.e1.h': 'Master professionnel — Ingénierie Systèmes, Réseaux &amp; Sécurité', 'edu.e1.p': 'ENSI · Tanger, Maroc',
      'edu.e2.h': 'Licence professionnelle — Ingénierie Systèmes, Réseaux &amp; Sécurité', 'edu.e2.p': 'Faculté des Sciences &amp; Techniques · Settat',
      'edu.e3.h': 'Technicien spécialisé — Réseaux informatiques', 'edu.e3.p': 'ISTA Jbel Lakhder · Marrakech',
      'edu.e4.h': 'Baccalauréat — Sciences de la Vie et de la Terre (SVT)', 'edu.e4.p': 'Lycée Sahnoun · Marrakech',
      'contact.eyebrow': '06 — La suite',
      'contact.title': "Construisons quelque chose de <span class=\"accent\">fiable</span>.",
      'contact.desc': "Ouvert aux postes d'ingénierie réseau &amp; sécurité. Qu'il s'agisse d'un déploiement, d'une étude Wi-Fi ou du renforcement de votre infrastructure — parlons-en.",
      'contact.email': 'Email', 'contact.phone': 'Téléphone', 'contact.resume': 'CV', 'contact.download': 'Télécharger le PDF',
      'footer.role': 'Ingénieur réseau &amp; sécurité',
      'footer.built': "Conçu avec ⚡ &amp; l'amour des topologies propres",
    }
  };

  const TYPED_WORDS = {
    en: ['enterprise networks', 'Wi-Fi coverage', 'FortiGate firewalls', 'Cisco fabrics', 'virtual datacenters'],
    fr: ['les réseaux d\'entreprise', 'la couverture Wi-Fi', 'les pare-feux FortiGate', 'les fabrics Cisco', 'les datacenters virtuels'],
  };

  let currentLang = 'en';

  const applyLang = (lang) => {
    currentLang = I18N[lang] ? lang : 'en';
    const dict = I18N[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = dict[el.getAttribute('data-i18n')];
      if (val != null) el.innerHTML = val;
    });
    document.documentElement.lang = currentLang;
    document.querySelectorAll('.lang-switch button').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === currentLang));
    try { localStorage.setItem('lang', currentLang); } catch (e) {}
  };

  // initial language: stored choice → browser → English
  let initialLang = 'en';
  try { initialLang = localStorage.getItem('lang') || (navigator.language || '').slice(0, 2); } catch (e) {}
  if (!I18N[initialLang]) initialLang = 'en';
  applyLang(initialLang);

  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

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

  /* ---------- Typing effect (language-aware) ---------- */
  const typed = document.getElementById('typed');
  if (typed && !prefersReduced) {
    let wi = 0, ci = 0, deleting = false;
    const tick = () => {
      const words = TYPED_WORDS[currentLang] || TYPED_WORDS.en;
      if (wi >= words.length) wi = 0;
      const word = words[wi];
      typed.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) { ci++; setTimeout(tick, 70); }
      else if (!deleting && ci === word.length) { deleting = true; setTimeout(tick, 1600); }
      else if (deleting && ci > 0) { ci--; setTimeout(tick, 35); }
      else { deleting = false; wi = (wi + 1) % words.length; setTimeout(tick, 350); }
    };
    tick();
  } else if (typed) {
    typed.textContent = (TYPED_WORDS[currentLang] || TYPED_WORDS.en)[0];
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
