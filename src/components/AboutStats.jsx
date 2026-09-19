import { Users, FileText, Calendar, Rocket } from 'lucide-react'

const stats = [
  { icon: Users, value: '100+', label: 'Student Innovators' },
  { icon: FileText, value: '50+', label: 'Projects Developed' },
  { icon: Calendar, value: '20+', label: 'Workshops & Events' },
  { icon: Rocket, value: '10+', label: 'Startups Supported' },
]

export default function AboutStats() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-2">
          — Our Impact
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-1">By The Numbers</h2>
        <p className="text-slate-500 text-sm mb-8">
          A growing community of innovators, creators and changemakers.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon className="text-brand-blue mb-2" size={26} />
              <div className="text-3xl font-extrabold text-navy-900">{value}</div>
              <div className="text-xs text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
