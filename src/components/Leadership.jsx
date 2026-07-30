import { leadership } from '../data/content'
import { Section } from './lib'

export default function Leadership() {
  return (
    <Section
      id="leadership"
      index={7}
      title="Leadership & Extracurricular"
      subtitle="Roles held at the Computer Programming Club, Prime University."
    >
      <div className="relative border-l border-[var(--color-border)] pl-6">
        {leadership.map((l, i) => (
          <div key={i} className="relative pb-6 last:pb-0">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]" />
            <div className="card p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-white">{l.role}</h3>
                <span className="font-mono text-xs text-slate-500">{l.period}</span>
              </div>
              <p className="mt-1 text-sm text-[var(--color-accent)]">{l.org}</p>
              <p className="text-xs text-slate-500">{l.place}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{l.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
