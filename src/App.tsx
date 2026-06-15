import { useState, type ReactNode } from 'react'

/** Sourced from MassageBook listing (therapist/primary + theme background) */
const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`

const PRACTICE_NAME = 'Pivot Point Bodywork'
const THERAPIST_NAME = 'Bronson Davidson'
const CALENDLY = 'https://calendly.com/bronsondavidson'
const MAPS = 'https://www.google.com/maps/search/?api=1&query=550+Water+St+Suite+4+Building+I+Santa+Cruz+CA+95060'
const PHONE = '831.295.5707'
const PHONE_HREF = 'tel:+18312955707'
const EMAIL = 'bronsonharleymassage@gmail.com'
const EMAIL_HREF = 'mailto:bronsonharleymassage@gmail.com'
const ADDRESS = '550 Water St, Building I / Suite 4, Santa Cruz, CA 95060'
const IMG_MBP_PRIMARY = 'images/massagebook-primary.png'
const IMG_LOGO = 'images/logo.png'

function BookToolbar() {
  return (
    <div
      className="md:hidden pointer-events-auto fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a0a0a]/90 px-4 py-3 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md"
    >
      <a
        className="block w-full rounded-lg bg-cta py-3.5 text-center text-sm font-semibold text-[#1a1f1a] transition hover:bg-white"
        href={CALENDLY}
        target="_blank"
        rel="noreferrer"
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
          src={asset(IMG_MBP_PRIMARY)}
          alt={THERAPIST_NAME}
          className="h-full w-full object-cover object-top"
          onError={() => setOk(false)}
        />
      ) : (
        <div
          className="grid h-full w-full place-content-center bg-gradient-to-br from-sage/30 to-elevated text-3xl font-semibold text-white/50"
          role="img"
          aria-label="Headshot"
        >
          BD
        </div>
      )}
    </div>
  )
}

function HeroLogo() {
  return (
    <div className="relative w-[144px] h-[144px] sm:w-[224px] sm:h-[224px] lg:w-[288px] lg:h-[288px]">
      {/* Organic blob with fade mask */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: '58% 42% 53% 47% / 52% 48% 52% 48%',
          maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
        }}
      >
        <img
          src={asset(IMG_LOGO)}
          alt={PRACTICE_NAME}
          className="w-full h-full object-cover"
          style={{
            transform: 'scale(1.25)'
          }}
        />
      </div>
    </div>
  )
}

export function App() {
  return (
    <div className="min-h-svh relative pb-24 md:pb-0 bg-canvas">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-cta focus:px-3 focus:py-2 focus:text-sm focus:text-[#1a1f1a] focus:outline-none"
        href="#main"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Column - Logo */}
            <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
              <HeroLogo />
            </div>

            {/* Right Column - Text & Brand */}
            <div className="order-2 lg:order-2 space-y-6 text-center lg:text-left">
              {/* Top Labels */}
              <div className="space-y-2">
                <p className="text-xs font-light tracking-[0.25em] uppercase text-white/90">
                  PIVOT POINT BODYWORK
                </p>
                <p className="text-sm text-white/50">
                  {THERAPIST_NAME} | Santa Cruz, California
                </p>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white" style={{ lineHeight: '1.1' }}>
                Functional Bodywork
                <br />
                for Deep Recovery.
              </h1>

              {/* Sub-headline */}
              <p className="text-xl sm:text-2xl font-medium text-white/80">
                Neuromuscular &amp; Craniosacral Therapy.
              </p>

              {/* CTA Button */}
              <div className="pt-4 flex flex-col items-center lg:items-start">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-12 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
                  style={{
                    backgroundColor: '#A3B18A',
                    color: '#121212'
                  }}
                >
                  Book a Session
                  <span aria-hidden>→</span>
                </a>

                {/* Value Footer */}
                <p className="text-sm text-white/40 pt-3">
                  Choose a time that works for you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <main id="main" className="mx-auto max-w-3xl px-4 py-10 md:py-14">

        <section className="mb-14" aria-labelledby="about">
          <div className="md:flex md:gap-10 md:items-center">
            <div className="flex-1 min-w-0 order-1">
              <SectionHeading id="about">About Bronson</SectionHeading>
              <div className="mt-3 text-white/80 text-[15px] leading-relaxed">
                <p className="m-0 mb-6">
                  Connecting bodies to comfort and presence. As a neuromuscular therapist and craniosacral
                  practitioner, I view bodywork as a deep well of connection. My path to this work began with my
                  own journey through chronic pain in my twenties; bodywork was the key to finding a more
                  comfortable, present way of living.
                </p>
                <p className="m-0">
                  After graduating from the Neuromuscular Program at the National Holistic Institute, I continue
                  to be fascinated by the way memory lives within our tissues. I am dedicated to learning your
                  story to ensure your session is both specific and deeply useful to your recovery.
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-0 shrink-0 flex justify-center order-0 md:order-2">
              <Headshot />
            </div>
          </div>
        </section>

        <section className="mb-14" aria-labelledby="session">
          <SectionHeading id="session">What to expect</SectionHeading>
          <div className="mt-4 max-w-2xl space-y-5 text-[15px] leading-relaxed text-white/80">
            <p className="m-0">
              A healing approach informed by your story. Every body holds memory. I believe that understanding
              your unique history allows for more specific, effective healing. During our session, we maintain
              an open line of communication to ensure the work is precisely what you need.
            </p>

            <h3 className="mt-6 mb-3 text-base font-bold text-white m-0">The Journey to Recovery:</h3>

            <div>
              <h4 className="mb-2 text-[15px] font-semibold text-white m-0">Activation</h4>
              <p className="m-0">
                We begin with breathwork and Swedish massage. This serves as a portal to activate your
                parasympathetic nervous system, bringing your body into its most relaxed state.
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-[15px] font-semibold text-white m-0">Deep Integration</h4>
              <p className="m-0 mb-3">Once your body is prepared, we incorporate advanced modalities including:</p>
              <ul className="m-0 ml-5 space-y-1.5 list-disc">
                <li>Deep Tissue &amp; Trigger Point Therapy</li>
                <li>Myofascial Therapy (MFT) &amp; Cross Fiber</li>
                <li>Thai Massage</li>
                <li>Biodynamic Craniosacral Holds</li>
              </ul>
            </div>
          </div>
        </section>

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

        {/* Location & Contact - 3 Column Footer */}
        <section className="mb-14 -mx-4 md:mx-0" aria-labelledby="practicals">
          <div className="bg-[#121212] py-16 md:py-20 px-6 md:px-8 rounded-none md:rounded-xl">
            <div className="flex flex-wrap gap-8 max-w-6xl mx-auto text-center md:text-left">

              {/* Column 1 - Location */}
              <div className="flex-1 basis-[300px] border-r-0 md:border-r md:border-white/10 md:pr-8">
                <h3 className="text-xs font-medium uppercase tracking-[0.15em] mb-4" style={{ color: '#A3B18A' }}>
                  VISIT
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-3">
                  {ADDRESS}
                </p>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/60 hover:text-white transition underline"
                >
                  Open in Google Maps
                </a>
              </div>

              {/* Column 2 - Contact */}
              <div className="flex-1 basis-[300px] border-r-0 md:border-r md:border-white/10 md:pr-8">
                <h3 className="text-xs font-medium uppercase tracking-[0.15em] mb-4" style={{ color: '#A3B18A' }}>
                  CONNECT
                </h3>
                <div className="space-y-2">
                  <div>
                    <a
                      href={PHONE_HREF}
                      className="text-sm text-white/80 hover:text-white transition block"
                    >
                      {PHONE}
                    </a>
                  </div>
                  <div>
                    <a
                      href={EMAIL_HREF}
                      className="text-sm text-white/80 hover:text-white transition block"
                      style={{ wordBreak: 'break-all', overflowWrap: 'break-word' }}
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 3 - Hours */}
              <div className="flex-1 basis-[300px]">
                <h3 className="text-xs font-medium uppercase tracking-[0.15em] mb-4" style={{ color: '#A3B18A' }}>
                  AVAILABILITY
                </h3>
                <p className="text-sm text-white/80 mb-3">
                  Wednesday &amp; Friday:{' '}
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/90 hover:text-white underline transition"
                  >
                    By Appointment
                  </a>
                </p>
                <p className="text-xs text-white/30">
                  Mon, Tue, Thu, Sat, Sun: Closed
                </p>
              </div>

            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <p className="m-0">© {new Date().getFullYear()} {PRACTICE_NAME}. Santa Cruz, CA.</p>
        </footer>
      </main>
      <BookToolbar />
    </div>
  )
}
