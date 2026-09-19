import PageBanner from '../components/PageBanner'
import { Calendar, MapPin } from 'lucide-react'

const upcoming = [
  {
    title: 'Ideation Bootcamp',
    date: 'Add date',
    location: 'UEM Newtown Campus',
    desc: 'A one-day workshop to help students turn a rough idea into a validated concept.',
  },
  {
    title: 'Startup Mentorship Meet',
    date: 'Add date',
    location: 'UEM Newtown Campus',
    desc: 'One-on-one sessions with founders and mentors from partner incubators.',
  },
]

const past = [
  {
    title: 'Bengal E-Summit 2024',
    date: '2024',
    location: 'UEM Newtown Campus',
    desc: 'Flagship entrepreneurship summit featuring pitch sessions, panel talks and networking.',
  },
  {
    title: 'Hackathon 2024',
    date: '2024',
    location: 'UEM Newtown Campus',
    desc: '24-hour build sprint for student teams across CST, CSIT, CSE (Cybersecurity) and CSE (Networks).',
  },
]

function EventCard({ title, date, location, desc }) {
  return (
    <div className="border border-ocean/15 rounded-xl p-6 shadow-sm">
      <h3 className="text-ocean-dark font-bold text-lg mb-2">{title}</h3>
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
        <span className="flex items-center gap-1.5">
          <Calendar size={16} /> {date}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={16} /> {location}
        </span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

export default function Events() {
  return (
    <>
      <PageBanner title="Events" subtitle="Bengal E-Summit 2024 and upcoming events" />

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-ocean-dark mb-6">Upcoming</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {upcoming.map((e) => (
              <EventCard key={e.title} {...e} />
            ))}
          </div>

          <h2 className="text-2xl font-bold text-ocean-dark mb-6">Past Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {past.map((e) => (
              <EventCard key={e.title} {...e} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
