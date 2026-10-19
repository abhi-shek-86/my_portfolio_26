import { CalendarDays, MapPin } from 'lucide-react'
import type { TimelineItem } from '../data'
import Reveal from './Reveal'

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative ml-3 border-l-2 border-brand/25 sm:ml-4">
      {items.map((it, i) => (
        <li key={it.title + it.period} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
          <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-white bg-brand ring-2 ring-brand/30" aria-hidden />
          <Reveal delay={i * 0.08}>
            <article className="rounded-2xl border border-plum/10 bg-white p-6 transition hover:border-brand/40 hover:shadow-lg hover:shadow-plum/5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-display text-xl font-bold">{it.title}</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-soft px-3 py-1 text-xs font-medium"><CalendarDays size={13} /> {it.period}</span>
              </div>
              <p className="mt-1 font-semibold text-brand-dark">{it.org}</p>
              <p className="mt-0.5 inline-flex items-center gap-1 text-sm text-muted"><MapPin size={13} /> {it.place}</p>
              <p className="mt-3 leading-relaxed text-muted">{it.body}</p>
              {it.tags && <div className="mt-4 flex flex-wrap gap-2">{it.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>}
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
