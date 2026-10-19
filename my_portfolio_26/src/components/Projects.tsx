import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, Layers, Search } from 'lucide-react'
import { PROJECTS } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const PAGE = 6

export default function Projects() {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('All')
  const [shown, setShown] = useState(PAGE)

  const cats = useMemo(() => ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))], [])
  const filtered = PROJECTS.filter(
    (p) => (cat === 'All' || p.category === cat) && `${p.title} ${p.description} ${p.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase()),
  )
  const visible = filtered.slice(0, shown)

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading title="My Projects" lead="What I've built" />

        <Reveal className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="relative block md:w-72">
            <span className="sr-only">Search projects</span>
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input className="field !pl-10" placeholder="Search projects" value={query} onChange={(e) => { setQuery(e.target.value); setShown(PAGE) }} />
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {cats.map((c) => (
              <button key={c} aria-pressed={cat === c} onClick={() => { setCat(c); setShown(PAGE) }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${cat === c ? 'bg-brand text-white' : 'bg-white hover:text-brand'}`}>
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <p className="mb-6 text-sm text-muted" aria-live="polite">Showing {visible.length} of {filtered.length} projects</p>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div key={p.title} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-plum/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-plum/10">
                  <div className="relative flex h-44 items-center justify-center overflow-hidden bg-plum">
                    {p.image ? (
                      <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    ) : (
                      <Layers size={44} className="text-brand-light/70 transition duration-500 group-hover:scale-110" />
                    )}
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold">{p.category}</span>
                    {p.featured && <span className="absolute right-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">Featured</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                    <div className="mt-5 flex gap-3">
                      {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 !py-2"><ExternalLink size={14} /> Live</a>}
                      {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 !py-2"><Github size={14} /> Code</a>}
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && <p className="py-12 text-center text-muted">No projects match your search. Try a different keyword or category.</p>}

        {shown < filtered.length && (
          <div className="mt-10 text-center">
            <button className="btn-primary" onClick={() => setShown((s) => s + PAGE)}>Load More</button>
          </div>
        )}
      </div>
    </section>
  )
}
