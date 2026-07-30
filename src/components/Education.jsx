import { education } from '../data/content'
import { Section } from './lib'

export default function Education() {
  return (
    <Section id="education" index={2} title="Academic Background">
      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((e) => (
          <div key={e.school} className="card p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">{e.school}</h3>
              <span className="chip whitespace-nowrap">{e.location}</span>
            </div>
            <p className="mt-2 text-slate-300">{e.degree}</p>
            <p className="mt-1 text-sm text-[var(--color-accent)]">{e.detail}</p>
            <p className="mt-3 font-mono text-xs text-slate-500">{e.period}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
