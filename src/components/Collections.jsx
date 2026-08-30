import { collections } from '../data/brand'

export default function Collections() {
  return (
    <section id="collections" className="relative bg-ivory-100 text-ink-800 py-24 md:py-40">
      <div className="mx-auto max-w-9xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-2">
            <span className="marker reveal">Collections</span>
          </div>
          <h2 className="lg:col-span-7 font-serif font-light text-display-lg text-ink-800 reveal leading-[0.98] tracking-[-0.025em] text-balance"
              data-delay="1">
            A library of living.
          </h2>
          <p className="lg:col-span-3 self-end font-sans font-light text-sm md:text-base leading-relaxed text-ink-700 reveal"
             data-delay="2">
            Five worlds of furniture — each made to order, each made around the space it will live in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 md:gap-6 auto-rows-auto">
          {collections.map((c, i) => (
            <a
              key={c.key}
              href={c.key === 'bespoke' ? '#bespoke' : `#${c.key}`}
              className={`group relative block overflow-hidden bg-ink-800 ${c.span} reveal
                ${c.accent ? 'lg:col-span-7' : ''}`}
              data-delay={Math.min((i % 4) + 1, 5)}
              aria-label={`${c.name} collection — ${c.items.join(', ')}`}
            >
              {/* Editorial hairline frame — always-visible on mobile (so the
                  gallery feels framed, not a plain feed) and fades in on hover
                  on larger viewports for the "gallery wall" feel. */}
              <span
                aria-hidden
                className={`pointer-events-none absolute z-20 border transition-[border-color,inset] duration-700 ease-out-soft
                  inset-3 border-brass-400/35 md:inset-4 md:border-brass-400/0
                  group-hover:border-brass-400/60`}
              />
              <div className={`relative w-full ${c.mobileHeight ?? ''} ${c.height}`}>
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover
                    transition-transform duration-[1800ms] ease-out-soft
                    group-hover:scale-[1.07]"
                />
                {/* Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-ink-900/15
                  transition-opacity duration-700 group-hover:from-ink-900/90" />

                {/* Top label */}
                <div className="absolute top-5 md:top-7 left-5 md:left-8 text-[10px] tracking-widest3 uppercase
                  font-sans text-ivory-100/80 flex items-center gap-3">
                  <span className={`h-px w-7 ${c.accent ? 'bg-brass-400' : 'bg-ivory-100/60'}`} />
                  0{i + 1} — {c.name}
                </div>

                {/* Bottom block */}
                <div className="absolute inset-x-5 md:inset-x-8 bottom-5 md:bottom-8 flex items-end justify-between gap-6">
                  <div>
                    <h3 className={`font-serif font-light leading-[0.95] text-ivory-50
                      transition-transform duration-700 ease-out-soft group-hover:-translate-y-1
                      ${c.span?.includes('col-span-7') ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'}`}>
                      {c.name}
                      {c.accent && <span className="text-brass-400">.</span>}
                    </h3>
                    <p className="mt-3 font-sans text-xs md:text-sm text-ivory-100/75 max-w-md">
                      {c.items.join(' · ')}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className={`hidden md:inline-flex shrink-0 h-11 w-11 items-center justify-center
                    rounded-full border border-ivory-100/40 text-ivory-100
                    transition-all duration-500 ease-out-soft
                    group-hover:bg-ivory-100 group-hover:text-ink-800 group-hover:border-transparent
                    group-hover:translate-x-1`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
