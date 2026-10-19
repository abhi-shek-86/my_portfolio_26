import { useState, useRef, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { User } from 'lucide-react'
import { PROFILE } from '../data'

export default function IdCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  // Motion values for realistic 3D tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for natural tilt feel
  const springConfig = { damping: 22, stiffness: 240 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig)
  const glareX = useTransform(x, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(y, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <div className="relative flex flex-col items-center justify-center py-2">
      {/* Metallic clip / holder looping from top into the slot */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Metal hook loop */}
        <div className="h-7 w-7 rounded-t-full border-[2.5px] border-b-0 border-gray-400 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-500 shadow-sm opacity-90" />
      </div>

      {/* 3D Perspective Card Container */}
      <div style={{ perspective: 1200 }} className="relative z-20 -mt-3.5">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: 'preserve-3d',
          }}
          animate={
            isHovered
              ? { y: -3, scale: 1.015 }
              : {
                  y: [0, -5, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }
          }
          className="relative w-[300px] sm:w-[320px] rounded-[28px] bg-[#0c091d] p-5 pt-3 text-white shadow-2xl shadow-purple-950/70 border border-purple-900/30 select-none cursor-pointer overflow-hidden backdrop-blur-xl"
        >
          {/* Subtle top neon edge glow line */}
          <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          {/* Dynamic holographic reflection overlay */}
          <motion.div
            className="pointer-events-none absolute -inset-full opacity-0 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.22 : 0.05,
              background: `radial-gradient(circle 300px at ${glareX} ${glareY}, rgba(255, 255, 255, 0.7), rgba(56, 189, 248, 0.3) 30%, transparent 70%)`,
            }}
          />

          {/* Lanyard punch-hole cutout slot with metallic clip pass-through */}
          <div className="relative mx-auto mb-3 h-3 w-12 rounded-full bg-[#060410] shadow-inner border border-white/20 flex items-center justify-center">
            {/* The metal ring coming through */}
            <div className="h-4 w-5 rounded-b-full border-[2.5px] border-t-0 border-gray-300 bg-transparent shadow-sm -mt-1.5" />
          </div>

          {/* Avatar / Photo with Glowing Neon Ring */}
          <div className="relative mx-auto flex justify-center">
            <div className="relative inline-block">
              {/* Multi-color neon gradient border ring */}
              <div className="rounded-full p-[2.5px] bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-pink-500 shadow-lg shadow-fuchsia-500/25">
                <div className="relative h-28 w-28 overflow-hidden rounded-full bg-[#16112c]">
                  {!imgError && PROFILE.avatar ? (
                    <img
                      src={PROFILE.avatar}
                      alt={PROFILE.name}
                      onError={() => setImgError(true)}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#1b1435] to-[#0c091d] text-white/80">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/20 text-brand-light font-display text-2xl font-extrabold shadow-inner">
                        {PROFILE.firstName.charAt(0)}{PROFILE.lastName.charAt(0)}
                      </div>
                      <span className="mt-1 text-[9px] font-mono text-white/50 flex items-center gap-1">
                        <User size={9} /> public/profile.jpg
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Glowing Emerald Active Status Dot */}
              <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 border-[3px] border-[#0c091d] shadow-md shadow-emerald-500/60">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-100" />
              </div>
            </div>
          </div>

          {/* Names & Role */}
          <div className="mt-3.5 text-center">
            <h3 className="font-display text-2xl sm:text-[26px] font-black text-white tracking-tight leading-tight">
              {PROFILE.firstName}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-white/70">
              {PROFILE.lastName}
            </p>
            <p className="mt-1 text-sm font-bold text-cyan-400 tracking-wide">
              {PROFILE.role}
            </p>
          </div>

          {/* Divider */}
          <div className="my-3 border-t border-purple-500/20" />

          {/* Department & Since Row */}
          <div className="grid grid-cols-2 gap-3 px-1 text-left">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                DEPARTMENT
              </p>
              <p className="mt-0.5 font-display text-sm font-bold text-white">
                {PROFILE.department || 'Engineering'}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                SINCE
              </p>
              <p className="mt-0.5 font-display text-sm font-bold text-white">
                {PROFILE.since || 'Jul 2025'}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-3 border-t border-purple-500/20" />

          {/* Tech Stack */}
          <div className="px-1">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
              TECH STACK
            </p>
            <div className="flex flex-wrap gap-1.5">
              {(PROFILE.techStack || ['Microsoft Fabric', 'SQL', 'Python', 'ELT / ETL Pipelines', 'PySpark', 'Azure DevOps']).map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-purple-500/30 bg-[#1b1435] px-2.5 py-1 text-[11px] font-medium text-purple-200 shadow-sm transition hover:border-purple-400/50 hover:bg-[#251b47]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
