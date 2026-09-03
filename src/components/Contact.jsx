import { profile } from '../data/portfolio'
import { ExternalLink } from './ExternalLink'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const contacts = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, external: false },
    { label: 'GitHub', value: 'github.com/rstationpro', href: profile.github, external: true },
    { label: 'LinkedIn', value: 'Rongzhe Zhao', href: profile.linkedin, external: true },
  ]

  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-heading">
      <div className="shell">
        <SectionHeading
          index="06"
          eyebrow="CONTACT"
          title="Research, technical work, and collaboration."
          description="Direct links are preferred—no form, no routing layer."
          headingId="contact-heading"
        />

        <div className="contact-grid reveal">
          {contacts.map((contact) => (
            <div className="contact-item" key={contact.label}>
              <span>{contact.label}</span>
              {contact.external ? (
                <ExternalLink href={contact.href}>{contact.value}</ExternalLink>
              ) : (
                <a href={contact.href}>{contact.value}</a>
              )}
            </div>
          ))}
          <div className="contact-item">
            <span>Google Scholar</span>
            {profile.googleScholar ? (
              <ExternalLink href={profile.googleScholar}>Profile</ExternalLink>
            ) : (
              <span className="placeholder-link">[ADD GOOGLE SCHOLAR URL]</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
