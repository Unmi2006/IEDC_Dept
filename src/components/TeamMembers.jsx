import { useState } from 'react'
import { Linkedin, Instagram, Facebook, Phone, User } from 'lucide-react'

const teamRoles = [
  { role: 'Admin', count: 2 },
  { role: 'Webmaster', count: 2 },
  { role: 'Moderator', count: 2 },
  { role: 'Operation', count: 3 },
  { role: 'Social Media Team', count: 3 },
]

const members = teamRoles.flatMap(({ role, count }) =>
  Array.from({ length: count }, (_, i) => ({ id: `${role}-${i + 1}`, role, index: i + 1 }))
)

const tabs = ['All', ...teamRoles.map((r) => r.role)]

function MemberCard({ role, index }) {
  return (
    <div className="bg-slate-50 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 mx-auto rounded-full bg-white border border-brand-blue/15 flex items-center justify-center text-brand-blue mb-3">
        <User size={26} strokeWidth={1.75} />
      </div>
      <h3 className="text-navy-900 font-bold text-sm">Add name</h3>
      <p className="text-slate-500 text-xs mb-2">
        {role} {index}
      </p>
      <p className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-2">
        <Phone size={12} />
        Add phone number
      </p>
      <div className="flex justify-center gap-2.5 text-slate-300">
        <a href="#" aria-label="LinkedIn" className="hover:text-brand-blue transition-colors">
          <Linkedin size={16} />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-brand-blue transition-colors">
          <Instagram size={16} />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-brand-blue transition-colors">
          <Facebook size={16} />
        </a>
      </div>
    </div>
  )
}

export default function TeamMembers() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? members : members.filter((m) => m.role === active)

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-2">
              — Team Members
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Our Team</h2>
            <p className="text-slate-500 text-sm mt-1 max-w-xl">
              A diverse group of innovators, creators and changemakers working together to
              make ideas happen.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium border transition-colors ${
                  active === tab
                    ? 'bg-brand-blue text-white border-brand-blue'
                    : 'text-slate-600 border-slate-200 hover:border-brand-blue/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((m) => (
            <MemberCard key={m.id} role={m.role} index={m.index} />
          ))}
        </div>
      </div>
    </section>
  )
}
