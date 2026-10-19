import { Award, CalendarDays, Download, ExternalLink } from 'lucide-react'
import { CERTIFICATIONS } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="section bg-soft">
      <div className="container-x max-w-4xl">
        <SectionHeading title="My Certifications" lead="Achievements" />
        <div className="space-y-6">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="flex flex-col gap-6 rounded-3xl border border-plum/10 bg-white p-6 transition hover:border-brand/40 hover:shadow-xl hover:shadow-plum/5 sm:flex-row sm:items-center sm:p-8">
                {c.badge && c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${c.title} certificate`}
                    className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                  >
                    <img src={c.badge} alt={`${c.title} badge`} className="h-full w-full object-contain" />
                  </a>
                ) : (
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-plum text-brand-light">
                    <Award size={44} />
                  </div>
                )}
                <div>
                  <h3 className="font-display text-xl font-bold sm:text-2xl">{c.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="chip">{c.issuer}</span>
                    <span className="chip gap-1.5"><CalendarDays size={12} /> {c.date}</span>
                  </div>
                  <p className="mt-3 leading-relaxed text-muted">{c.description}</p>
                  {c.url && (
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline">
                        View certificate <ExternalLink size={14} />
                      </a>
                      <a href={c.url} download className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline">
                        Download certificate <Download size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
