import { NAV, PROFILE } from '../data'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="bg-plum px-5 text-white sm:px-8">
      <div className="container-x border-t border-white/10 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-extrabold">{PROFILE.logo}</p>
            <p className="mt-3 max-w-xs text-sm text-white/65">{PROFILE.role} currently at {PROFILE.company}, building scalable data pipelines, analytics systems, and cloud data solutions.</p>
          </div>
          <nav aria-label="Footer">
            <p className="mb-3 text-sm font-semibold">Navigation</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/65">
              {NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className="transition hover:text-brand-light">{n.label}</a></li>)}
            </ul>
          </nav>
          <div>
            <p className="mb-3 text-sm font-semibold">Connect</p>
            <SocialLinks dark />
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p>Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
