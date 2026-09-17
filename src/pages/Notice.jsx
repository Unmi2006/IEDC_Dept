import PageBanner from '../components/PageBanner'
import { Megaphone, Pin } from 'lucide-react'

const notices = [
  { title: 'Winter Internship 2026 — Applications Open', date: 'Add date', pinned: true },
  { title: 'Hackathon Registration Deadline Extended', date: 'Add date', pinned: false },
  { title: 'Sponsored Research Proposal Submission Window', date: 'Add date', pinned: false },
]

export default function Notice() {
  return (
    <>
      <PageBanner title="Notice" subtitle="Latest announcements from IEDC, IEM Newtown(UEM Kolkata)" />

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Megaphone className="text-ocean" size={26} />
            <h2 className="text-2xl font-bold text-ocean-dark">Announcements</h2>
          </div>

          <ul className="space-y-4">
            {notices.map((n) => (
              <li
                key={n.title}
                className="border border-ocean/15 rounded-xl p-5 shadow-sm flex items-start gap-4"
              >
                {n.pinned && <Pin className="text-ocean shrink-0 mt-1" size={18} />}
                <div>
                  <h3 className="text-ocean-dark font-semibold">{n.title}</h3>
                  <p className="text-gray-500 text-sm">{n.date}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-gray-500 text-sm mt-8 text-center">
            Replace these placeholders with real notices as they're published.
          </p>
        </div>
      </section>
    </>
  )
}
