import { brand } from '../data/brand'

export default function Showroom() {
  return (
    <section id="showroom" className="relative bg-ink-800 text-ivory-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
        {/* Image */}
        <div className="lg:col-span-7 relative h-[60vh] lg:h-auto reveal" data-delay="1">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=85"
            alt="The Heaven Furniture Mart showroom in Agrabad, Chattogram"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/30 via-transparent to-ink-900/70 lg:to-ink-900/50" />
        </div>

        {/* Copy */}
        <div className="lg:col-span-5 relative px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32 flex flex-col justify-center">
          <span className="marker text-brass-400 reveal">Visit — Agrabad</span>

          <h2 className="mt-8 font-serif font-light text-display-md text-ivory-50 reveal leading-[1.02] text-balance"
              data-delay="1">
            See it.
            <br />
            Feel it.
            <br />
            <span className="italic text-brass-400">Make it yours.</span>
          </h2>

          <p className="mt-8 font-sans font-light text-base md:text-lg leading-relaxed text-ivory-100/80 max-w-md reveal"
             data-delay="2">
            Visit our showroom in Agrabad, Chattogram. Walk through finished pieces, materials and
            the quiet of a real atelier.
          </p>

          <p className="mt-6 marker text-ivory-100/60 reveal" data-delay="3">
            Trusted by hundreds of happy homeowners across Chattogram.
          </p>

          <div className="mt-10 reveal" data-delay="4">
            <p className="marker text-brass-400">Address</p>
            <div className="mt-3 flex items-start gap-4">
              <svg
                aria-hidden
                width="22"
                height="22"
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
              <p className="font-serif text-2xl text-ivory-50 leading-snug">
                Agrabad Access Road
                <br />
                <span className="text-ivory-100/75">Chattogram, Bangladesh</span>
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 reveal" data-delay="4">
            <a
              href={brand.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light group"
            >
              Visit Our Agrabad Showroom
              <span className="arrow">→</span>
            </a>
            <a
              href={`tel:${brand.phoneRaw}`}
              className="inline-flex items-center gap-3 text-[12px] tracking-wider2 uppercase font-sans
                text-ivory-100 pb-1 border-b border-ivory-100/40 hover:border-brass-400 hover:text-brass-400
                transition-all duration-500"
            >
              {brand.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
