import { projects } from '../data/portfolio'
import { Project } from './Project'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section className="section section--dark" id="projects" aria-labelledby="projects-heading">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="SELECTED WORK"
          title="Research questions, implemented systems, reproducible analysis."
          description="Selected work across multimodal AI, physiological data, cloud computing, and statistical modeling."
          inverted
          headingId="projects-heading"
        />
        <div className="project-list">
          {projects.map((project) => <Project project={project} key={project.index} />)}
        </div>
      </div>
    </section>
  )
}
