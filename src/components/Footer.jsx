import { brand } from '../data/brand'

const social = [
  { label: 'Facebook', href: brand.social.facebook },
  { label: 'Instagram', href: brand.social.instagram },
  { label: 'YouTube', href: brand.social.youtube },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 text-ivory-100 pt-24 pb-10 border-t border-ivory-100/10">
      <div className="mx-auto max-w-9xl px-6 md:px-10">
        {/* Top editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-6">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-4xl md:text-5xl text-ivory-50 leading-none">Heaven</span>
              <span className="text-[10px] tracking-widest2 uppercase text-brass-400 font-sans">
                Furniture Mart
              </span>
            </div>
            <p className="mt-8 font-serif italic text-2xl md:text-3xl text-ivory-100/85 leading-snug max-w-md">
              Designed. Crafted. Customized.
            </p>
            <p className="mt-8 font-sans text-sm leading-relaxed text-ivory-100/65 max-w-sm">
              A quiet atelier in Chattogram, building furniture around the people and spaces it
              serves — since 2020.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="marker text-brass-400">Showroom</p>
            <div className="mt-4 flex items-start gap-3">
              <svg
                aria-hidden
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 shrink-0 text-brass-400"
              >
                <path d="M12 22s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <p className="font-serif text-lg text-ivory-50 leading-snug">
                Agrabad Access Road
                <br />
                Chattogram, Bangladesh
              </p>
            </div>
            <a
              href={brand.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-wider2 uppercase
                text-ivory-100/80 hover:text-brass-400 transition-colors duration-500"
            >
              Open in Maps <span aria-hidden>→</span>
            </a>
          </div>

          <div className="lg:col-span-3">
            <p className="marker text-brass-400">Contact</p>
            <ul className="mt-4 space-y-3 font-sans text-sm">
              <li>
                <a
                  href={`tel:${brand.phoneRaw}`}
                  className="text-ivory-100/85 hover:text-brass-400 transition-colors duration-300"
                >
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="text-ivory-100/85 hover:text-brass-400 transition-colors duration-300 break-all"
                >
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory-100/85 hover:text-brass-400 transition-colors duration-300"
                >
                  WhatsApp — Chat with us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory-100/10 pt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[12px] tracking-wider2 uppercase font-sans text-ivory-100/60">
            <span>© {new Date().getFullYear()} {brand.name}</span>
            <a href="#collections" className="hover:text-brass-400 transition-colors">Collections</a>
            <a href="#bespoke" className="hover:text-brass-400 transition-colors">Bespoke</a>
            <a href="#showroom" className="hover:text-brass-400 transition-colors">Showroom</a>
          </div>

          <ul className="flex items-center gap-7 text-[12px] tracking-wider2 uppercase font-sans">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory-100/80 hover:text-brass-400 transition-colors duration-300"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 font-serif italic text-sm text-ivory-100/40 text-center md:text-left">
          End of catalogue.
        </p>
      </div>
    </footer>
  )
}
