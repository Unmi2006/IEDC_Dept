import PageBanner from '../components/PageBanner'
import { FolderKanban } from 'lucide-react'

const projects = [
  { name: 'Project Name 1', body: 'Status: Ongoing — add a one-line description of the project.' },
  { name: 'Project Name 2', body: 'Status: Completed — add a one-line description of the project.' },
  { name: 'Project Name 3', body: 'Status: Ongoing — add a one-line description of the project.' },
  { name: 'Project Name 4', body: 'Status: Completed — add a one-line description of the project.' },
]

function Card({ name, body }) {
  return (
    <div className="border border-ocean/15 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-ocean-dark font-semibold mb-1">{name}</h3>
      <p className="text-gray-600 text-sm">{body}</p>
    </div>
  )
}

export default function Projects() {
  return (
    <>
      <PageBanner title="Projects" subtitle="Student and faculty-led projects at IEDC, IEM Newtown(UEM Kolkata)" />

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <FolderKanban className="text-ocean" size={26} />
            <h2 className="text-2xl font-bold text-ocean-dark">Ongoing & Completed Projects</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Card key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
