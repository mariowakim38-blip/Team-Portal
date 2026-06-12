export default function FigValueBadge({ value }: { value: string }) {
  return <span className={`fig-value fig-value-${value.toLowerCase()}`}>{value}</span>
}
