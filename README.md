# TAXI-book — Taxi Booking Website

> A modern, responsive taxi booking website with ride booking, transparent pricing, service showcase, fleet gallery, and secure payment messaging — built with React, Vite, TypeScript, shadcn/ui, and Tailwind CSS.

## Features

- **Hero section** — bold landing hero with call-to-action booking entry point
- **Booking form** — pickup/drop-off ride booking form with validation (react-hook-form + zod)
- **Services** — ride service offerings showcase
- **Pricing** — transparent fare/pricing tiers
- **Fleet gallery** — vehicle gallery carousel
- **Payment trust strip** — secure online payments messaging (Cardlink)
- **Contact section** — get in touch / support details
- **Responsive design** — mobile-first layout with Tailwind CSS
- **UI kit** — full shadcn/ui component set (dialogs, toasts, forms, calendars, charts)

## Tech stack

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 + tailwindcss-animate |
| UI components | shadcn/ui (Radix primitives) |
| Forms | react-hook-form + zod |
| Routing | react-router-dom |
| Data | @tanstack/react-query |
| Icons | lucide-react |

## Project structure

```
TAXI-book/
├── index.html
├── public/                # static assets (favicon, uploads, robots.txt)
├── src/
│   ├── main.tsx           # entry point
│   ├── App.tsx            # router + providers
│   ├── pages/
│   │   ├── Index.tsx      # landing page composition
│   │   └── NotFound.tsx   # 404 page
│   ├── components/
│   │   ├── Header.tsx     # nav header
│   │   ├── Hero.tsx       # hero section
│   │   ├── BookingForm.tsx# ride booking form
│   │   ├── Services.tsx   # services showcase
│   │   ├── Gallery.tsx    # fleet gallery
│   │   ├── Pricing.tsx    # pricing tiers
│   │   ├── Contact.tsx    # contact section
│   │   ├── Footer.tsx     # footer
│   │   └── ui/            # shadcn/ui primitives
│   └── lib/ utils/ hooks/ # helpers
├── tailwind.config.ts
└── vite.config.ts
```

## Quick start

Requirements: Node.js 18+ and npm.

```sh
# Install dependencies
npm install

# Start the dev server (http://localhost:8080)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build
npm run preview
```

## Deploy notes

- Fully static, client-side app — no backend or env vars required.
- `vite.config.ts` sets `base: "/TAXI-book/"` so asset URLs work under the GitHub Pages sub-path.
- Live site is published via GitHub Pages from the `gh-pages` branch (built `dist/` output).
- Booking/payment flows are front-end demos — wire the form to your own backend or payment provider before production use.

---

Built by Girish Lade · https://ladestack.in
