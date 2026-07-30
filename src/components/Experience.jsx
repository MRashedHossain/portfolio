import { experience } from '../data/content'
import { Section } from './lib'

export default function Experience() {
  return (
    <Section id="experience" index={6} title="Experience">
      <div className="relative border-l border-[var(--color-border)] pl-6">
        {experience.map((e) => (
          <div key={e.company} className="relative pb-2">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]" />
            <div className="card p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">{e.role}</h3>
                  <p className="text-[var(--color-accent)]">
                    {e.company} <span className="text-slate-500">· {e.location}</span>
                  </p>
                </div>
                <span className="chip whitespace-nowrap font-mono">{e.period}</span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {e.points.map((pt, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]/70" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
