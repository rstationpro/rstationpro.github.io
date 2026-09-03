import { skills } from '../data/portfolio'

export function Skills() {
  return (
    <aside className="skills reveal" aria-labelledby="skills-heading">
      <header className="skills__heading">
        <span className="mono-label">TECHNICAL_INDEX</span>
        <h3 id="skills-heading">Selected toolkit</h3>
        <p>Compact by design; project context matters more than a logo wall.</p>
      </header>
      <div className="skills__list">
        {skills.map((group) => (
          <div className="skills__group" key={group.category}>
            <h4>{group.category}</h4>
            <p>{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </aside>
  )
}
