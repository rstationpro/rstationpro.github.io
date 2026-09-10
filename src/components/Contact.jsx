import { profile } from '../data/portfolio'
import { ExternalLink } from './ExternalLink'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const contacts = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, external: false },
    { label: 'GitHub', value: 'github.com/rstationpro', href: profile.github, external: true },
    { label: 'LinkedIn', value: profile.name, href: profile.linkedin, external: true },
  ]

  if (profile.googleScholar) {
    contacts.push({ label: 'Google Scholar', value: 'Profile', href: profile.googleScholar, external: true })
  }

  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-heading">
      <div className="shell">
        <SectionHeading
          index="06"
          eyebrow="CONTACT"
          title="Research, technical work, and collaboration."
          description="Get in touch to discuss research, technical opportunities, or collaboration."
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
        </div>
      </div>
    </section>
  )
}
