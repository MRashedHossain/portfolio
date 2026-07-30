import { skills } from '../data/content'
import { Section } from './lib'

export default function Skills() {
  return (
    <Section id="skills" index={4} title="Technical Skills">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="card p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              {s.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
