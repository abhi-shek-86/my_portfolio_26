import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SKILLS_DATA, SKILL_CATEGORIES } from '../data'
import { getSkillIcon } from './SkillIcons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading title="My Skills" lead="Technologies & Tools" />

        {/* Category Filter Tabs */}
        <Reveal>
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
          >
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition duration-200 ${
                    isActive
                      ? 'bg-brand text-white shadow-md shadow-brand/30'
                      : 'bg-white text-plum/80 border border-plum/10 hover:border-brand/40 hover:text-brand'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Compact Skills Grid: 7 per row on desktop & laptop */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 gap-2.5 sm:gap-3"
          >
            {filteredSkills.map((skill) => {
              const IconComponent = getSkillIcon(skill.name)
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col items-center justify-between min-h-[115px] sm:min-h-[124px] rounded-2xl border border-plum/10 bg-white p-2.5 sm:p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
                >
                  {/* Compact Icon Container */}
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-soft border border-plum/10 p-2 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand/5 group-hover:border-brand/30">
                    <IconComponent className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  {/* Skill Name */}
                  <h3 className="mt-1.5 font-display text-[11px] sm:text-xs font-bold text-plum transition-colors group-hover:text-brand leading-tight text-center break-words">
                    {skill.name}
                  </h3>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
