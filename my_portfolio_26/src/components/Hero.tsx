import { motion } from 'framer-motion'
import { ArrowDown, Award, FileText, MessageSquare } from 'lucide-react'
import { PROFILE } from '../data'
import SocialLinks from './SocialLinks'
import IdCard from './IdCard'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

export default function Hero() {
  return (
    <section id="home" className="section relative flex min-h-screen items-center !pb-16 !pt-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex flex-wrap items-center gap-2.5">
            <p className="inline-flex items-center gap-2 rounded-full bg-soft px-4 py-1.5 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Currently working at {PROFILE.company}
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-400 backdrop-blur-sm shadow-sm">
              <Award size={14} className="text-sky-400" />
              Microsoft Fabric Certified DP-700
            </span>
          </motion.div>

          <motion.h1 variants={item} className="mt-6 break-words font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-brand">{PROFILE.short}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
            {PROFILE.summary}
          </motion.p>

          <motion.div variants={item} className="mt-8"><SocialLinks /></motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="btn-primary"><FileText size={16} /> View Resume</a>
            <a href="#contact" className="btn-ghost"><MessageSquare size={16} /> Let's Talk</a>
          </motion.div>
        </motion.div>

        {/* 3D Interactive ID Card Effect */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="mx-auto flex w-full justify-center"
        >
          <IdCard />
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition hover:text-brand md:block">
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  )
}
