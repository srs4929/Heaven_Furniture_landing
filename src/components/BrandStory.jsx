import { brand } from '../data/brand'

export default function BrandStory() {
  return (
    <section
      id="story"
      className="relative bg-ivory-100 text-ink-800 py-24 md:py-36 border-t border-ink-800/10 overflow-hidden"
    >
      {/* Subtle editorial watermark — chapter marker */}
     
      <div className="relative mx-auto max-w-9xl px-6 md:px-10">
        {/* Section header — restrained micro-labels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 md:mb-20 items-end">
          <div className="lg:col-span-2">
            <span className="marker reveal">From Our Atelier</span>
          </div>
         
        </div>

        {/* Director story — image + pull-quote + provenance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Photo: showroom from /public, framed editorial-style */}
          <figure className="lg:col-span-7 reveal" data-delay="1">
            <div className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden bg-cocoa-800">
              <img
                src="/showroom.jpg"
                alt="The Heaven Furniture Mart showroom on Agrabad Access Road, Chattogram"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/35 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-5 flex items-center gap-4">
              <span className="h-px w-10 bg-brass-600" aria-hidden />
              <span className="marker text-stone-deep">
                Agrabad Showroom — Chattogram
              </span>
            </figcaption>
          </figure>

          {/* Story column */}
          <div className="lg:col-span-5 flex flex-col gap-10 reveal" data-delay="2">
            <div className="flex items-center justify-between">
              <span className="marker text-brass-700">The Director</span>
              <span className="marker text-stone-warm">Since 2020</span>
            </div>

            <blockquote className="relative bg-ivory-50 pl-8 pr-6 py-12 md:pl-12 md:pr-10 md:py-14 shadow-[0_30px_80px_-40px_rgba(15,22,20,0.35)]">
              <span
                aria-hidden
                className="absolute left-0 top-12 bottom-12 w-px bg-brass-600/60"
              />
              <p className="font-serif font-light text-2xl md:text-3xl leading-[1.4] text-ink-800 text-balance italic">
                &ldquo;{brand.director.quote}&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-5">
                <span className="h-px w-12 bg-brass-600" aria-hidden />
                <div>
                  <p className="font-serif text-lg text-ink-800">{brand.director.name}</p>
                  <p className="mt-1 marker text-stone-deep">{brand.director.title}</p>
                </div>
              </footer>
            </blockquote>

            </div>
        </div>
      </div>
    </section>
  )
}
