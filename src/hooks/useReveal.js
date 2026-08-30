import { useEffect } from 'react'

/**
 * Smooth bidirectional reveal:
 *  - On enter  → adds `.in-view` (fade-up animates in)
 *  - On leave  → removes `.in-view` (so scrolling back up re-animates)
 * Combined with `scroll-behavior: smooth` on <html>, every section
 * glides in/out as the user scrolls in either direction.
 *
 * Also auto-observes any `.reveal` nodes that mount later (lazy renders,
 * route changes, etc.) via MutationObserver so nothing stays stuck at
 * `opacity: 0`.
 */
export default function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!('IntersectionObserver' in window) || reduceMotion) {
      // Reveal everything immediately — no animation, no observer.
      const revealAll = () => {
        document
          .querySelectorAll('.reveal')
          .forEach((el) => el.classList.add('in-view'))
      }
      revealAll()
      const mo = new MutationObserver(revealAll)
      mo.observe(document.body, { childList: true, subtree: true })
      return () => mo.disconnect()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          } else {
            // Re-hide so scrolling back up triggers the fade-up again.
            entry.target.classList.remove('in-view')
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const observe = (root) => {
      root.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }
    observe(document)

    // Watch for nodes that mount after initial render (lazy sections,
    // portals, route swaps). Anything new gets observed automatically.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.classList && node.classList.contains('reveal')) {
            observer.observe(node)
          }
          if (node.querySelectorAll) {
            node.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
          }
        })
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mo.disconnect()
    }
  }, [])
}
