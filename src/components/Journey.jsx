const milestones = [
  { year: '2024', label: 'Department & IEDC established under Prof. (Dr.) Maumita Chakraborty' },
  { year: '2024', label: 'Thrust areas defined across AI/ML, Cybersecurity, IoT, Robotics and more' },
  { year: '2024', label: 'Winter Internship program planned for students' },
]

export default function Journey() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-2">
          — Our Journey
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-8">Milestones</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {milestones.map((m, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-brand-blue/30 sm:border-l-0 sm:pl-0">
              <div className="hidden sm:block h-1 w-full bg-brand-blue/20 rounded-full mb-4" />
              <div className="text-brand-blue font-extrabold text-lg mb-1">{m.year}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
