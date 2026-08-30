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
    image: '/living.jpg',
    alt: 'A craftsman building and finishing a bespoke living-room piece by hand at the workbench',
    span: 'lg:col-span-7 lg:row-span-2',
    height: 'h-[420px] md:h-[560px] lg:h-[720px]',
  },
  {
    key: 'bedroom',
    name: 'Bedroom',
    items: ['Beds', 'Wardrobes', 'Dressing Tables'],
    image: '/bedroom.jpg',
    alt: 'Custom upholstered bed with quiet morning light',
    span: 'lg:col-span-5',
    height: 'h-[420px] md:h-[340px] lg:h-[340px]',
  },
  {
    key: 'dining',
    name: 'Dining',
    items: ['Tables', 'Chairs', 'Cabinets'],
    image: '/dining.jpg',
    alt: 'Solid timber dining table with sculptural chairs',
    span: 'lg:col-span-5',
    height: 'h-[420px] md:h-[340px] lg:h-[340px]',
  },
  {
    key: 'office',
    name: 'Office',
    items: ['Executive Tables', 'Workstations', 'Bookshelves'],
    image: '/office.jpg',
    alt: 'Executive desk with custom shelving and natural light',
    span: 'lg:col-span-5',
    height: 'h-[420px] md:h-[340px] lg:h-[340px]',
  },
  {
    key: 'bespoke',
    name: 'Bespoke',
    items: ['Designed specifically for you'],
    image: '/bespoke.jpg',
    alt: 'Hand-drawn furniture sketches on a designer\u2019s desk',
    span: 'lg:col-span-7',
    height: 'h-[420px] md:h-[460px] lg:h-[480px]',
    accent: true,
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
  { num: '01', title: 'Free design consultation', text: 'Visit, call, or message us — we listen, measure, and propose before you commit.' },
  { num: '02', title: 'Fully bespoke', text: 'Every piece is built to your space, your dimensions, and the way you live — not pulled off a shelf.' },
  { num: '03', title: 'Premium wood & materials', text: 'Carefully sourced timber, natural fabrics, and honest hardware.' },
  { num: '04', title: 'Skilled in-house craftsmanship', text: 'Built by makers in our Chattogram atelier who understand joinery, finish, and proportion.' },
  { num: '05', title: 'Large Agrabad showroom', text: 'Visit, see, and touch the work — a real place with real pieces on display.' },
  { num: '06', title: 'Delivery & installation included', text: 'We bring it in, place it, and leave the room better than we found it.' },
  { num: '07', title: 'Easy payment options', text: 'A flexible plan that lets you commission with confidence.' },
]

export const timeline = [
  { year: '2020', text: 'Founded by Abul Kalam Bhuiyan in Chattogram with a small atelier and a clear idea.' },
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
