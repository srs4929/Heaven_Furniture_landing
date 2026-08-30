import { brand } from '../data/brand'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink-800 text-ivory-100 grain-overlay"
    >
      {/* Background image — slow, ambient zoom */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=85"
          alt="A bespoke living room with custom upholstered sofa, warm timber, and quiet natural light"
          className="h-full w-full object-cover animate-slow-zoom"
          loading="eager"
          fetchpriority="high"
        />
        {/* Cinematic gradient — keeps text readable without flattening the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,16,14,0.85) 0%, rgba(10,16,14,0.55) 35%, rgba(10,16,14,0.78) 70%, rgba(10,16,14,0.95) 100%)',
          }}
        />
        {/* Left-side vignette — anchors the headline copy */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,16,14,0.85) 0%, rgba(10,16,14,0.55) 45%, rgba(10,16,14,0.20) 75%, rgba(10,16,14,0.10) 100%)',
          }}
        />
        {/* Mobile scrim — single unified gradient that darkens top + bottom edges
            (where text sits) but stays ~30–40% opacity across the center so the
            living-room photo actually reads on small viewports. */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,16,14,0.70) 0%, rgba(10,16,14,0.30) 28%, rgba(10,16,14,0.30) 62%, rgba(10,16,14,0.85) 100%)',
          }}
        />
        {/* Text-anchor scrim — extra darkness directly behind the headline + sub-copy
            on desktop so the white serif headline pops. Hidden on mobile where the
            vertical gradient above already protects the headline. */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 18% 52%, rgba(10,16,14,0.70) 0%, rgba(10,16,14,0.35) 45%, rgba(10,16,14,0.00) 75%)',
          }}
        />
      </div>

      {/* Editorial topbar — location + established (no second wordmark) */}
      <div className="absolute inset-x-0 top-20 md:top-[96px] z-10">
        <div className="mx-auto max-w-9xl px-6 md:px-10">
          <div className="flex items-center justify-end gap-3 pb-4 border-b border-ivory-100/25">
            <span className="hidden md:inline-block drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] text-[11px] tracking-widest2 uppercase font-sans text-ivory-50 font-medium">
              {brand.city} · Est. {brand.founded}
            </span>
            <span className="h-px w-8 bg-brass-400" />
          </div>
        </div>
      </div>

      {/* Centered hero copy */}
      <div className="relative z-10 mx-auto max-w-9xl px-6 md:px-10 min-h-[100svh] flex flex-col justify-center pt-24 md:pt-48 pb-24 md:pb-32">
        <div className="max-w-5xl">
          <span
            className="marker text-brass-300 reveal in-view drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]"
            data-delay="1"
          >
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brass-400" />
              A Furniture Atelier — Chattogram
            </span>
          </span>

          <h1
            className="mt-6 md:mt-8 font-serif font-light text-display-lg text-ivory-50 reveal in-view text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] leading-[1.02]"
            data-delay="2"
          >
            <span className="block">Furniture,</span>
            <span className="block italic font-light text-brass-400">Crafted Around You.</span>
          </h1>

          <p
            className="mt-10 max-w-xl font-sans font-light text-base md:text-lg leading-relaxed text-ivory-50 reveal in-view text-pretty drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]"
            data-delay="3"
          >
            Bespoke furniture atelier based in Agrabad, Chattogram — designed for your space, your lifestyle, and the way you live.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6 reveal in-view" data-delay="4">
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-8 py-5 bg-ivory-100 text-ink-800
                text-[12px] tracking-wider2 uppercase font-sans font-medium
                transition-all duration-500 ease-out-soft
                hover:bg-brass-500 hover:text-ink-900 hover:gap-6 group"
            >
              Request a Quote
              <span className="arrow transition-transform duration-500 group-hover:translate-x-1.5">→</span>
            </a>
            <a
              href={`tel:${brand.phoneRaw}`}
              className="inline-flex items-center gap-3 text-[12px] tracking-wider2 uppercase font-sans
                text-ivory-100 pb-1 border-b border-ivory-100/40
                transition-all duration-500 hover:border-brass-400 hover:text-brass-400"
            >
              {brand.phone}
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-10 z-10">
        <div className="mx-auto max-w-9xl px-6 md:px-10 flex items-end justify-between gap-6 text-[11px] tracking-widest2 uppercase font-sans text-ivory-50 font-medium">
          <div className="hidden md:flex flex-col gap-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            <span>Scroll to explore</span>
            <span aria-hidden className="block h-12 w-px bg-ivory-100/50 mt-1 animate-pulse" />
          </div>
          <div className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] text-right">
            <span>Opening</span>
          </div>
        </div>
      </div>
    </section>
  )
}
