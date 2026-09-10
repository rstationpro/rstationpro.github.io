import { ExternalLink } from './ExternalLink'
import { TechnicalDiagram } from './TechnicalDiagram'

export function Project({ project }) {
  const links = project.links.filter((link) => link.url)

  return (
    <article className="project reveal">
      <header className="project__header">
        <span className="project__index">{project.index}</span>
        <span className="project__status">{project.status}</span>
      </header>

      <div className="project__layout">
        <div className="project__primary">
          <h3>{project.title}</h3>
          <p className="project__description">{project.description}</p>

          <div className="project__field">
            <span>RESEARCH CONTEXT</span>
            <p>{project.context}</p>
          </div>
          <div className="project__field">
            <span>MY CONTRIBUTION</span>
            <p>{project.contribution}</p>
          </div>

          {links.length > 0 && (
            <div className="project__links" aria-label={`${project.title} links`}>
              {links.map((link) => (
                <ExternalLink href={link.url} key={link.label}>{link.label}</ExternalLink>
              ))}
            </div>
          )}
        </div>

        <div className="project__technical">
          <TechnicalDiagram type={project.visual} />

          <div className={`project__details${project.technologies.length === 0 ? ' project__details--methods-only' : ''}`}>
            <div>
              <h4>Methods</h4>
              <ul>
                {project.methods.map((method) => <li key={method}>{method}</li>)}
              </ul>
            </div>
            {project.technologies.length > 0 && (
              <div>
                <h4>Technologies</h4>
                <div className="tech-list">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
