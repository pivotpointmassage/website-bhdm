import { useEffect, useRef, useState } from 'react'
import { CalendlyButton } from './components/CalendlyButton'
import { StickyBookBar } from './components/StickyBookBar'
import {
  CONDITIONS_LEFT,
  CONDITIONS_RIGHT,
  EMAIL,
  EMAIL_HREF,
  FEATURED_TESTIMONIALS,
  IMG_HEADSHOT,
  IMG_LOGO,
  INTAKE_PDF,
  MAPS,
  MODALITIES,
  MORE_TESTIMONIALS,
  PHONE,
  PHONE_HREF,
  PRACTICE_NAME,
  THERAPIST_NAME,
  type Testimonial,
} from './content'

/** Works with both the local dev server ("/") and GitHub Pages (relative base). */
const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`

function Headshot() {
  const [ok, setOk] = useState(true)
  return (
    <div className="about-photo">
      {ok ? (
        <img
          src={asset(IMG_HEADSHOT)}
          alt={THERAPIST_NAME}
          width={900}
          height={900}
          loading="lazy"
          decoding="async"
          onError={() => setOk(false)}
        />
      ) : (
        <span role="img" aria-label={THERAPIST_NAME}>BD</span>
      )}
    </div>
  )
}

function ReviewCard({ t, compact = false }: { t: Testimonial; compact?: boolean }) {
  return (
    <figure className={`testimonial-card${compact ? ' compact' : ''}`}>
      <blockquote>
        <p>&ldquo;{t.text}&rdquo;</p>
      </blockquote>
      <figcaption>— {t.name}</figcaption>
    </figure>
  )
}

export function App() {
  const heroCtaRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const [heroCtaInView, setHeroCtaInView] = useState(true)
  const [contactInView, setContactInView] = useState(false)

  // The phone-only sticky bar shows after the hero button scrolls away, and hides near the contact section's own button.
  useEffect(() => {
    const heroEl = heroCtaRef.current
    const contactEl = contactRef.current
    if (!heroEl || !contactEl || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === heroEl) setHeroCtaInView(e.isIntersecting)
        if (e.target === contactEl) setContactInView(e.isIntersecting)
      }
    })
    io.observe(heroEl)
    io.observe(contactEl)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <div className="mark">
            <img
              src={asset(IMG_LOGO)}
              alt="Pivot Point Bodywork mark — two hands reaching toward each other inside a circle"
              width={900}
              height={900}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <h1>{PRACTICE_NAME}</h1>
          <p className="practitioner-line">{THERAPIST_NAME}, CMT, NMT · Santa Cruz, California</p>
          <p className="sub">Neuromuscular &amp; Craniosacral Therapy</p>
          <div ref={heroCtaRef}>
            <CalendlyButton />
          </div>
          <p className="hero-note">Wednesday &amp; Friday · by appointment</p>
        </div>
      </header>

      <main id="main">
        {/* ABOUT */}
        <section className="light" aria-labelledby="about">
          <div className="wrap">
            <div className="about-grid">
              <h2 className="about-title" id="about">
                About Bronson
              </h2>
              <Headshot />
              <div className="about-text">
                <p>
                  As a neuromuscular therapist and craniosacral practitioner, I view bodywork as a deep well of
                  connection. My path to this work began with my own journey through chronic pain in my twenties —
                  bodywork was the key to finding a more comfortable, present way of living.
                </p>
                <p>
                  After graduating from the Neuromuscular Program at the National Holistic Institute, I continue to be
                  fascinated by the way memory lives within our tissues. I&apos;m dedicated to learning your story to
                  make sure your session is both personalized and useful to your recovery.
                </p>
              </div>
            </div>
            <div className="credential-box">
              <strong>Credentials</strong>
              California massage therapy certification, CAMTC #90329
              <br />
              Neuromuscular Program, National Holistic Institute, San Jose, CA, <em>Graduated with High Honors</em>
            </div>
          </div>
        </section>

        {/* CONDITIONS */}
        <section className="light alt" aria-labelledby="conditions">
          <div className="wrap">
            <p className="eyebrow">Who this helps</p>
            <h2 className="section-title" id="conditions">
              Conditions I work with
            </h2>
            <div className="conditions-cols">
              <ul className="conditions-list">
                {CONDITIONS_LEFT.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <ul className="conditions-list">
                {CONDITIONS_RIGHT.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="light" aria-labelledby="expect">
          <div className="wrap">
            <h2 className="section-title" id="expect">
              What to expect during your visit
            </h2>
            <ol className="first-visit-list">
              <li>
                <strong>An intake conversation.</strong>
                First, we&apos;ll talk through your health history and what you&apos;re hoping to get out of the
                session. Then, you&apos;ll complete consent and a short intake form.
                <div className="intake-cta">
                  <a href={asset(INTAKE_PDF)} download className="btn btn-on-dark">
                    Intake Form (PDF)
                  </a>
                </div>
              </li>
              <li>
                <strong>The session.</strong>
                <div className="visit-sub">
                  <p>
                    <em>Activation:</em> We begin with breathwork and Swedish massage — a portal to activate your
                    parasympathetic nervous system and bring your body into its most relaxed state.
                  </p>
                  <p>
                    <em>Deep integration:</em> Once you are relaxed, we incorporate advanced modalities including:
                  </p>
                  <ul className="modalities">
                    {MODALITIES.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                  <p>
                    <em>We check in as we go.</em> Bodywork works best with an open line of communication, you can ask
                    to adjust pressure or skip an area at any point.
                  </p>
                </div>
              </li>
              <li>
                <strong>A debrief conversation.</strong>
                We discuss how you&apos;re feeling, and whether a follow-up session would support your recovery.
              </li>
            </ol>
          </div>
        </section>

        {/* OUR EXPERIENCES */}
        <section className="light alt" aria-labelledby="experiences">
          <div className="wrap">
            <h2 className="section-title" id="experiences">
              Our Experiences
            </h2>

            <div className="experience">
              <h3>
                Massage Therapy <span className="scale-note">sliding scale</span>
              </h3>
              <table className="pricing-table">
                <tbody>
                  <tr>
                    <td>60 minutes</td>
                    <td>$120–$180</td>
                  </tr>
                  <tr>
                    <td>90 minutes</td>
                    <td>$150–$200</td>
                  </tr>
                  <tr>
                    <td>110 minutes</td>
                    <td>$190–$250</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="experience">
              <h3>Biodynamic Craniosacral Therapy Practicum</h3>
              <table className="pricing-table">
                <tbody>
                  <tr>
                    <td>60 minutes or 90 minutes</td>
                    <td>Free</td>
                  </tr>
                </tbody>
              </table>
              <p className="pricing-caption">Advanced Certification Practice Hours</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="light" aria-labelledby="reviews">
          <div className="wrap">
            <p className="eyebrow">From clients</p>
            <h2 className="section-title" id="reviews">
              What people say
            </h2>
            {FEATURED_TESTIMONIALS.map((t, i) => (
              <ReviewCard key={`f-${i}`} t={t} />
            ))}
            <details className="more-reviews">
              <summary>See more</summary>
              {MORE_TESTIMONIALS.map((t, i) => (
                <ReviewCard key={`m-${i}`} t={t} compact />
              ))}
            </details>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="book" ref={contactRef} aria-labelledby="contact-heading">
          <div className="wrap">
            <h2 id="contact-heading" className="sr-only">
              Location and contact
            </h2>
            <div className="contact-grid">
              <div className="contact-col">
                <h3>Visit</h3>
                <p>
                  550 Water St, Building I / Suite 4
                  <br />
                  Santa Cruz, CA 95060
                </p>
                <p>
                  <a href={MAPS} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </a>
                </p>
              </div>
              <div className="contact-col">
                <h3>Connect</h3>
                <p>
                  <a href={PHONE_HREF}>{PHONE}</a>
                </p>
                <p>
                  <a href={EMAIL_HREF}>{EMAIL}</a>
                </p>
              </div>
              <div className="contact-col">
                <h3>Availability</h3>
                <p>Wednesday &amp; Friday: by appointment</p>
                <p>Mon, Tue, Thu, Sat, Sun: closed</p>
              </div>
            </div>
            <div className="final-cta">
              <CalendlyButton />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} {PRACTICE_NAME}. Santa Cruz, CA.
      </footer>

      <StickyBookBar visible={!heroCtaInView && !contactInView} />
    </>
  )
}
