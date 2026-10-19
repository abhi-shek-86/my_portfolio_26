import Reveal from './Reveal'

export default function SectionHeading({ title, lead }: { title: string; lead?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      <div className="mt-4 h-1 w-14 rounded-full bg-brand" />
      {lead && <p className="mt-5 text-lg text-muted">{lead}</p>}
    </Reveal>
  )
}
