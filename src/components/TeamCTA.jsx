import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TeamCTA() {
  return (
    <section className="bg-navy-900 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-300 mb-2">
            — Be a Part of Our Journey
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Great Teams Build Greater Tomorrows.
          </h2>
          <p className="text-slate-300 text-sm max-w-md">
            Join IEDC Lab and be part of a community that turns ideas into impact.
          </p>
        </div>

        <Link
          to="/contact"
          className="shrink-0 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-slate-100 transition-colors"
        >
          Join Now
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
