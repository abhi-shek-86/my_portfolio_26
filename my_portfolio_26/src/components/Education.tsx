import { EDUCATION } from '../data'
import SectionHeading from './SectionHeading'
import Timeline from './Timeline'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x max-w-4xl">
        <SectionHeading title="My Education" lead="Academic background" />
        <Timeline items={EDUCATION} />
      </div>
    </section>
  )
}
