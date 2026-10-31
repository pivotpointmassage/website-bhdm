import { CalendlyButton } from './CalendlyButton'

/** Phone-only "Book a Session" bar. Appears once the hero button has scrolled out of view. */
export function StickyBookBar({ visible }: { visible: boolean }) {
  return (
    <div className={`sticky-book${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <CalendlyButton className="sticky-book-btn" />
    </div>
  )
}
