import { timeline } from '../data/brand'

export default function Timeline() {
  return (
    <section className="relative bg-ivory-50 text-ink-800 py-24 md:py-32 border-t border-ink-800/10">
      <div className="mx-auto max-w-9xl px-6 md:px-10">
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div>
            <span className="marker reveal">Milestones</span>
            <h2 className="mt-5 font-serif font-light text-display-md text-ink-800 reveal leading-[1.05] text-balance"
                data-delay="1">
              A house that
              <br />
              <span className="italic text-brass-700">keeps its promises.</span>
            </h2>
          </div>
          <span className="hidden md:block marker text-stone-warm reveal" data-delay="2">
            Since 2020
          </span>
        </div>

        <div className="relative">
          {/* Desktop: connected horizontal axis with all nodes evenly spaced.
              Mobile: vertical axis, all nodes stack. */}
          <div className="hidden md:block">
            {/* Responsive rail: spans from the first dot to the last dot.
                Grid columns track the milestone count so every year gets
                equal breathing room (5 milestones → 5 columns on desktop). */}
            <ol
              className="relative grid gap-x-6"
              style={{ gridTemplateColumns: `repeat(${timeline.length}, minmax(0, 1fr))` }}
            >
              {/* Continuous brass rail — spans between the first and last dot
                  centres. Dot is 1rem (h-4 w-4) so left/right insets at 0.5rem
                  keep the line from poking past the edge nodes. */}
              <span
                aria-hidden
                className="absolute pointer-events-none bg-brass-600/40
                  left-2 right-2 top-12 h-px -translate-y-1/2"
              />
              {timeline.map((t, i) => (
                <li
                  key={t.year}
                  className="relative reveal pt-16 pr-2"
                  data-delay={i + 1}
                >
                  {/* Node dot on the rail — sits on the brass line at top-12 */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-12 h-4 w-4 rounded-full
                      bg-ivory-50 border border-brass-600 -translate-y-1/2 -translate-x-1/2"
                  />
                  <span
                    className="block font-serif text-3xl md:text-4xl text-brass-700 leading-none"
                    style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}
                  >
                    {t.year}
                  </span>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-ink-700 max-w-[16rem]">
                    {t.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile: vertical axis, nodes stack */}
          <ol className="md:hidden relative pl-10 space-y-10">
            {/* Vertical timeline line — pinned to the container edge */}
            <span
              aria-hidden
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-brass-600/40 pointer-events-none"
            />
            {timeline.map((t, i) => (
              <li key={t.year} className="relative reveal" data-delay={i + 1}>
                {/* Node dot — centred on the 2px line, sitting in the gutter to the
                    left of the year so it can never overlap the text */}
                <span
                  aria-hidden
                  className="absolute -left-[11px] top-2 h-4 w-4 rounded-full
                    bg-ivory-50 border border-brass-600 z-10"
                />
                {/* Content wrapper — pushed past the gutter so dots never touch text */}
                <div className="pl-8 -ml-2">
                  <span
                    className="block font-serif text-3xl text-brass-700 leading-none"
                    style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}
                  >
                    {t.year}
                  </span>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-ink-700 max-w-[20rem]">
                    {t.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
