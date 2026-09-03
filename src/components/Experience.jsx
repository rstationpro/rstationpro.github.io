import { experience } from '../data/portfolio'
import { ExperienceItem } from './ExperienceItem'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section className="section section--light" id="experience" aria-labelledby="experience-heading">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="EXPERIENCE"
          title="Research and applied analytical work."
          description="A concise view of the roles most relevant to research, machine learning, and data-intensive work."
          headingId="experience-heading"
        />
        <div className="experience-list">
          {experience.map((item, index) => (
            <ExperienceItem item={item} index={index} key={`${item.organization}-${item.role}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
