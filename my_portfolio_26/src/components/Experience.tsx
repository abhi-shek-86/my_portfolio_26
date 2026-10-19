import { EXPERIENCE } from '../data'
import SectionHeading from './SectionHeading'
import Timeline from './Timeline'

export default function Experience() {
  return (
    <section id="experience" className="section bg-soft">
      <div className="container-x max-w-4xl">
        <SectionHeading title="My Experience" lead="Work history" />
        <Timeline items={EXPERIENCE} />
      </div>
    </section>
  )
}
