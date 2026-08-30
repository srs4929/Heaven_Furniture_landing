# Heaven Furniture Mart — Landing Page

A **responsive single-page landing website** for **Heaven Furniture Mart**, a bespoke furniture brand based in Agrabad, Chattogram, Bangladesh.The website is designed to introduce the brand, showcase its furniture collections, highlight its custom furniture service, build customer trust, and provide direct enquiry options.

---
## Purpose

The landing page was created to give Heaven Furniture Mart a modern web presence and make it easy for potential customers to:

- Learn about the brand
- Explore furniture collections
- Understand the bespoke/custom furniture process
- View showroom information
- Contact the business through WhatsApp or phone
---
## Features

- Responsive design for desktop and mobile
- Hero section with primary **Request a Quote** CTA
- Furniture collections — Living, Bedroom, Dining, Office, and Bespoke
- Bespoke furniture process
- Why Choose Heaven section
- Showroom information and location
- Brand story and milestones
- WhatsApp enquiry with pre-filled message
- Click-to-call phone contact
- Mobile navigation and fixed mobile CTA
- Scroll-based reveal animations

---

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS**
- **JavaScript**


## Project Structure

```

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

## Getting Started

### Clone the repository

```bash
git clone https://github.com/srs4929/Heaven_Furniture_landing.git
cd Heaven_Furniture_landing
```

### Install dependencies

```bash
npm install
```
### Start the development server

```bash
npm run dev
```
### Build for production
```bash
npm run build
```
### Preview the production build
```bash
npm run preview
```



---

