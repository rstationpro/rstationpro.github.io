import { profile } from '../data/portfolio'
import { ExternalLink } from './ExternalLink'

const focusAreas = ['multimodal_ai', 'video_llms', 'interpretability', 'healthcare_ml']

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="shell hero__inner">
        <div className="hero__content reveal">
          <p className="hero__eyebrow mono-label">
            <span>RESEARCHER_PROFILE</span>
            <span>001</span>
          </p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero__role">{profile.title}</p>
          <p className="hero__statement">{profile.statement}</p>

          <div className="hero__links" aria-label="Featured links">
            <a href="#research">Research <span aria-hidden="true">↓</span></a>
            <a href="#projects">Projects <span aria-hidden="true">↓</span></a>
            <ExternalLink href={profile.resume}>Resume</ExternalLink>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </div>
        </div>

        <aside className="hero-profile reveal" aria-label="Research profile summary">
          <div className="hero-profile__topline">
            <span>RZ / PROFILE</span>
            <span className="status-dot">ACTIVE</span>
          </div>

          <div className="portrait-shell">
            {profile.headshot ? (
              <img src={profile.headshot} alt={`Professional portrait of ${profile.name}`} />
            ) : (
              <div className="portrait-monogram" role="img" aria-label={`${profile.name} monogram`}>
                <span>{profile.initials}</span>
              </div>
            )}
          </div>

          <dl className="profile-index">
            <div>
              <dt>Current</dt>
              <dd>PhD · Health Data Science</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Reliable multimodal learning</dd>
            </div>
          </dl>

          <div className="focus-string" aria-label="Research focus areas">
            {focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
