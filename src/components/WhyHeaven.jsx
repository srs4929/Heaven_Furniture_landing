import { whyHeaven } from '../data/brand'

export default function WhyHeaven() {
  return (
    <section className="relative bg-ivory-50 text-ink-800 py-24 md:py-40 border-t border-ink-800/10">
      <div className="mx-auto max-w-9xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-2">
            <span className="marker reveal">Trust</span>
          </div>
          <h2 className="lg:col-span-10 font-serif font-light text-display-lg text-ink-800 reveal leading-[1.0] text-balance"
              data-delay="1">
            Why <span className="italic text-brass-700">Heaven</span>.
          </h2>
        </div>

        <ol>
          {whyHeaven.map((item, i) => (
            <li
              key={item.num}
              className="reveal border-t border-ink-800/8 first:border-t-0"
              data-delay={(i % 5) + 1}
            >
              {/*
                Row — 12-col grid, now read as three columns:
                  • col 1   → numeral (slides -1 on hover/active)
                  • col 2-6 → title (slides +1, colour shifts brass)
                  • col 7-12 → description
                Wrapped in an <a> so taps register as :active on mobile,
                which is why the micro-interactions are also keyed on
                `active:` — without this, touch users would never feel
                the hover state fire at all.
              */}
              <a
                href="#contact"
                aria-label={`${item.title} — ${item.text}`}
                className="group block touch-manipulation
                  transition-colors duration-500
                  hover:bg-ivory-100/50 active:bg-ivory-100/70
                  hover:scale-[1.005] active:scale-[0.997]
                  transition-transform"
              >
                <div
                  className="relative grid grid-cols-12 gap-3 md:gap-10 py-10 md:py-12 items-baseline"
                >
                  {/* hairline accent that fills on hover/active */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -top-px h-px
                      bg-ink-800/0
                      group-hover:bg-brass-500/60 group-active:bg-brass-500
                      transition-colors duration-700 ease-out-soft"
                  />

                  <span className="col-span-2 md:col-span-1 font-serif text-xl md:text-3xl text-brass-700
                    transition-transform duration-700 ease-out-soft
                    group-hover:-translate-x-1 group-active:-translate-x-1.5">
                    {item.num}
                  </span>

                  <h3 className="col-span-10 md:col-span-5 font-serif text-xl md:text-3xl text-ink-800 text-balance
                    transition-all duration-500 ease-out-soft
                    group-hover:text-brass-700 group-active:text-brass-700
                    group-hover:translate-x-1 group-active:translate-x-1.5">
                    {item.title}
                  </h3>

                  <p className="col-span-12 md:col-span-6 font-sans text-sm md:text-base leading-relaxed text-ink-700 text-pretty
                    transition-colors duration-500
                    group-hover:text-ink-800 group-active:text-ink-800">
                    {item.text}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
