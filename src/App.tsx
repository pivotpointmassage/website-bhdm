const MASSAGEBOOK = 'https://www.massagebook.com/therapists/bronsonmassage'
const CALENDLY = 'https://calendly.com/bronsondavidson'
const MAPS = 'https://www.google.com/maps/search/?api=1&query=550+Water+St+Suite+4+Building+I+Santa+Cruz+CA+95060'
const PHONE = '(916) 342-5248'
const PHONE_HREF = 'tel:+19163425248'
const ADDRESS = '550 Water St, Building I / Suite 4, Santa Cruz, CA 95060'
import { useState, type ReactNode } from 'react'

const HOURS: { day: string; time: string }[] = [
  { day: 'Mon', time: 'Closed' },
  { day: 'Tue', time: 'Closed' },
  { day: 'Wed', time: 'By appointment' },
  { day: 'Thu', time: 'Closed' },
  { day: 'Fri', time: 'By appointment' },
  { day: 'Sat', time: 'Closed' },
  { day: 'Sun', time: 'Closed' },
]

function BookingGraphic() {
  return (
    <div
      className="bg-sage-muted/80 text-[#c5d0bc] flex h-full min-h-[8rem] w-full items-center justify-center p-4 md:min-w-[9rem] md:max-w-[12rem] rounded-r-xl"
      aria-hidden
    >
      <svg viewBox="0 0 120 120" className="h-24 w-24" fill="none">
        <title>Symbol</title>
        <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />
        <line x1="4" y1="60" x2="116" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" opacity="0.4" />
        <path
          d="M32 64c-2-6 2-14 8-16 3-1 5 0 7 3 1-2 3-3 5-2 3 0 4 2 3 4 3-1 5 0 4 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M88 64c2-6-2-14-8-16-3-1-5 0-7 3-1-2-3-3-5-2-3 0-4 2-3 4-3-1-5 0-4 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line x1="18" y1="58" x2="102" y2="58" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 4" opacity="0.3" />
      </svg>
    </div>
  )
}

function BookPrimaryButton() {
  return (
    <a
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3.5 text-center text-sm font-semibold text-[#1a1f1a] shadow-sm transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cta)]"
      href={MASSAGEBOOK}
    >
      Book a session
      <span className="opacity-70" aria-hidden>
        →
      </span>
    </a>
  )
}

function BookToolbar() {
  return (
    <div
      className="md:hidden pointer-events-auto fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a0a0a]/90 px-4 py-3 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md"
    >
      <a
        className="block w-full rounded-lg bg-cta py-3.5 text-center text-sm font-semibold text-[#1a1f1a] transition hover:bg-white"
        href={MASSAGEBOOK}
      >
        Book a session
      </a>
    </div>
  )
}

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="text-lg font-semibold tracking-tight text-balance text-white/95">
      {children}
    </h2>
  )
}

function Headshot() {
  const [ok, setOk] = useState(true)
  return (
    <div className="h-40 w-40 sm:h-44 sm:w-44 overflow-hidden rounded-full border-2 border-sage/40 bg-sage-muted/50 shadow-lg">
      {ok ? (
        <img
          src="/headshot.jpg"
          alt="Bronson Davidson"
          className="h-full w-full object-cover"
          onError={() => setOk(false)}
        />
      ) : (
        <div
          className="grid h-full w-full place-content-center bg-gradient-to-br from-sage/30 to-elevated text-3xl font-semibold text-white/50"
          role="img"
          aria-label="Placeholder until headshot is added: add public/headshot.jpg"
        >
          BD
        </div>
      )}
    </div>
  )
}

export function App() {
  return (
    <div className="pb-24 md:pb-0">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-cta focus:px-3 focus:py-2 focus:text-sm focus:text-[#1a1f1a] focus:outline-none"
        href="#main"
      >
        Skip to main content
      </a>
      <header className="border-b border-white/5 bg-elevated/50">
        <div className="mx-auto max-w-3xl px-4 py-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 text-sm text-white/50">
          <a href={PHONE_HREF} className="w-fit text-[var(--color-link)] no-underline hover:underline">
            {PHONE}
          </a>
          <p className="text-white/60 sm:text-right">{ADDRESS}</p>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl text-balance">Bronson Davidson</h1>
        <p className="text-lg text-white/75 mb-2">Neuromuscular massage & craniosacral therapy</p>
        <p className="text-sm text-white/50 mb-10">Santa Cruz, California</p>

        <h2 className="text-xl font-semibold text-white mb-4" id="book-heading">
          Book me here
        </h2>

        <section className="mb-14" aria-labelledby="book-heading">
          <div className="overflow-hidden flex flex-col rounded-2xl border border-white/10 bg-elevated shadow-sm md:flex-row">
            <div className="flex-1 p-5 sm:p-6">
              <p className="font-medium text-lg text-white mb-3">Bronson Davidson</p>
              <p className="text-white/80 text-[15px] leading-relaxed mb-5">
                I&apos;m a neuromuscular massage therapist in practice in Santa Cruz. I&apos;m also training in
                biodynamic craniosacral therapy—Calendly below is for related certification sessions
                when those slots are available.
              </p>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <a
                  href={MASSAGEBOOK}
                  className="inline-flex items-center gap-2 rounded-md bg-cta px-3 py-2 text-sm font-medium text-[#1a1f1a] transition hover:bg-white"
                >
                  <span>MassageBook</span>
                  <span className="opacity-80" aria-hidden>
                    — full booking &amp; address
                  </span>
                </a>
              </div>
              <a
                href={CALENDLY}
                className="inline-flex items-center gap-2.5 text-[var(--color-link)] text-sm font-medium hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white"
                  aria-hidden
                >
                  C
                </span>
                calendly.com/bronsondavidson
              </a>
            </div>
            <BookingGraphic />
          </div>
        </section>

        <div className="mb-8 hidden sm:block">
          <BookPrimaryButton />
        </div>

        <section className="mb-14" aria-labelledby="testimonial">
          <SectionHeading id="testimonial">From a client</SectionHeading>
          <figure className="mt-3 rounded-xl border-l-4 border-sage/70 bg-elevated/60 px-4 py-3">
            <blockquote className="text-white/90 text-[15px] leading-relaxed">
              <p className="m-0">
                &ldquo;Bronson was beyond amazing. He addressed some chronic issues I have and gave me great
                confidence that with multiple sessions they could be resolved. He has a wonderful deep yet
                light touch that&apos;s like butter.&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-2 text-sm text-white/45">— M. Hughes</figcaption>
          </figure>
        </section>

        <section className="mb-14" aria-labelledby="session">
          <SectionHeading id="session">What to expect</SectionHeading>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-white/80 text-[15px] leading-relaxed marker:text-sage/80">
            <li>Clear communication so we can match the session to what you need</li>
            <li>Swedish work and breath as a way in—supporting a relaxed, parasympathetic state</li>
            <li>
              Deeper work when it fits: deep tissue, trigger point, MFT, cross fiber, Thai work, and
              craniosacral-style holds
            </li>
          </ul>
        </section>

        <section className="mb-14" aria-labelledby="practicals">
          <SectionHeading id="practicals">Location &amp; contact</SectionHeading>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-white/40 mb-1">Address</h3>
              <p className="m-0 text-white/90">{ADDRESS}</p>
              <a className="mt-2 inline-block text-[var(--color-link)] font-medium" href={MAPS} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-white/40 mb-1">Phone</h3>
              <a href={PHONE_HREF} className="text-[var(--color-link)] font-medium">
                {PHONE}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-white/40 mb-1">Hours</h3>
              <p className="m-0 text-sm text-white/70 mb-2">Schedule varies. Current usual availability:</p>
              <ul className="m-0 grid max-w-sm gap-1 sm:grid-cols-2 text-white/80">
                {HOURS.map(({ day, time }) => (
                  <li
                    key={day}
                    className="flex justify-between gap-4 border-b border-white/5 py-1.5"
                  >
                    <span className="text-white/50">{day}</span>
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-6" aria-labelledby="about">
          <div className="md:flex md:gap-10 md:items-start">
            <div className="flex-1 min-w-0 order-1">
              <SectionHeading id="about">About</SectionHeading>
              <div className="mt-3 space-y-3 text-white/80 text-[15px] leading-relaxed">
                <p className="m-0">
                  I&apos;m Bronson, a neuromuscular massage therapist and craniosacral practitioner in Santa Cruz.
                  Massage has been a deep well of connection—to myself and to people working through pain and
                  stress. I lived with chronic pain for much of my twenties; bodywork helped me find a more
                  comfortable, present way of living.
                </p>
                <p className="m-0">
                  After the Neuromuscular Program at the National Holistic Institute in San Jose, I keep seeing
                  how much memory lives in the tissues. I love learning each person&apos;s story; it makes the
                  work more specific and more useful.
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-0 shrink-0 flex justify-center order-0 md:order-2 self-start">
              <Headshot />
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <p className="m-0 mb-2">© {new Date().getFullYear()} Bronson Davidson Massage. Santa Cruz, CA.</p>
          <a href={MASSAGEBOOK} className="text-[var(--color-link)]">
            View full MassageBook profile
          </a>
        </footer>
      </main>
      <BookToolbar />
    </div>
  )
}
