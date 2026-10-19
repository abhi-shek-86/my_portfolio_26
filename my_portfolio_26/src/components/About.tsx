import { FileText, GraduationCap } from 'lucide-react'
import { ABOUT, PROFILE } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section bg-soft">
      <div className="container-x">
        <SectionHeading title="About Me" lead="Get to know me" />

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Portrait Photo */}
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-plum shadow-2xl shadow-brand/20 border border-white/20 group">
              <img
                src={PROFILE.avatar}
                alt={`Portrait of ${PROFILE.name}`}
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur px-3 py-2 text-xs font-semibold shadow-lg text-plum">
                <GraduationCap size={16} className="text-brand" /> B.Tech CSE (AI)
              </div>
            </div>
          </Reveal>

          {/* Bio text */}
          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl font-bold sm:text-3xl text-plum">
              {PROFILE.role}
            </h3>

            <div className="mt-5 space-y-4 text-base sm:text-lg leading-relaxed text-muted">
              {ABOUT.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FileText size={16} /> View Full Resume
              </a>
              <a href="#contact" className="btn-ghost">
                Get in Touch
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

