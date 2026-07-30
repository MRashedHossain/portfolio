import { projects } from '../data/content'
import { Section, Icon } from './lib'

export default function Projects() {
  return (
    <Section id="projects" index={5} title="Projects">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.name} className="card flex flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <div className="flex items-center gap-2">
                {p.badge && (
                  <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                    {p.badge}
                  </span>
                )}
                <span className="font-mono text-xs text-slate-500">{p.period}</span>
              </div>
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="font-mono text-xs text-slate-400">
                  #{t.replace(/\s+/g, '')}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-3 border-t border-[var(--color-border)]/60 pt-4">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-[var(--color-accent)]"
                >
                  <Icon name={l.icon} className="h-4 w-4" />
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
