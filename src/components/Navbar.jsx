import { useEffect, useState } from 'react'
import { sections, profile } from '../data/content'

export default function Navbar() {
  const nav = sections.filter((s) => s.enabled && s.id !== 'home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = sections.filter((s) => s.enabled).map((s) => s.id)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="group font-mono text-lg font-bold text-white">
          <span className="text-[var(--color-accent)]">{'<'}</span>
          RH
          <span className="text-[var(--color-accent)]">{' />'}</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {nav.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                active === s.id
                  ? 'text-[var(--color-accent)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {s.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="ml-2 rounded-lg border border-[var(--color-accent)]/50 px-3 py-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/10"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-slate-300 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col px-5 py-3">
            {nav.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm ${
                  active === s.id ? 'text-[var(--color-accent)]' : 'text-slate-300'
                }`}
              >
                {s.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg border border-[var(--color-accent)]/50 px-3 py-2.5 text-center text-sm font-medium text-[var(--color-accent)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
