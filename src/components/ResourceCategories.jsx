import { Rocket, FlaskConical, ShieldCheck } from 'lucide-react'

const startups = [
  { name: 'Start-up Name 1', desc: 'One-line description of what this student start-up does.' },
  { name: 'Start-up Name 2', desc: 'One-line description of what this student start-up does.' },
]

const grants = [
  { name: 'Sponsored Research Title 1', body: 'Funding agency · Year · Add short summary.' },
  { name: 'Sponsored Research Title 2', body: 'Funding agency · Year · Add short summary.' },
]

const patents = [
  { name: 'Patent Title 1', body: 'Application / grant number · Year' },
  { name: 'Patent Title 2', body: 'Application / grant number · Year' },
]

function Section({ id, icon: Icon, title, items, bodyKey }) {
  return (
    <div id={id} className="scroll-mt-24 mb-14 last:mb-0">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="text-brand-blue" size={24} />
        <h3 className="text-xl font-bold text-navy-900">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((item) => (
          <div key={item.name} className="border border-slate-200 rounded-xl p-5 shadow-sm">
            <h4 className="text-navy-900 font-semibold mb-1">{item.name}</h4>
            <p className="text-slate-500 text-sm">{item[bodyKey]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ResourceCategories() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Section id="startups" icon={Rocket} title="Startup Resources" items={startups} bodyKey="desc" />
        <Section id="sponsored-research" icon={FlaskConical} title="Sponsored Research" items={grants} bodyKey="body" />
        <Section id="patents" icon={ShieldCheck} title="Patents & IP" items={patents} bodyKey="body" />
      </div>
    </section>
  )
}
