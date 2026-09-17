import PageBanner from '../components/PageBanner'
import { Linkedin, Mail } from 'lucide-react'

const facultyTeam = [
  { name: 'Faculty Coordinator', role: 'IEDC Faculty In-Charge' },
  { name: 'Faculty Co-Coordinator', role: 'IEDC Faculty Mentor' },
]

const studentTeam = [
  { name: 'Student Lead', role: 'IEDC President' },
  { name: 'Student Co-Lead', role: 'IEDC Vice President' },
  { name: 'Events Head', role: 'Events & Outreach' },
  { name: 'Tech Head', role: 'Technical Operations' },
  { name: 'Design Head', role: 'Design & Content' },
  { name: 'Research Head', role: 'Research & Publications' },
]

function TeamCard({ name, role }) {
  return (
    <div className="border border-ocean/15 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="w-20 h-20 mx-auto rounded-full bg-ocean/10 flex items-center justify-center text-ocean font-bold text-xl mb-4">
        {name
          .split(' ')
          .map((w) => w[0])
          .join('')
          .slice(0, 2)}
      </div>
      <h3 className="text-ocean-dark font-bold">{name}</h3>
      <p className="text-gray-500 text-sm mb-3">{role}</p>
      <div className="flex justify-center gap-3 text-gray-400">
        <a href="#" aria-label="LinkedIn" className="hover:text-ocean transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="#" aria-label="Email" className="hover:text-ocean transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <>
      <PageBanner title="Our Team" subtitle="The people driving innovation at IEDC, IEM Newtown(UEM Kolkata)" />

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-ocean-dark mb-6">Faculty Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {facultyTeam.map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>

          <h2 className="text-2xl font-bold text-ocean-dark mb-6">Student Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentTeam.map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
