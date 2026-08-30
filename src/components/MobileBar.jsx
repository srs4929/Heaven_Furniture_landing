import { useEffect, useState } from 'react'
import { brand } from '../data/brand'

export default function MobileBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 md:hidden transition-transform duration-700 ease-out-soft ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!show}
    >
      <div className="bg-ink-900/95 backdrop-blur-md border-t border-brass-600/30 shadow-[0_-12px_40px_-15px_rgba(0,0,0,0.4)] px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full items-center justify-center gap-3 bg-brass-600 hover:bg-brass-500 active:bg-brass-700 text-ink-900 font-sans font-medium text-[13px] tracking-wider2 uppercase px-6 py-4 transition-all duration-500 ease-out-soft whitespace-nowrap"
        >
          <span>Book Free Consultation</span>
          <span
            className="arrow transition-transform duration-500 ease-out-soft group-hover:translate-x-1"
            aria-hidden
          >
            &rarr;
          </span>
        </a>
      </div>
    </div>
  )
}
