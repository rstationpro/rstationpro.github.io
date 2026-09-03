import { education } from '../data/portfolio'
import { EducationItem } from './EducationItem'
import { SectionHeading } from './SectionHeading'
import { Skills } from './Skills'

export function Education() {
  return (
    <section className="section section--neutral" id="education" aria-labelledby="education-heading">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="EDUCATION + SKILLS"
          title="Statistical training with an engineering-facing toolkit."
          description="Formal study in health data science, biostatistics, and statistics supports work across modern ML systems."
          headingId="education-heading"
        />
        <div className="education-list">
          {education.map((item, index) => (
            <EducationItem item={item} index={index} key={`${item.institution}-${item.degree}`} />
          ))}
        </div>
        <Skills />
      </div>
    </section>
  )
}
