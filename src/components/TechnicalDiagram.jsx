function VideoPipeline() {
  const nodes = ['VIDEO', 'VISION\nENCODER', 'TEMPORAL\nREPRESENTATION', 'LLM', 'INTERPRETATION']
  return (
    <div className="pipeline pipeline--video" role="img" aria-label="Video to interpretation model pipeline">
      {nodes.map((node, index) => (
        <div className="pipeline__step" key={node}>
          <span>{node.split('\n').map((line) => <span key={line}>{line}</span>)}</span>
          {index < nodes.length - 1 && <i aria-hidden="true">→</i>}
        </div>
      ))}
      <div className="pipeline__audit"><span>evidence</span><span>faithfulness</span><span>causal validity</span></div>
    </div>
  )
}

function GlmPipeline() {
  return (
    <div className="analysis-diagram" role="img" aria-label="Phase 1 statistical workflow: data cleaning, generalized linear modeling, and association analysis">
      <div className="diagram-node">DATA<br />CLEANING</div>
      <span className="diagram-arrow" aria-hidden="true">→</span>
      <div className="diagram-node">GLM<br />ANALYSIS</div>
      <span className="diagram-arrow" aria-hidden="true">→</span>
      <div className="diagram-node diagram-node--accent">ASSOCIATIONS</div>
    </div>
  )
}

function CloudPipeline() {
  return (
    <div className="cloud-diagram" role="img" aria-label="Distributed AWS SNP annotation architecture">
      <div className="cloud-diagram__node cloud-diagram__node--entry">FLASK / EC2</div>
      <span aria-hidden="true">→</span>
      <div className="cloud-diagram__node">S3 INPUT</div>
      <span aria-hidden="true">→</span>
      <div className="cloud-diagram__fanout">
        <span>SNS / SQS</span>
        <div>
          <i>REGIONAL</i>
          <i>EFFECT</i>
        </div>
      </div>
      <span aria-hidden="true">→</span>
      <div className="cloud-diagram__node cloud-diagram__node--accent">MERGED CSV</div>
      <div className="cloud-diagram__state">DYNAMODB / JOB STATE</div>
    </div>
  )
}

function StatisticsPanel() {
  const metrics = [
    ['N', '126'],
    ['DISPERSION', '4.39'],
    ['ΔAIC', '177.5'],
  ]
  return (
    <div className="stats-panel" role="img" aria-label="Verified statistical analysis summary">
      <div className="stats-panel__header"><span>MODEL_DIAGNOSTICS</span><span>NB &gt; POISSON</span></div>
      <div className="stats-panel__metrics">
        {metrics.map(([label, value]) => (
          <div key={label}><span>{label}</span><strong>{value}</strong></div>
        ))}
      </div>
      <svg viewBox="0 0 440 70" aria-hidden="true" preserveAspectRatio="none">
        <path d="M0 55 L48 50 L92 53 L138 38 L182 43 L226 24 L272 31 L318 17 L364 23 L410 8 L440 12" />
        <line x1="0" y1="62" x2="440" y2="62" />
      </svg>
    </div>
  )
}

export function TechnicalDiagram({ type }) {
  if (type === 'video') return <VideoPipeline />
  if (type === 'glm') return <GlmPipeline />
  if (type === 'cloud') return <CloudPipeline />
  if (type === 'statistics') return <StatisticsPanel />
  return null
}
