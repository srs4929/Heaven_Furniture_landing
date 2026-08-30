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
              <div className="grid grid-cols-12 gap-3 md:gap-10 py-10 md:py-12 items-baseline group
                transition-colors duration-500 hover:bg-ivory-100/40">
                <span className="col-span-2 md:col-span-1 font-serif text-xl md:text-3xl text-brass-700">
                  {item.num}
                </span>
                <h3 className="col-span-10 md:col-span-5 font-serif text-xl md:text-3xl text-ink-800 text-balance
                  transition-colors duration-500 group-hover:text-brass-700">
                  {item.title}
                </h3>
                <p className="col-span-12 md:col-span-6 font-sans text-sm md:text-base leading-relaxed text-ink-700 text-pretty">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
