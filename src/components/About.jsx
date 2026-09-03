import { about } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="section section--light" id="about" aria-labelledby="about-heading">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="ABOUT"
          title="Quantitative foundations. Modern machine learning questions."
          description="A research profile grounded in statistics and built for interdisciplinary ML work."
          headingId="about-heading"
        />

        <div className="about-grid reveal">
          <div className="about-copy">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="identity-panel" aria-label="Short technical profile">
            <div className="identity-panel__bar">
              <span aria-hidden="true">$</span> whoami
            </div>
            <div className="identity-panel__body">
              <p><strong>Rongzhe Zhao</strong></p>
              <p>PhD Student @ GWU</p>
              <div className="identity-panel__rule" />
              <p className="identity-panel__key">interests:</p>
              <ul>
                <li>multimodal_ai</li>
                <li>video_llms</li>
                <li>interpretability</li>
                <li>trustworthy_ai</li>
                <li>healthcare_ml</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
