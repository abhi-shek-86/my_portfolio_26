import { Facebook, Github, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import { SOCIALS } from '../data'

const ITEMS = [
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
  { key: 'whatsapp', label: 'WhatsApp', Icon: MessageCircle },
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
  { key: 'github', label: 'GitHub', Icon: Github },
] as const

export default function SocialLinks({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {ITEMS.filter((i) => SOCIALS[i.key]).map(({ key, label, Icon }) => (
        <li key={key}>
          <a
            href={SOCIALS[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white ${dark ? 'border-white/20 text-white/80' : 'border-plum/15 text-plum'}`}
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  )
}
