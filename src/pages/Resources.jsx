import PageBanner from '../components/PageBanner'
import { FileText, Link2, Download } from 'lucide-react'

const resources = [
  { icon: FileText, title: 'Lab Manuals', desc: 'Reference manuals and guides for IEDC Lab equipment and tools.' },
  { icon: Download, title: 'Templates', desc: 'Report, presentation and proposal templates for student projects.' },
  { icon: Link2, title: 'Useful Links', desc: 'Curated external links for funding, incubation and patent filing.' },
]

export default function Resources() {
  return (
    <>
      <PageBanner title="Resources" subtitle="Guides, templates and links for the IEDC community" />

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {resources.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-ocean/15 rounded-xl p-6 shadow-sm">
                <Icon className="text-ocean mb-4" size={28} strokeWidth={1.75} />
                <h3 className="text-ocean-dark font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-ocean/5 border border-ocean/15 rounded-xl p-6 text-center">
            <p className="text-gray-600 text-sm">
              Downloadable files will be added here. For now, reach out to{' '}
              <a href="mailto:iedclab.cstcsit@iem.edu.in" className="text-ocean font-medium hover:underline">
                iedclab.cstcsit@iem.edu.in
              </a>{' '}
              for any resource you need.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
