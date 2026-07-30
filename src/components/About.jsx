import { about } from '../data/content'
import { Section } from './lib'

export default function About() {
  return (
    <Section id="about" index={1} title="About Me">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4 text-slate-300 leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 self-start">
          {about.highlights.map((h) => (
            <div key={h.label} className="card p-5 text-center">
              <div className="text-2xl font-bold text-[var(--color-accent)]">{h.value}</div>
              <div className="mt-1 text-xs text-slate-400">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
