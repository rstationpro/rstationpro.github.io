import { profile } from '../data/portfolio'
import { ExternalLink } from './ExternalLink'

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div>
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
