import { CALENDLY } from '../content'

type CalendlyButtonProps = {
  className?: string
}

export function CalendlyButton({ className = '' }: CalendlyButtonProps) {
  return (
    <a
      href={CALENDLY}
      target="_blank"
      rel="noopener noreferrer"
      className={['btn btn-on-dark', className].filter(Boolean).join(' ')}
    >
      Book a Session →
    </a>
  )
}
