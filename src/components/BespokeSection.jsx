import { process, brand } from '../data/brand'

export default function BespokeSection() {
  return (
    <section
      id="bespoke"
      className="relative text-ivory-100 py-24 md:py-40 overflow-hidden border-t border-brass-600/30"
      style={{ backgroundColor: '#1F140D' }}
    >
      {/* Blueprint grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
      {/* Radial dot pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(#C5A059 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-9xl px-6 md:px-10">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 md:mb-28">
          <div className="lg:col-span-2">
            <span className="marker reveal !text-[#C5A059]">Bespoke</span>
          </div>
          <h2
            className="lg:col-span-10 font-serif font-light text-display-lg text-[#F5F2EB] reveal text-balance leading-[1.02]"
            data-delay="1"
          >
            Your space
            <br />
            isn&rsquo;t standard.
            <br />
            <span className="italic" style={{ color: '#C5A059' }}>
              Why should your furniture be?
            </span>
          </h2>
        </div>

        {/* Editorial 4-column grid — image-free */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#C5A059]/30">
          {process.map((step, i) => (
            <li
              key={step.num}
              className={`group reveal relative flex flex-col gap-5 py-10 lg:py-14 lg:pr-8 transition-colors duration-300 ease-out ${getCellBorders(i)}`}
              data-delay={i + 1}
            >
              {/* brass hairline that brightens on hover */}
              <span className="absolute left-0 right-0 top-0 h-px bg-[#C5A059]/0 transition-colors duration-300 ease-out group-hover:bg-[#C5A059]/30" aria-hidden />

              <span
                className="font-serif italic leading-none select-none transition-colors duration-300 ease-out"
                style={{
                  color: '#C5A059',
                  fontSize: 'clamp(3.75rem, 6vw, 5.5rem)',
                }}
              >
                <span className="block transition-colors duration-300 ease-out group-hover:text-[#F5F2EB]">
                  {step.num}
                </span>
              </span>

              <span className="h-px w-10 bg-[#C5A059]/45 transition-colors duration-300 ease-out group-hover:w-16 group-hover:bg-[#C5A059]" aria-hidden />

              <h3 className="font-serif font-light text-2xl md:text-3xl leading-[1.1] text-[#F5F2EB]/80 text-balance transition-colors duration-300 ease-out group-hover:text-[#C5A059]">
                {step.title}
              </h3>

              <p className="font-sans text-sm md:text-base leading-relaxed text-[#F5F2EB]/55 max-w-xs text-pretty transition-colors duration-300 ease-out group-hover:text-[#F5F2EB]/80">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        {/* Closing CTA — kept on dark to stay on-tone */}
        <div className="mt-24 md:mt-32 pt-12 border-t border-[#C5A059]/30 flex flex-col items-start gap-4 reveal" data-delay="2">
          <p className="font-serif italic text-xl md:text-2xl text-[#F5F2EB]/90 max-w-xl leading-snug">
            Tell us the space. Tell us the dimensions. Tell us how you live &mdash;
            <span style={{ color: '#C5A059' }} className="not-italic">
              {' '}we&rsquo;ll design around it.
            </span>
          </p>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 btn-light group"
          >
            Book Free Consultation
            <span className="arrow">&rarr;</span>
          </a>
          <p className="mt-2 marker !text-[#C5A059]/80">No commitment required.</p>
        </div>
      </div>
    </section>
  )
}

// Hairline rules between cells:
// - mobile: parent border-t separates first row; later rows need their own top border
// - md (2-col): items in col 2 need left border; row 2 needs top border
// - lg (4-col): every non-first cell needs left border (no per-cell tops)
function getCellBorders(i) {
  if (i === 0) return ''
  const cls = []
  cls.push('border-t border-[#C5A059]/30 pt-10 md:border-t-0 md:pt-10 lg:border-t-0 lg:pt-14')
  cls.push('md:border-l md:border-[#C5A059]/30 md:pl-8')
  if (i === 2) cls.push('md:border-t md:border-[#C5A059]/30')
  return cls.join(' ')
}
