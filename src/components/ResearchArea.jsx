export function ResearchArea({ area }) {
  return (
    <article className="research-area reveal">
      <span className="research-area__index">R/{area.index}</span>
      <div className="research-area__copy">
        <h3>{area.title}</h3>
        <p>{area.description}</p>
      </div>
      <ul className="research-area__focus" aria-label={`${area.title} focus topics`}>
        {area.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}
