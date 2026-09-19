const stats = [
  { value: '100+', label: 'Research Publications' },
  { value: '8', label: 'Start-ups Incubated' },
  { value: '25+', label: 'Sponsored Research' },
]

export default function Stats() {
  return (
    <section className="bg-navy">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center text-white">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div className="text-5xl font-extrabold">{value}</div>
            <div className="mt-2 text-blue-100/90">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
