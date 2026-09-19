import { Link } from 'react-router-dom'
import { BookOpen, FolderKanban, FileText, Rocket, FlaskConical, ShieldCheck } from 'lucide-react'

const categories = [
  { icon: BookOpen, label: 'Learning Materials', bg: 'bg-sky-50', fg: 'text-brand-blue', to: '/internships' },
  { icon: FolderKanban, label: 'Projects', bg: 'bg-green-50', fg: 'text-green-600', to: '/projects' },
  { icon: FileText, label: 'Publications', bg: 'bg-purple-50', fg: 'text-purple-600', to: '/publication' },
  { icon: Rocket, label: 'Startup Resources', bg: 'bg-cyan-50', fg: 'text-cyan-600', to: '#startups' },
  { icon: FlaskConical, label: 'Sponsored Research', bg: 'bg-orange-50', fg: 'text-orange-500', to: '#sponsored-research' },
  { icon: ShieldCheck, label: 'Patents & IP', bg: 'bg-rose-50', fg: 'text-rose-500', to: '#patents' },
]

export default function ResourceQuickLinks() {
  return (
    <section className="bg-white pb-14 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-2">
          — Quick Access
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-1">Quick Links</h2>
        <p className="text-slate-500 text-sm mb-8">Frequently used resources at your fingertips.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {categories.map(({ icon: Icon, label, bg, fg, to }) =>
            to.startsWith('#') ? (
              <a
                key={label}
                href={to}
                className={`rounded-2xl ${bg} p-6 text-center transition-transform hover:-translate-y-1`}
              >
                <Icon size={30} className={`mx-auto ${fg}`} />
                <p className="mt-3 text-sm font-bold text-navy-900">{label}</p>
              </a>
            ) : (
              <Link
                key={label}
                to={to}
                className={`rounded-2xl ${bg} p-6 text-center transition-transform hover:-translate-y-1`}
              >
                <Icon size={30} className={`mx-auto ${fg}`} />
                <p className="mt-3 text-sm font-bold text-navy-900">{label}</p>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}
