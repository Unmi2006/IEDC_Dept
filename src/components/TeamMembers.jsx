import { useMemo, useState } from 'react'
import { ShieldCheck, Code2, MessagesSquare, Workflow, Megaphone, Users } from 'lucide-react'

const teams = [
  {
    key: 'Admin',
    label: 'Admin',
    icon: ShieldCheck,
    blurb: 'Leads the student side of IEDC Lab and keeps everything on track.',
    members: ['Unmilan Das', 'Shreyasee Chatterjee', 'Agnibh Ghosh'],
  },
  {
    key: 'Web Master',
    label: 'Web Master',
    icon: Code2,
    blurb: 'Builds and maintains the IEDC Lab website.',
    members: ['Pritam Paul', 'Siddhartha Lenka', 'Krish Kumar'],
  },
  {
    key: 'Moderator',
    label: 'Moderator',
    icon: MessagesSquare,
    blurb: 'Keeps the community active, welcoming and well organised.',
    members: ['Piyasa Mandal', 'Soumik Bid', 'Sk. Saqibul Islam'],
  },
  {
    key: 'Operation',
    label: 'Operation',
    icon: Workflow,
    blurb: 'Runs events, logistics and day-to-day lab operations.',
    members: ['Ahaana Bhattacharya', 'Koushik Sarkar', 'Piyasa Mandal', 'Megha Mondal'],
  },
  {
    key: 'Social Media',
    label: 'Social Media',
    sub: 'Promotion Team',
    icon: Megaphone,
    blurb: 'Spreads the word about IEDC Lab across social platforms.',
    members: ['Koushik Sarkar', 'Megha Mondal'],
  },
]

const tabs = ['All', ...teams.map((t) => t.key)]

const initials = (name) => {
  const parts = name.split(' ').filter((p) => p && !p.endsWith('.'))
  return ((parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase()
}

const gradients = [
  'from-[#1463e0] to-[#3d9bff]',
  'from-[#0e2a52] to-[#1463e0]',
  'from-[#0f5c8f] to-[#38bdf8]',
  'from-[#123568] to-[#3d9bff]',
]
const gradientFor = (name) => {
  let h = 0
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) % 997
  return gradients[h % gradients.length]
}

function MemberCard({ name }) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-lg">
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradientFor(
          name,
        )} text-lg font-bold tracking-wide text-white shadow-md ring-4 ring-brand-blue/10`}
        aria-hidden="true"
      >
        {initials(name)}
      </div>
      <h4 className="min-w-0 text-[15px] font-bold leading-snug text-navy-900">{name}</h4>
    </div>
  )
}

function TeamGroup({ team }) {
  const Icon = team.icon
  return (
    <div>
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
          <Icon size={22} strokeWidth={1.9} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="flex flex-wrap items-center gap-x-2 text-lg font-extrabold text-navy-900">
            {team.label}
            {team.sub && (
              <span className="text-sm font-semibold text-slate-500">({team.sub})</span>
            )}
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
              {team.members.length}
            </span>
          </h3>
          <p className="text-sm text-slate-500">{team.blurb}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.members.map((name) => (
          <MemberCard key={`${team.key}-${name}`} name={name} />
        ))}
      </div>
    </div>
  )
}

export default function TeamMembers() {
  const [active, setActive] = useState('All')

  const totalPeople = useMemo(() => new Set(teams.flatMap((t) => t.members)).size, [])
  const shown = active === 'All' ? teams : teams.filter((t) => t.key === active)

  return (
    <section className="bg-gradient-to-b from-white via-sky-50/40 to-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">
              — Student Team
            </p>
            <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Our Team</h2>
            <p className="mt-1 max-w-xl text-sm text-slate-500">
              A diverse group of innovators, creators and changemakers working together to make
              ideas happen.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3.5 py-1.5 text-xs font-semibold text-brand-blue">
              <Users size={14} />
              {totalPeople} students · {teams.length} teams
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter team by role">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                  active === tab
                    ? 'border-brand-blue bg-brand-blue text-white shadow-md shadow-brand-blue/25'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-brand-blue/50 hover:text-brand-blue'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {shown.map((team) => (
            <TeamGroup key={team.key} team={team} />
          ))}
        </div>
      </div>
    </section>
  )
}
