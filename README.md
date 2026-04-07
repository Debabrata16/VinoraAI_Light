# VinoraAI – React Website

## ⚠️ IMPORTANT: Do NOT run `npm audit fix --force`
That command will break the project. The deprecation warnings during `npm install` are harmless — ignore them.

## 🚀 Quick Start

```bash
# Step 1 — Install (ignore all the deprecation warnings, they are harmless)
npm install

# Step 2 — Run
npm start
```

The site opens at **http://localhost:3000**

## 🛑 If you already ran `npm audit fix --force`

You need to delete node_modules and reinstall:

```bash
# Delete the broken install
rmdir /s /q node_modules
del package-lock.json

# Fresh install
npm install

# Start
npm start
```

---

## Build for Production

```bash
npm run build
```

---

## Tech Stack

- React 18
- Framer Motion 10 — animations
- react-icons 4 — icons
- swiper 10 — testimonials carousel
- react-circular-progressbar 2 — about section

## Project Structure

```
src/
├── components/
│   ├── Header/       ← Top bar with email + socials
│   ├── Nav/          ← Sticky navbar, mobile drawer, search
│   ├── Hero/         ← Full hero with animated hexagons
│   ├── About/        ← About section with stats + progress bar
│   ├── Services/     ← Tech & Creative services grids
│   ├── Values/       ← Innovation / Creativity / Growth / Results
│   ├── Why/          ← Why VinoraAI + Our Process steps
│   ├── Testimonials/ ← Swiper testimonial carousel
│   ├── Banner/       ← CTA banner with contact buttons
│   └── Footer/       ← 4-column footer
├── App.jsx
├── index.js
└── index.css
```

## Contact Info
- Phone: +91 9480253601
- Email: vinoraaiworkforce@gmail.com
- WhatsApp float button is always visible bottom-right
