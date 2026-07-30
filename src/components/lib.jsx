import { useEffect, useRef, useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaFacebook,
  FaEnvelope,
  FaExternalLinkAlt,
  FaTrophy,
  FaMedal,
  FaStar,
} from 'react-icons/fa'

// ── Icon registry (string name -> component) ──────────────────────────────
const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  code: FaCode,
  facebook: FaFacebook,
  mail: FaEnvelope,
  external: FaExternalLinkAlt,
  trophy: FaTrophy,
  medal: FaMedal,
  star: FaStar,
}

export function Icon({ name, className }) {
  const C = ICONS[name] ?? FaExternalLinkAlt
  return <C className={className} aria-hidden="true" />
}

// ── Scroll-reveal: adds `.is-visible` when element enters viewport ────────
export function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, visible]
}

// ── Section wrapper: id anchor, heading, reveal-on-scroll ─────────────────
export function Section({ id, index, title, subtitle, children }) {
  const [ref, visible] = useReveal()
  return (
    <section id={id} className="scroll-mt-20">
      <div className="section-pad">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          {title && (
            <header className="mb-10">
              <div className="flex items-center gap-3">
                {index != null && (
                  <span className="font-mono text-sm text-[var(--color-accent)]">
                    {String(index).padStart(2, '0')}.
                  </span>
                )}
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {title}
                </h2>
              </div>
              {subtitle && <p className="mt-2 max-w-2xl text-slate-400">{subtitle}</p>}
              <div className="mt-4 h-px w-full bg-gradient-to-r from-[var(--color-accent)]/50 via-[var(--color-border)] to-transparent" />
            </header>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
