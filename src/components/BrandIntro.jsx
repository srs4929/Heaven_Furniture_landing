export default function BrandIntro() {
  return (
    <section className="relative bg-ivory-50 text-ink-800 py-32 md:py-48">
      <div className="mx-auto max-w-9xl px-6 md:px-10">
        <div className="flex items-start justify-between gap-10 mb-20 md:mb-28">
          <span className="marker reveal">Philosophy</span>
          <span className="marker reveal text-stone-warm" data-delay="1">
            Heaven Furniture Mart
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <h2
            className="lg:col-span-8 font-serif font-light text-display-lg text-ink-800 reveal text-balance leading-[1.02]"
            data-delay="1"
          >
            <span className="block">Not mass–produced.</span>
            <span className="block italic text-brass-700">Made for you.</span>
          </h2>

          <div className="lg:col-span-4 lg:pt-4 reveal" data-delay="3">
            <p className="font-sans font-light text-base md:text-lg leading-relaxed text-ink-700 max-w-md">
              At Heaven Furniture Mart, we believe furniture should feel like it
              belongs in your home. That’s why we design each piece around your
              space, your needs, and your lifestyle.
            </p>
            <div className="mt-10 h-px w-16 bg-brass-600" />
            <p className="mt-6 marker text-stone-deep">
              Designed. Crafted. Customized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
