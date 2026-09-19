import { useMemo, useState } from 'react'
import {
  Search,
  LayoutGrid,
  Calendar,
  Megaphone,
  FileText,
  Clock,
  Users,
  MoreHorizontal,
  ArrowRight,
  Pin,
} from 'lucide-react'

const notices = [
  {
    title: 'Winter Internship 2026 — Applications Open',
    desc: 'Details to be announced. Check back here once the registration form is live.',
    date: 'Add date',
    category: 'Opportunities',
    pinned: true,
  },
  {
    title: 'Hackathon Registration Deadline',
    desc: 'Details to be announced once the event schedule is finalized.',
    date: 'Add date',
    category: 'Deadlines',
    pinned: false,
  },
  {
    title: 'Sponsored Research Proposal Submission Window',
    desc: 'Details to be announced by the IEDC research committee.',
    date: 'Add date',
    category: 'Announcements',
    pinned: false,
  },
]

const categoryMeta = {
  'All Notices': { icon: LayoutGrid, color: 'text-brand-blue' },
  Events: { icon: Calendar, color: 'text-green-600' },
  Opportunities: { icon: Megaphone, color: 'text-brand-blue' },
  Announcements: { icon: FileText, color: 'text-purple-600' },
  Deadlines: { icon: Clock, color: 'text-rose-500' },
  Workshops: { icon: Users, color: 'text-orange-500' },
  Others: { icon: MoreHorizontal, color: 'text-slate-500' },
}

const categoryBadgeStyle = {
  Events: 'bg-green-50 text-green-700',
  Opportunities: 'bg-sky-50 text-brand-blue',
  Announcements: 'bg-purple-50 text-purple-700',
  Deadlines: 'bg-rose-50 text-rose-600',
  Workshops: 'bg-orange-50 text-orange-600',
  Others: 'bg-slate-100 text-slate-600',
}

export default function NoticeBoard() {
  const [activeCategory, setActiveCategory] = useState('All Notices')
  const [query, setQuery] = useState('')

  const counts = useMemo(() => {
    const c = { 'All Notices': notices.length }
    Object.keys(categoryMeta).forEach((cat) => {
      if (cat !== 'All Notices') {
        c[cat] = notices.filter((n) => n.category === cat).length
      }
    })
    return c
  }, [])

  const filtered = notices
    .filter((n) => activeCategory === 'All Notices' || n.category === activeCategory)
    .filter((n) => n.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-2">
              — All Notices
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Latest Notices</h2>
            <p className="text-slate-500 text-sm mt-1">
              Browse important announcements, deadlines, and updates.
            </p>
          </div>

          <div className="flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2.5 lg:w-72 shrink-0">
            <Search size={18} className="text-slate-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search notices..."
              className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
          <div className="border border-slate-200 rounded-xl p-2 h-fit">
            {Object.entries(categoryMeta).map(([cat, { icon: Icon, color }]) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`w-full flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  activeCategory === cat ? 'bg-sky-50 text-navy-900' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon size={16} className={color} />
                  {cat}
                </span>
                <span className="text-xs bg-white border border-slate-200 rounded-full px-2 py-0.5">
                  {counts[cat]}
                </span>
              </button>
            ))}
          </div>

          <div>
            {filtered.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-brand-blue/20 bg-sky-50/50 py-16 px-6 text-center">
                <Megaphone className="mx-auto text-brand-blue" size={40} strokeWidth={1.5} />
                <h3 className="mt-4 text-xl font-bold text-navy-900">No Notices Here Yet</h3>
                <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
                  Nothing in this category right now. Check back soon.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map((n) => (
                  <div
                    key={n.title}
                    className="border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {n.pinned && <Pin size={14} className="text-brand-blue shrink-0" />}
                        <h3 className="text-navy-900 font-bold text-sm sm:text-base">{n.title}</h3>
                      </div>
                      <p className="text-slate-500 text-sm mt-1">{n.desc}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <Calendar size={14} />
                        {n.date}
                      </span>
                      <span
                        className={`text-xs font-medium rounded-full px-3 py-1 ${categoryBadgeStyle[n.category]}`}
                      >
                        {n.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="text-slate-400 text-xs mt-8 text-center">
          Replace these placeholders with real notices as they're published.
        </p>
      </div>
    </section>
  )
}
