import { useState } from 'react'
import { cp } from '../data/content'
import { Section, Icon } from './lib'

function RankTag({ tag }) {
  if (!tag) return null
  const styles =
    tag === 'Best'
      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
      : 'bg-[var(--color-accent-2)]/15 text-[var(--color-accent-2)] border-[var(--color-accent-2)]/30'
  return (
    <span className={`ml-2 rounded-md border px-1.5 py-0.5 text-[10px] font-semibold ${styles}`}>
      {tag}
    </span>
  )
}

export default function CompetitiveProgramming() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? cp.contests : cp.contests.slice(0, 8)

  return (
    <Section
      id="cp"
      index={3}
      title="Competitive Programming"
      subtitle={cp.solvedNote}
    >
      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {cp.stats.map((s) => (
          <div key={s.label} className="card p-5 text-center">
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="mt-1 text-xs text-slate-400">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Platform + ICPC */}
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {cp.platforms.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="card group flex items-center justify-between p-6"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.accent }} />
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              </div>
              <p className="mt-1 font-mono text-sm text-slate-400">@{p.handle}</p>
              <p className="mt-2 text-sm text-slate-300">
                <span className="font-semibold text-[var(--color-accent)]">{p.rank}</span> ·{' '}
                {p.rating}
              </p>
            </div>
            <Icon
              name="external"
              className="h-4 w-4 text-slate-500 transition-colors group-hover:text-[var(--color-accent)]"
            />
          </a>
        ))}

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white">{cp.icpc.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{cp.icpc.note}</p>
          <div className="mt-3 flex gap-2">
            {['2023', '2024', '2025'].map((y) => (
              <span key={y} className="chip font-mono">
                {y}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contest history table */}
      <div className="mt-8">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
          National Contest History
        </h3>
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] text-xs uppercase tracking-wider text-slate-500">
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Contest</th>
                  <th className="hidden px-4 py-3 font-medium sm:table-cell">Team</th>
                  <th className="px-4 py-3 font-medium">Rank</th>
                  <th className="px-4 py-3 text-center font-medium">Solved</th>
                  <th className="px-4 py-3 font-medium" />
                </tr>
              </thead>
              <tbody>
                {visible.map((c, i) => (
                  <tr
                    key={i}
                    className="border-b border-[var(--color-border)]/60 transition-colors last:border-0 hover:bg-[var(--color-surface-2)]/50"
                  >
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-slate-500">
                      {c.date}
                    </td>
                    <td className="px-4 py-3 text-slate-200">
                      {c.name}
                      <RankTag tag={c.tag} />
                    </td>
                    <td className="hidden px-4 py-3 font-mono text-xs text-slate-400 sm:table-cell">
                      {c.team}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-300">{c.rank}</td>
                    <td className="px-4 py-3 text-center font-semibold text-[var(--color-accent)]">
                      {c.solved}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {c.href && (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex text-slate-500 transition-colors hover:text-[var(--color-accent)]"
                          aria-label="View standings"
                        >
                          <Icon name="external" className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {cp.contests.length > 8 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
            >
              {showAll ? 'Show less' : `Show all ${cp.contests.length} contests`}
            </button>
          </div>
        )}
      </div>
    </Section>
  )
}
