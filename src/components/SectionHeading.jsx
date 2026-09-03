export function SectionHeading({ index, eyebrow, title, description, inverted = false, headingId }) {
  return (
    <header className={`section-heading${inverted ? ' section-heading--inverted' : ''}`}>
      <div className="section-heading__meta">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading__copy">
        <h2 id={headingId}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </header>
  )
}
