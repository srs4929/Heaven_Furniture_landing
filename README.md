# Heaven Furniture Mart — Landing Page

A boutique, editorial-style landing page for **Heaven Furniture Mart**, a bespoke furniture atelier in Agrabad, Chattogram. Built as a single-page marketing site that introduces the brand, presents the catalogue, walks the visitor through the bespoke process, and channels enquiries to WhatsApp, phone, and the showroom.

> Designed. Crafted. Customized.

---

## ✦ Highlights

- **Editorial design system** — custom typography scale (`display-xl` → `display-sm`, `numeral-xl`, `numeral-lg`), bespoke colour palette (`ink`, `ivory`, `brass`, `cocoa`, `tan`, `stone`), and Cormorant Garamond / Inter pairing.
- **Hand-crafted Tailwind theme** — colours, fonts, letter-spacing, easing curves, and keyframe animations (`fade-up`, `fade-in`, `slow-zoom`) defined once in `tailwind.config.js`.
- **Reusable section primitives** — every section is a self-contained component in `src/components/`.
- **Scroll-driven reveals** — IntersectionObserver-based `useReveal` hook adds editorial fade-up animations as sections enter the viewport.
- **Conversion-oriented CTAs** — primary "Request a Quote" CTA routes to WhatsApp with a pre-filled message; phone CTA is a tap-to-call pill.
- **Mobile-first** — sticky navbar, hamburger drawer, fixed mobile action bar, and stacked typography at every breakpoint.
- **Static, fast** — Vite production build ships ~236 kB JS / ~35 kB CSS (~70 kB / ~7 kB gzipped).

---

## ✦ Tech Stack

| Layer       | Choice                                        |
| ----------- | --------------------------------------------- |
| Framework   | [React 19](https://react.dev)                 |
| Build tool  | [Vite 6](https://vite.dev)                    |
| Styling     | [Tailwind CSS 3](https://tailwindcss.com)     |
| Lint        | ESLint 10 + `eslint-plugin-react-hooks`       |
| Fonts       | Cormorant Garamond · Inter (Google Fonts)     |
| Imagery     | Local assets in `public/` + Unsplash CDN      |

No backend, no CMS, no runtime dependencies beyond React. The site is fully static and can be hosted on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

---

## ✦ Project Structure

```
e:\radox
├── index.html              # HTML shell, meta tags, font preload
├── package.json            # Scripts and dependencies
├── tailwind.config.js      # Theme tokens (colours, fonts, display scale, animations)
├── postcss.config.js       # Tailwind + Autoprefixer pipeline
├── vite.config.js          # Vite + @vitejs/plugin-react
├── eslint.config.js        # Flat ESLint config
├── public/                 # Static images + favicon
│   ├── living.jpg
│   ├── bedroom.jpg
│   ├── dining.jpg
│   ├── office.jpg
│   ├── bespoke.jpg
│   ├── showroom.jpg
│   ├── Address.jpg
│   ├── footer.jpg
│   ├── icons.svg
│   └── favicon.svg
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Section composition
    ├── App.css / index.css # Global styles + reveal animation keyframes
    ├── assets/             # Bundled assets (if any)
    ├── components/
    │   ├── Navbar.jsx          # Sticky top navigation + mobile drawer
    │   ├── MobileBar.jsx       # Fixed bottom action bar (mobile)
    │   ├── Hero.jsx            # Above-the-fold hero with CTA
    │   ├── BrandIntro.jsx      # Editorial intro + craft descriptors
    │   ├── Collections.jsx     # Five-collection catalogue grid
    │   ├── BespokeSection.jsx  # Four-step bespoke process (Discover → Install)
    │   ├── WhyHeaven.jsx       # Seven benefit cards with editorial numerals
    │   ├── Showroom.jsx        # Showroom location + map link
    │   ├── BrandStory.jsx      # Director pull-quote
    │   ├── Timeline.jsx        # Brand journey / milestones
    │   ├── FinalCTA.jsx        # Closing call-to-action band
    │   └── Footer.jsx          # Site footer with contact + social links
    ├── data/
    │   └── brand.js            # Single source of truth for copy, contacts, collections
    └── hooks/
        └── useReveal.js        # IntersectionObserver scroll-reveal hook
```

---

## ✦ Getting Started

### Prerequisites

- **Node.js** ≥ 18 (Vite 6 requires Node 18+; Node 20 LTS recommended)
- **npm** ≥ 9 (or `pnpm` / `yarn`)

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

Starts the Vite dev server with HMR on `http://localhost:5173` by default.

### Build

```bash
npm run build
```

Outputs the production bundle to `dist/`. Ready to deploy to any static host.

### Preview production build

```bash
npm run preview
```

Serves the contents of `dist/` locally to verify the build before deploying.

### Lint

```bash
npm run lint
```

Runs ESLint across the project using the flat config in `eslint.config.js`.

---

## ✦ Editing Content

All copy, contact details, collection items, process steps, and benefits live in **one file**: `src/data/brand.js`.

- **Brand identity** — name, tagline, address, phone, email, WhatsApp deep-link, map link, director bio.
- **Collections** — the five-row catalogue grid (Living, Bedroom, Dining, Office, Bespoke). Each entry controls its image, alt text, grid span, and card height.
- **Process** — the four-step bespoke flow with Unsplash imagery and accessible alt text.
- **Why Heaven** — the seven benefit cards.
- **Timeline** — the brand journey from founding to current year.
- **Craft descriptors** — short labels for the editorial intro section.

Change a value, save, and Vite HMR will hot-reload the browser instantly.

### WhatsApp pre-filled message

The primary CTA opens WhatsApp with a pre-filled enquiry:

```js
whatsapp:
  'https://wa.me/8801960481983?text=Hi%20Heaven%20Furniture%20Mart%2C%20I%20would%20like%20to%20book%20a%20free%20design%20consultation.',
```

Update the number (`8801960481983`) and the URL-encoded body text to suit the business.

---

## ✦ Design System

### Colours

Defined in `tailwind.config.js` under `theme.extend.colors`.

| Token   | Role                                           |
| ------- | ---------------------------------------------- |
| `ink`   | Primary dark — backgrounds, body copy          |
| `ivory` | Primary light — page background, light text    |
| `brass` | Accent — highlights, CTAs, hairlines, italics  |
| `cocoa` | Deep brown — used on the bespoke section       |
| `tan`   | Soft neutral accents                           |
| `stone` | Warm/light/deep neutrals                       |

### Typography

- **Display & serif:** Cormorant Garamond (300/400/500/600/700 + 300 italic / 400 italic), with Playfair Display → Georgia fallback.
- **Sans & UI:** Inter (300–600), with Manrope → system-ui fallback.

### Editorial scale

| Token         | Approx. range                       | Use                       |
| ------------- | ----------------------------------- | ------------------------- |
| `display-xl`  | `clamp(3.75rem, 9vw, 9rem)`         | Oversized display headlines |
| `display-lg`  | `clamp(3rem, 6.5vw, 6.5rem)`       | Section H1s               |
| `display-md`  | `clamp(2.5rem, 5vw, 4.75rem)`      | Section H2s               |
| `display-sm`  | `clamp(2rem, 4vw, 3.25rem)`        | Smaller section H2s       |
| `numeral-xl`  | `clamp(5rem, 9vw, 9rem)`           | Largest editorial numerals |
| `numeral-lg`  | `clamp(4.25rem, 7vw, 7rem)`        | Medium editorial numerals |

### Motion

- `.reveal` — applies opacity/translateY base state. The `useReveal` hook adds `.in-view` when the element enters the viewport. Use `data-delay="1"` … `"5"` to stagger.
- `animate-fade-up` / `animate-fade-in` — keyframe-based fade animations for above-the-fold content.
- `animate-slow-zoom` — ambient Ken-Burns-style zoom on the hero image.
- Easing: `ease-out-soft` (`cubic-bezier(0.22, 1, 0.36, 1)`) and `ease-in-out-soft`.

---

## ✦ Deployment

The site is fully static. After `npm run build`, deploy `dist/` to any of:

- **Netlify** — drag-and-drop the `dist/` folder, or connect the repo with build command `npm run build` and publish dir `dist`.
- **Vercel** — `vercel deploy --prod` (auto-detects Vite).
- **Cloudflare Pages** — build command `npm run build`, output dir `dist`.
- **GitHub Pages** — push `dist/` to a `gh-pages` branch.

### Performance notes

- Hero image is `loading="eager"` + `fetchpriority="high"`.
- All Unsplash images use `auto=format&fit=crop&w=…&q=80` for responsive delivery.
- Tailwind purges unused classes in production.

---

## ✦ Accessibility

- Semantic landmarks — `<header>`, `<main>`, `<section>` with stable `id`s for anchor links (`#top`, `#collections`, `#bespoke`, `#showroom`, `#contact`).
- Hamburger button exposes `aria-label` + `aria-expanded`; close icon has `sr-only` label.
- All images carry descriptive `alt` text sourced from `brand.js`.
- Tap targets are at least 44 × 44 px on mobile (hamburger, mobile action bar buttons).
- Foreground / background pairs (ivory on ink, brass on deep brown) clear WCAG AA contrast.

---

## ✦ License

This project is private and proprietary — © Heaven Furniture Mart. All rights reserved.

For questions about the codebase, contact the maintainer via the brand contact details in `src/data/brand.js`.

