export const brand = {
  name: 'Heaven Furniture Mart',
  short: 'Heaven',
  tagline: 'Designed. Crafted. Customized.',
  founded: 2020,
  city: 'Chattogram',
  country: 'Bangladesh',
  address: 'Agrabad Access Road, Chattogram, Bangladesh',
  phone: '+880 1960-481983',
  phoneRaw: '+8801960481983',
  email: 'heavenfurnituremart@gmail.com',
  whatsapp:
    'https://wa.me/8801960481983?text=Hi%20Heaven%20Furniture%20Mart%2C%20I%20would%20like%20to%20book%20a%20free%20design%20consultation.',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Heaven+Furniture+Mart+Agrabad+Access+Road+Chattogram',
  director: {
    name: 'Abul Kalam Bhuiyan',
    title: 'Managing Director',
    quote:
      'At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.',
  },
  social: {
    facebook: 'https://www.facebook.com/HeavenFurnitureMart',
    instagram: 'https://www.instagram.com/heaven_furniture_ltd',
    youtube: 'https://www.youtube.com/@HeavenFurnitureMart',
  },
}

export const collections = [
  {
    key: 'living',
    name: 'Living',
    items: ['Sofas', 'Coffee Tables', 'TV Units', 'Consoles'],
    image: '/sofa.jpeg',
    alt: 'A craftsman building and finishing a bespoke living-room piece by hand at the workbench',
    span: 'lg:col-span-7 lg:row-span-2',
    height: 'h-[460px] md:h-[560px] lg:h-[720px]',
    mobileHeight: 'h-[460px]',
  },
  {
    key: 'bedroom',
    name: 'Bedroom',
    items: ['Beds', 'Wardrobes', 'Dressing Tables'],
    image: '/bedroom.jpg',
    alt: 'Custom upholstered bed with quiet morning light',
    span: 'lg:col-span-5',
    height: 'h-[360px] md:h-[340px] lg:h-[340px]',
    mobileHeight: 'h-[360px]',
  },
  {
    key: 'dining',
    name: 'Dining',
    items: ['Tables', 'Chairs', 'Cabinets'],
    image: '/dining.jpg',
    alt: 'Solid timber dining table with sculptural chairs',
    span: 'lg:col-span-5',
    height: 'h-[520px] md:h-[340px] lg:h-[340px]',
    mobileHeight: 'h-[520px]',
  },
  {
    key: 'office',
    name: 'Office',
    items: ['Executive Tables', 'Workstations', 'Bookshelves'],
    image: '/office.jpg',
    alt: 'Executive desk with custom shelving and natural light',
    span: 'lg:col-span-5',
    height: 'h-[360px] md:h-[340px] lg:h-[340px]',
    mobileHeight: 'h-[360px]',
  },
  {
    key: 'bespoke',
    name: 'Bespoke',
    items: ['Designed specifically for you'],
    image: '/bespoke.jpg',
    alt: 'Hand-drawn furniture sketches on a designer\u2019s desk',
    span: 'lg:col-span-7',
    height: 'h-[560px] md:h-[460px] lg:h-[480px]',
    accent: true,
    mobileHeight: 'h-[560px]',
  },
]

export const process = [
  {
    num: '01',
    title: 'Discover',
    text: 'Understand your space, dimensions, and how you live within it.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    alt: 'A designer taking quiet measurements in a living room',
  },
  {
    num: '02',
    title: 'Design',
    text: 'Develop the piece around your taste, proportions, and interior language.',
    image:
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80',
    alt: 'Hand-drawn furniture sketches on a designer\u2019s desk',
  },
  {
    num: '03',
    title: 'Craft',
    text: 'Build with premium materials and the steady hands of our atelier.',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    alt: 'A craftsman shaping timber at the workbench',
  },
  {
    num: '04',
    title: 'Install',
    text: 'Deliver, place, and finish — so the piece settles into your home.',
    image:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    alt: 'A finished sofa being carefully placed in a sunlit room',
  },
]

export const whyHeaven = [
  {
    num: '01',
    title: 'Free design consultation',
    text: 'Visit, call, or message us — we listen, measure, and propose before you commit.',
    swatch: { name: 'Chattogram Atelier', meta: 'Site visit · No obligation', tone: 'ivory' },
  },
  {
    num: '02',
    title: 'Fully bespoke',
    text: 'Every piece is built to your space, your dimensions, and the way you live — not pulled off a shelf.',
    swatch: { name: 'Made to measure', meta: 'Your dimensions · Your room', tone: 'brass' },
  },
  {
    num: '03',
    title: 'Premium wood & materials',
    text: 'Carefully sourced timber, natural fabrics, and honest hardware.',
    swatch: { name: 'Burma Teak', meta: 'Solid hardwood · Hand-finished', tone: 'cocoa' },
  },
  {
    num: '04',
    title: 'Skilled in-house craftsmanship',
    text: 'Built by makers in our Chattogram atelier who understand joinery, finish, and proportion.',
    swatch: { name: 'Atelier joinery', meta: 'Mortise & tenon · Hand-sanded', tone: 'ink' },
  },
  {
    num: '05',
    title: 'Large Agrabad showroom',
    text: 'Visit, see, and touch the work — a real place with real pieces on display.',
    swatch: { name: 'Agrabad Showroom', meta: 'Open 7 days · Touch & feel', tone: 'tan' },
  },
  {
    num: '06',
    title: 'Delivery & installation included',
    text: 'We bring it in, place it, and leave the room better than we found it.',
    swatch: { name: 'White-glove install', meta: 'Chattogram · Across Bangladesh', tone: 'stone' },
  },
  {
    num: '07',
    title: 'Easy payment options',
    text: 'A flexible plan that lets you commission with confidence.',
    swatch: { name: 'Flexible plan', meta: 'EMI · Milestone billing', tone: 'brass-deep' },
  },
]

// Tone → tailwind classes for the swatch panel.
// Picked to read clearly against the ivory-50 section background.
export const swatchTones = {
  ivory:     { bar: 'bg-ivory-200',     dot: 'bg-ivory-300',     edge: 'border-ink-800/15',   label: 'bg-ivory-200 text-ink-900' },
  brass:     { bar: 'bg-brass-400',     dot: 'bg-brass-500',     edge: 'border-brass-700/30', label: 'bg-brass-500 text-ink-900' },
  cocoa:     { bar: 'bg-cocoa-700',     dot: 'bg-cocoa-800',     edge: 'border-cocoa-800/40', label: 'bg-cocoa-800 text-ivory-100' },
  ink:       { bar: 'bg-ink-700',       dot: 'bg-ink-800',       edge: 'border-ink-800/50',   label: 'bg-ink-800 text-ivory-100' },
  tan:       { bar: 'bg-stone-300',     dot: 'bg-stone-400',     edge: 'border-stone-400/40', label: 'bg-stone-400 text-ink-900' },
  stone:     { bar: 'bg-stone-200',     dot: 'bg-stone-300',     edge: 'border-stone-400/30', label: 'bg-stone-300 text-ink-900' },
  'brass-deep': { bar: 'bg-brass-700', dot: 'bg-brass-600',     edge: 'border-brass-700/40', label: 'bg-brass-700 text-ivory-100' },
}

export const timeline = [
  { year: '2020', text: 'Founded by Abul Kalam Bhuiyan .' },
  { year: '2021', text: 'The Agrabad showroom opens its doors to Chattogram.' },
  { year: '2024–25', text: 'Featured at the International Furniture Fair, Chattogram.' },
  { year: '2025', text: 'Joined the Chattogram Chamber of Commerce.' },
  { year: '2026', text: 'National recognition from the BFIOA.' },
]

export const craftDescriptors = [
  { label: 'Wood', text: 'Solid hardwoods, chosen for grain and longevity.' },
  { label: 'Texture', text: 'Natural finishes that age with grace, not against it.' },
  { label: 'Form', text: 'Proportions drawn from the room, not a catalogue.' },
  { label: 'Craft', text: 'Joinery, hand-finishing, and patient assembly.' },
]
