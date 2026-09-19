import { Search, FileText } from 'lucide-react'

const filters = ['All Categories', 'All Years', 'All Authors', 'All Types']

export default function PublicationsGrid() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-2">
              — Our Publications
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Explore Our Research</h2>
            <p className="text-slate-500 text-sm mt-1">
              Discover publications from our student innovators, faculty mentors, and
              collaborators.
            </p>
          </div>

          <div className="flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2.5 lg:w-80 shrink-0">
            <Search size={18} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search publications by title, author, keyword..."
              className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((f) => (
            <select
              key={f}
              className="border border-slate-200 rounded-full px-4 py-2 text-sm text-navy-900 font-medium outline-none"
            >
              <option>{f}</option>
            </select>
          ))}
        </div>

        <div className="rounded-2xl border-2 border-dashed border-brand-blue/20 bg-sky-50/50 py-16 px-6 text-center">
          <FileText className="mx-auto text-brand-blue" size={48} strokeWidth={1.5} />
          <h2 className="mt-4 text-2xl font-extrabold text-navy-900">No Publications Yet</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
            Our publications will be listed here soon. Stay tuned for innovative research from
            the IEDC community.
          </p>
        </div>
      </div>
    </section>
  )
}
