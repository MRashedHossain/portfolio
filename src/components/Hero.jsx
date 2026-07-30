import { profile, socials } from '../data/content'
import { Icon } from './lib'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24">
      <div className="section-pad grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        {/* Left: intro */}
        <div>
          <p className="mb-4 font-mono text-sm text-[var(--color-accent)]">Hi, my name is</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-xl font-semibold text-slate-300 sm:text-2xl">
            {profile.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="text-slate-400 transition-colors hover:text-[var(--color-accent)]"
              >
                <Icon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div className="mx-auto md:mx-0">
          <div className="relative mx-auto w-60 sm:w-72">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[var(--color-accent)]/30 to-[var(--color-accent-2)]/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
              <img
                src={profile.photo}
                alt={profile.name}
                className="aspect-[3/4] w-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute inset-x-0 bottom-8 mx-auto hidden w-fit animate-bounce text-slate-500 sm:block"
      >
        <span className="text-xs font-mono">scroll ↓</span>
      </a>
    </section>
  )
}
