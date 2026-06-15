type CalendlyButtonProps = {
  className?: string
  fullWidth?: boolean
}

export function CalendlyButton({ className = '', fullWidth = false }: CalendlyButtonProps) {
  return (
    <a
      href="https://calendly.com/bronsondavidson"
      target="_blank"
      rel="noreferrer"
      className={[
        'inline-flex items-center justify-center gap-3 rounded-full bg-sage px-12 py-4 text-lg font-bold text-canvas transition-all hover:scale-105 hover:bg-white',
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      Book a Session
      <span aria-hidden>→</span>
    </a>
  )
}
