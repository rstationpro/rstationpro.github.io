import { profile } from '../data/portfolio'
import { ExternalLink } from './ExternalLink'

export function Resume() {
  return (
    <section className="resume-section" id="resume" aria-labelledby="resume-heading">
      <div className="shell resume-section__inner reveal">
        <div>
          <span className="mono-label">DOCUMENT / PDF</span>
          <h2 id="resume-heading">Résumé</h2>
          <p>A concise record of research, technical projects, education, and applied experience.</p>
        </div>
        <div className="resume-section__actions">
          <ExternalLink href={profile.resume}>View résumé</ExternalLink>
          <a href={profile.resume} download>
            Download PDF <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
