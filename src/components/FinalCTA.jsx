import { brand } from '../data/brand'

export default function FinalCTA() {
  return (
    <section className="relative bg-ink-900 text-ivory-100 overflow-hidden">
      <div className="relative h-[80vh] min-h-[600px] w-full grain-overlay">
        <img
          src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=2200&q=85"
          alt="A quiet interior with bespoke furniture, warm light and timeless materials"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/55 to-ink-900/90" />

        <div className="relative h-full mx-auto max-w-9xl px-6 md:px-10 flex flex-col justify-center">
          <div className="max-w-4xl">
            <span className="marker text-brass-400 reveal">Begin</span>

            <h2 className="mt-8 font-serif font-light text-display-lg leading-[1.02] text-ivory-50 reveal text-balance"
                data-delay="1">
              Let's make
              <br />
              something that
              <br />
              <span className="italic text-brass-400">belongs here.</span>
            </h2>

            <p className="mt-8 font-sans font-light text-base md:text-lg leading-relaxed text-ivory-100/85 max-w-xl reveal"
               data-delay="2">
              Have a space in mind? Tell us what you're looking for. We'll respond the same day.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6 reveal" data-delay="3">
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-5 bg-ivory-100 text-ink-800
                  text-[12px] tracking-wider2 uppercase font-sans font-medium
                  transition-all duration-500 ease-out-soft
                  hover:bg-brass-500 hover:text-ink-900 hover:gap-6 group"
              >
                Book Free Consultation
                <span className="arrow transition-transform duration-500 group-hover:translate-x-1.5">→</span>
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center gap-3 text-[12px] tracking-wider2 uppercase font-sans
                  text-ivory-100/70 hover:text-brass-400
                  transition-colors duration-500 group"
              >
                <span className="arrow">→</span>
                {brand.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
