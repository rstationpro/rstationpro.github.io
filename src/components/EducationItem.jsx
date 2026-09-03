export function EducationItem({ item, index }) {
  return (
    <article className="education-item reveal">
      <span className="education-item__index">EDU/{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>{item.institution}</h3>
        {item.school && <p className="education-item__school">{item.school}</p>}
        <p>{item.degree}</p>
      </div>
      <div className="education-item__meta">
        <time>{item.period}</time>
        <span>{item.location}</span>
      </div>
    </article>
  )
}
