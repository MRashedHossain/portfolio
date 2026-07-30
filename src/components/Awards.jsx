import { awards } from '../data/content'
import { Section, Icon } from './lib'

export default function Awards() {
  return (
    <Section id="awards" index={8} title="Awards & Achievements">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((a) => (
          <div key={a.title} className="card flex flex-col p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <Icon name={a.icon} className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold leading-snug text-white">{a.title}</h3>
            <p className="mt-1 text-sm text-[var(--color-accent)]">{a.org}</p>
            <p className="font-mono text-xs text-slate-500">{a.period}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{a.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
