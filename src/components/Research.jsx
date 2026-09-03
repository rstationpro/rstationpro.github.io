import { publications, researchAreas } from '../data/portfolio'
import { ExternalLink } from './ExternalLink'
import { ResearchArea } from './ResearchArea'
import { SectionHeading } from './SectionHeading'

export function Research() {
  return (
    <section className="section section--research" id="research" aria-labelledby="research-heading">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="RESEARCH"
          title="Questions before claims. Evidence before explanation."
          description="My interests connect multimodal model behavior, reliable inference, and applied health data science."
          headingId="research-heading"
        />

        <div className="research-list">
          {researchAreas.map((area) => (
            <ResearchArea key={area.index} area={area} />
          ))}
        </div>

        <div className="publications reveal" aria-labelledby="publications-heading">
          <div className="publications__heading">
            <span className="mono-label">SELECTED_OUTPUTS</span>
            <h3 id="publications-heading">Publications</h3>
          </div>
          <div className="publications__list">
            {publications.map((publication) => (
              <article className="publication" key={publication.title}>
                <span className="publication__year">{publication.year}</span>
                <div>
                  <h4>{publication.title}</h4>
                  <p>{publication.authors}</p>
                  <p className="publication__venue">{publication.venue}</p>
                </div>
                <ExternalLink href={publication.url} className="publication__link">
                  DOI
                </ExternalLink>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
