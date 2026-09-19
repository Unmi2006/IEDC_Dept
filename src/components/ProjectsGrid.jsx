import { Search, Lightbulb, SlidersHorizontal } from 'lucide-react'

export default function ProjectsGrid() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex-1 flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2.5">
            <Search size={18} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
          <div className="flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2.5 text-sm text-slate-600">
            <SlidersHorizontal size={16} className="text-brand-blue shrink-0" />
            <select className="bg-transparent outline-none text-slate-600 pr-2">
              <option>Sorting projects...</option>
              <option>Newest first</option>
              <option>Oldest first</option>
              <option>A–Z</option>
            </select>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-dashed border-brand-blue/20 bg-sky-50/50 py-16 px-6 text-center">
          <Lightbulb className="mx-auto text-brand-blue" size={48} strokeWidth={1.5} />
          <h2 className="mt-4 text-2xl font-extrabold text-navy-900">Projects Coming Soon</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
            We are working on showcasing our innovative student projects. Stay tuned for
            exciting ideas, real-world solutions, and impactful outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}
