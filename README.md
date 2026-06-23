# Walid Aketous — Portfolio

A fast, animated single-page portfolio for **Walid Aketous**, Network & Security Engineer.
Built with vanilla HTML, CSS and JavaScript — no build step, no dependencies.

🔗 **Live site:** _enable GitHub Pages (see below)_

## ✨ Features
- Animated interactive "network nodes" background canvas (fits the networking theme)
- Typing hero, animated stat counters, scroll-reveal sections, scroll progress bar
- Sections: About · Skills · Experience timeline · Certifications · Education · Contact
- Downloadable CV (`assets/Walid-Aketous-CV.pdf`)
- Fully responsive + respects `prefers-reduced-motion`

## 🗂 Structure
```
portfolio/
├── index.html        # markup & content
├── styles.css        # theme & layout
├── script.js         # interactions + canvas background
└── assets/
    └── Walid-Aketous-CV.pdf
```

## 🚀 Run locally
Just open `index.html` in a browser. Or serve it:
```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## 🌍 Publish on GitHub Pages
1. Create a new public repo on GitHub (e.g. `portfolio`).
2. Push this folder (commands below).
3. On GitHub: **Settings → Pages → Build and deployment → Source: `Deploy from a branch` → Branch: `main` / `root` → Save.**
4. Your site goes live at `https://<your-username>.github.io/portfolio/` within a minute or two.

> Tip: for a cleaner URL, name the repo `<your-username>.github.io` — it will be served at `https://<your-username>.github.io/`.

## ✏️ Editing
- **LinkedIn link:** replace `LINKEDIN_URL` in `index.html` (two spots) with your profile URL.
- **Profile photo (optional):** drop a square image in `assets/` and reference it in the hero.
- **Content:** all text lives in `index.html`.

---
© Walid Aketous
