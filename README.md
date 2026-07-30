# Md. Rashed Hossain — Portfolio

A modern, responsive, dark-themed personal portfolio built with **React + Vite + Tailwind CSS**.
Section-based, smooth-scrolling, minimal-animation, and fully data-driven.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs static site to dist/
npm run preview  # preview the production build locally
```

## Deploy

The site is a static SPA — deploy the `dist/` folder anywhere.

- **Vercel** — import the repo; config is in `vercel.json` (build `npm run build`, output `dist`).
- **Netlify** — import the repo; config is in `netlify.toml`.

## Updating content

All content lives in **`src/data/content.js`** — edit it, no component changes needed.

- Toggle a section on/off via the `sections` array (`enabled: true/false`).
- Add contests to `cp.contests`, projects to `projects`, etc.
- Swap the resume PDF (`public/Md_Rashed_Hossain.pdf`) and photo (`public/RashedHossain.jpg`).

## Sections

Hero · About · Academic Background · Competitive Programming · Technical Skills ·
Projects · Experience · Leadership & Extracurricular · Awards & Achievements · Contact

> Certifications and Blogs/Publications are intentionally disabled — enable them in
> `content.js` once you have content.
