import { useEffect, useState } from 'react'
import { brand } from '../data/brand'

const links = [
  { label: 'Collections', href: '#collections' },
  { label: 'Bespoke', href: '#bespoke' },
  { label: 'Our Story', href: '#story' },
  { label: 'Showroom', href: '#showroom' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const onLinkClick = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out-soft
          ${scrolled
            ? 'bg-ivory-50/95 backdrop-blur-md border-b border-ink-800/10 py-3'
            : 'bg-transparent py-6'}`}
      >
        <div className="mx-auto max-w-9xl px-6 md:px-10 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#top"
            className={`group flex items-baseline gap-2 transition-colors duration-500
              ${scrolled ? 'text-ink-800' : 'text-ivory-100'}`}
            aria-label={`${brand.name} — Home`}
          >
            <span className="font-serif text-xl md:text-2xl tracking-tight leading-none">
              Heaven
            </span>
            <span
              className={`hidden md:inline text-[10px] tracking-widest2 uppercase font-sans
                ${scrolled ? 'text-brass-600' : 'text-brass-400'}`}
            >
              Furniture Mart
            </span>
          </a>

          {/* Desktop links */}
          <nav
            className={`hidden lg:flex items-center gap-10 text-[12px] tracking-wider2 uppercase font-sans
              transition-colors duration-500
              ${scrolled ? 'text-ink-800' : 'text-ivory-100'}`}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative py-1 hover:text-brass-500 transition-colors duration-300
                  after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0
                  after:bg-current after:transition-all after:duration-500 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-3 px-5 py-2.5 text-[11px]
                tracking-wider2 uppercase font-sans font-medium
                transition-all duration-500 ease-out-soft
                ${scrolled
                  ? 'bg-ink-800 text-ivory-100 hover:bg-ink-700'
                  : 'border border-ivory-100/60 text-ivory-100 hover:bg-ivory-100 hover:text-ink-800'}`}
            >
              Request a Quote
              <span aria-hidden>→</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className={`lg:hidden relative h-11 w-11 grid place-items-center rounded-full
                border transition-colors duration-500
                ${scrolled
                  ? 'text-ink-800 border-ink-800/25 hover:border-brass-500 hover:text-brass-600'
                  : 'text-ivory-50 border-ivory-100/40 hover:border-brass-400 hover:text-brass-400'}`}
            >
              <span className="sr-only">Menu</span>
              <span
                className={`absolute h-[2px] w-6 rounded-full bg-current transition-all duration-500 ease-out-soft
                  ${open ? 'rotate-45' : '-translate-y-2'}`}
              />
              <span
                className={`absolute h-[2px] w-6 rounded-full bg-current transition-all duration-500 ease-out-soft
                  ${open ? '-rotate-45' : 'translate-y-2'}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-ink-800 text-ivory-100
          transition-all duration-700 ease-out-soft
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex h-full flex-col justify-center px-8 pt-24 pb-12">
          <span className="marker text-brass-400 mb-10">Menu</span>
          <nav className="flex flex-col gap-7">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={onLinkClick}
                className="font-serif text-4xl leading-none text-ivory-100
                  transition-colors duration-300 hover:text-brass-400"
                style={{
                  transitionDelay: open ? `${i * 60}ms` : '0ms',
                  transform: open ? 'translateY(0)' : 'translateY(12px)',
                  opacity: open ? 1 : 0,
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-14 flex flex-col gap-5 text-stone-light marker text-brass-400">
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onLinkClick}
              className="inline-flex items-center gap-3 mt-2 px-6 py-4 bg-ivory-100 text-ink-800
                text-[11px] tracking-wider2 uppercase font-sans w-fit"
            >
              Request a Quote <span aria-hidden>→</span>
            </a>

            {/* Quick-action icons — WhatsApp / Call / Maps */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                onClick={onLinkClick}
                className="grid h-12 w-12 place-items-center border border-ivory-100/25
                  text-ivory-100 hover:bg-ivory-100 hover:text-ink-800 transition-colors duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20.5 11.5a8.5 8.5 0 1 1-15.5 4.6L4 21l4.9-1A8.5 8.5 0 0 0 20.5 11.5z" />
                  <path d="M8.5 9.5c.5 2 1.7 3.5 3.5 4.5l1.5-1.5 3 1.5-1.5 1.5c-2.5-.5-5.5-2.5-6.5-6z" />
                </svg>
              </a>
              <a
                href={`tel:${brand.phoneRaw}`}
                aria-label="Call us"
                onClick={onLinkClick}
                className="grid h-12 w-12 place-items-center border border-ivory-100/25
                  text-ivory-100 hover:bg-ivory-100 hover:text-ink-800 transition-colors duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </a>
              <a
                href={brand.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open showroom in Google Maps"
                onClick={onLinkClick}
                className="grid h-12 w-12 place-items-center border border-ivory-100/25
                  text-ivory-100 hover:bg-ivory-100 hover:text-ink-800 transition-colors duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </a>
            </div>

            <a href={`tel:${brand.phoneRaw}`} onClick={onLinkClick} className="mt-2 text-ivory-200/80 text-sm font-sans">
              {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} onClick={onLinkClick} className="text-ivory-200/80 text-sm font-sans">
              {brand.email}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
