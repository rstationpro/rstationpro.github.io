export function ExperienceItem({ item, index }) {
  return (
    <article className="experience-item reveal">
      <div className="experience-item__rail" aria-hidden="true">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <i />
      </div>
      <div className="experience-item__meta">
        <span>{item.type}</span>
        <time>{item.period}</time>
      </div>
      <div className="experience-item__content">
        <h3>{item.role}</h3>
        <p className="experience-item__org">
          {item.organization} <span>· {item.location}</span>
        </p>
        <ul>
          {item.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
        </ul>
      </div>
    </article>
  )
}
