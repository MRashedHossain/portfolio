import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-5 py-8 text-center sm:px-8">
        <p className="font-mono text-xs text-slate-500">
          Designed & built by {profile.name}
        </p>
        <p className="mt-1 text-xs text-slate-600">
          React · Vite · Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
