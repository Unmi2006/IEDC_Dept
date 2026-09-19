import PageBanner from '../components/PageBanner'
import { Rocket, FlaskConical, FolderKanban, ShieldCheck, BookOpen } from 'lucide-react'

const startups = [
  { name: 'Start-up Name 1', desc: 'One-line description of what this student start-up does.' },
  { name: 'Start-up Name 2', desc: 'One-line description of what this student start-up does.' },
]

const grants = [
  { name: 'Sponsored Research Title 1', body: 'Funding agency · Year · Add short summary.' },
  { name: 'Sponsored Research Title 2', body: 'Funding agency · Year · Add short summary.' },
]

const projects = [
  { name: 'Project Name 1', body: 'Status: Ongoing — one-line description.' },
  { name: 'Project Name 2', body: 'Status: Completed — one-line description.' },
]

const patents = [
  { name: 'Patent Title 1', body: 'Application / grant number · Year' },
  { name: 'Patent Title 2', body: 'Application / grant number · Year' },
]

const publications = [
  { name: 'Publication Title 1', body: 'Journal / Conference · Year' },
  { name: 'Publication Title 2', body: 'Journal / Conference · Year' },
]

function Section({ id, icon: Icon, title, children }) {
  return (
    <div id={id} className="scroll-mt-24 mb-16">
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

export default function InnovationResearch() {
  return (
    <>
      <PageBanner
        title="Innovation & Research"
        subtitle="Patents, grants, publications and projects from the IEDC community"
      />

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <Section id="start-ups" icon={Rocket} title="Start-ups">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {startups.map((s) => (
                <Card key={s.name} name={s.name} body={s.desc} />
              ))}
            </div>
          </Section>

          <Section id="sponsored-research" icon={FlaskConical} title="Sponsored Research">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {grants.map((g) => (
                <Card key={g.name} name={g.name} body={g.body} />
              ))}
            </div>
          </Section>

          <Section id="projects" icon={FolderKanban} title="Projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((p) => (
                <Card key={p.name} name={p.name} body={p.body} />
              ))}
            </div>
          </Section>

          <Section id="patents" icon={ShieldCheck} title="Patents">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {patents.map((p) => (
                <Card key={p.name} name={p.name} body={p.body} />
              ))}
            </div>
          </Section>

          <Section id="publications" icon={BookOpen} title="Publications">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {publications.map((p) => (
                <Card key={p.name} name={p.name} body={p.body} />
              ))}
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
