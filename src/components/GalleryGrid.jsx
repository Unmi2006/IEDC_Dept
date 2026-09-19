import { useState } from 'react'
import { Search, Image as ImageIcon } from 'lucide-react'

const categories = ['All', 'Events', 'Workshops', 'Hackathons', 'Seminars', 'Team Activities', 'Infrastructure', 'Achievements', 'Others']

export default function GalleryGrid() {
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')

  return (
    <section id="gallery-grid" className="bg-white pb-16 sm:pb-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-brand-blue text-white'
                    : 'bg-sky-50 text-navy-900 hover:bg-sky-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2.5 lg:w-72 shrink-0">
            <Search size={18} className="text-slate-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search photos..."
              className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="rounded-2xl border-2 border-dashed border-brand-blue/20 bg-sky-50/50 py-16 px-6 text-center">
          <ImageIcon className="mx-auto text-brand-blue" size={48} strokeWidth={1.5} />
          <h2 className="mt-4 text-2xl font-extrabold text-navy-900">No Photos Yet</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
            {active === 'All'
              ? "We're gathering photos from IEDC Lab events. Check back soon, or contribute your own."
              : `No photos tagged "${active}" yet. Check back soon.`}
          </p>
        </div>
      </div>
    </section>
  )
}
