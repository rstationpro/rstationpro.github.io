import { useEffect } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Research } from './components/Research'
import { Resume } from './components/Resume'

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px' },
    )

    items.forEach((item) => observer.observe(item))

    const scrollToInitialSection = window.setTimeout(() => {
      if (!window.location.hash) return
      const target = document.querySelector(window.location.hash)
      target?.scrollIntoView({ behavior: 'instant', block: 'start' })
    }, 0)

    return () => {
      observer.disconnect()
      window.clearTimeout(scrollToInitialSection)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Research />
        <Projects />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
