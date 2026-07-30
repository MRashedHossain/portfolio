import { profile, socials } from '../data/content'
import { Section, Icon } from './lib'

export default function Contact() {
  return (
    <Section id="contact" index={9} title="Get In Touch">
      <div className="card mx-auto max-w-2xl p-8 text-center">
        <p className="mx-auto max-w-md text-slate-300">
          I'm open to internships, collaborations, and interesting problems. Feel free to reach out —
          I'll get back to you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
        >
          <Icon name="mail" className="h-4 w-4" />
          {profile.email}
        </a>

        <div className="mt-6 flex flex-col items-center gap-1 text-sm text-slate-400">
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
        </div>

        <div className="mt-8 flex justify-center gap-5 border-t border-[var(--color-border)]/60 pt-6">
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
    </Section>
  )
}
