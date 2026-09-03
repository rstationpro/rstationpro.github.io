import { useEffect, useState } from 'react'
import { navigation, profile } from '../data/portfolio'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="nav__brand" href="#top" aria-label={`${profile.name}, home`}>
          <span className="nav__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span>{profile.name}</span>
        </a>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <div className={`nav__links${isOpen ? ' nav__links--open' : ''}`} id="primary-menu">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
