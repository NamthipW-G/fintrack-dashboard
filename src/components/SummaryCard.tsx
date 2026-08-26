type SummaryCardProps = {
  title: string
  value: string
  subtitle: string
}

function SummaryCard({ title, value, subtitle }: SummaryCardProps) {
  return (
    <div className="summary-card">
      <p className="summary-title">{title}</p>
      <h2>{value}</h2>
      <p className="summary-subtitle">{subtitle}</p>
    </div>
  )
}

export default SummaryCard