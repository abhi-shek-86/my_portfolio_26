import { useEffect, useState, type MouseEvent as ReactMouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { NAV, PROFILE } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark
    setIsDark(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  const toggleTheme = () => {
    setIsDark((current) => {
      const next = !current
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  const handleMobileNavigation = (event: ReactMouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    setOpen(false)
    window.history.pushState(null, '', `#${id}`)

    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 250)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === 'education' ? 'about' : e.target.id)
        }),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ;[...NAV.map((n) => n.id), 'education'].forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? 'border-b border-plum/10 bg-white/90 backdrop-blur' : ''}`}>
      <nav className="container-x flex h-16 items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <a href="#home" className="font-display text-xl font-extrabold tracking-tight">
          {PROFILE.logo}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? 'page' : undefined}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition hover:text-brand ${active === n.id ? 'text-brand' : 'text-plum/75 dark:text-white/70'}`}
              >
                {n.label}
                <span className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded bg-brand transition-transform duration-300 ${active === n.id ? 'scale-x-100' : 'scale-x-0'}`} />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 sm:gap-2">
          <a href="#contact" className="btn-primary hidden !py-2 lg:inline-flex">Let's Talk</a>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-plum transition hover:bg-soft hover:text-brand dark:text-white dark:hover:bg-white/10"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            className="rounded-lg p-2 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pb-5">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={(event) => handleMobileNavigation(event, n.id)}
                    className={`block rounded-xl px-4 py-3 font-medium ${active === n.id ? 'bg-soft text-brand' : ''}`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={(event) => handleMobileNavigation(event, 'contact')} className="btn-primary mt-2 w-full">Let's Talk</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
