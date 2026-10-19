import { FormEvent, useState } from 'react'
import { CheckCircle2, Download, Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import { AVAILABILITY, PROFILE, SOCIALS } from '../data'
import Reveal from './Reveal'

const MAX = 1000

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'sent'>('idle')

  const links = [
    { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, Icon: Mail },
    { label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, '')}`, Icon: Phone },
    { label: 'GitHub', value: SOCIALS.github.replace(/^https?:\/\/(www\.)?/, ''), href: SOCIALS.github, Icon: Github },
    { label: 'LinkedIn', value: SOCIALS.linkedin.replace(/^https?:\/\/(www\.)?/, ''), href: SOCIALS.linkedin, Icon: Linkedin },
  ].filter((l) => l.href)

  // Opens the visitor's email app with the message filled in (no backend needed).
  // To send from the page itself, swap this for a Formspree / EmailJS request.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email) || !message.trim()) {
      setStatus('error')
      return
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="contact" className="section bg-plum text-white">
      <div className="container-x">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Let's Work Together</h2>
          <p className="mt-4 text-lg text-white/70">Open to connecting and exploring impactful opportunities in Data Engineering & Analytics.</p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold">Get in Touch</h3>
                <ul className="mt-5 space-y-3">
                  {links.map(({ label, value, href, Icon }) => (
                    <li key={label}>
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl border border-white/10 p-4 transition hover:border-brand-light/60 hover:bg-white/5">
                        <Icon className="shrink-0 text-brand-light" size={20} />
                        <span className="min-w-0">
                          <span className="block text-xs text-white/60">{label}</span>
                          <span className="block truncate text-sm font-medium">{value}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <p className="flex items-center gap-2 font-semibold"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for immediate start</p>
                <p className="mt-4 text-sm text-white/60">Preferred positions</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {AVAILABILITY.map((a) => <span key={a} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">{a}</span>)}
                </div>
                <a href={PROFILE.resume} download className="btn-primary mt-6 w-full"><Download size={16} /> Download Resume</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 text-plum sm:p-8">
              <h3 className="font-display text-xl font-bold">Send a Message</h3>
              <p className="mt-1 text-sm text-muted">I reply within 24 hours</p>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Full name *</label>
                  <input id="name" className="field" placeholder="Your name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email address *</label>
                  <input id="email" type="email" className="field" placeholder="you@email.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Message *</label>
                  <textarea id="message" rows={5} maxLength={MAX} className="field resize-none" placeholder="Tell me about the role, tech stack, and timeline" value={message} onChange={(e) => setMessage(e.target.value)} required />
                  <p className="mt-1 text-right text-xs text-muted">{message.length}/{MAX}</p>
                </div>
              </div>

              <button type="submit" className="btn-primary mt-4 w-full"><Send size={16} /> Send Message</button>

              <p className="mt-4 text-sm" role="status" aria-live="polite">
                {status === 'error' && <span className="text-red-600">Enter your name, a valid email, and a message to continue.</span>}
                {status === 'sent' && <span className="inline-flex items-center gap-1.5 text-emerald-700"><CheckCircle2 size={16} /> Your email app opened with the message ready to send.</span>}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
