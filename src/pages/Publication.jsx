import PageBanner from '../components/PageBanner'
import { BookOpen, ShieldCheck, FlaskConical } from 'lucide-react'

const publications = [
  { name: 'Publication Title 1', body: 'Journal / Conference · Year' },
  { name: 'Publication Title 2', body: 'Journal / Conference · Year' },
  { name: 'Publication Title 3', body: 'Journal / Conference · Year' },
]

const patents = [
  { name: 'Patent Title 1', body: 'Application / grant number · Year' },
  { name: 'Patent Title 2', body: 'Application / grant number · Year' },
]

const grants = [
  { name: 'Sponsored Research Title 1', body: 'Funding agency · Year · Add short summary.' },
  { name: 'Sponsored Research Title 2', body: 'Funding agency · Year · Add short summary.' },
]

function Section({ icon: Icon, title, children }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="text-ocean" size={26} />
        <h2 className="text-2xl font-bold text-ocean-dark">{title}</h2>
      </div>
      {children}
    </div>
  )
}

function Card({ name, body }) {
  return (
    <div className="border border-ocean/15 rounded-xl p-5 shadow-sm">
      <h3 className="text-ocean-dark font-semibold mb-1">{name}</h3>
      <p className="text-gray-600 text-sm">{body}</p>
    </div>
  )
}

export default function Publication() {
  return (
    <>
      <PageBanner
        title="Publication"
        subtitle="Publications, patents and sponsored research from the IEDC community"
      />

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <Section icon={BookOpen} title="Publications">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {publications.map((p) => (
                <Card key={p.name} {...p} />
              ))}
            </div>
          </Section>

          <Section icon={ShieldCheck} title="Patents">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {patents.map((p) => (
                <Card key={p.name} {...p} />
              ))}
            </div>
          </Section>

          <Section icon={FlaskConical} title="Sponsored Research">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {grants.map((g) => (
                <Card key={g.name} {...g} />
              ))}
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
