import { Bell } from 'lucide-react'
import campusPhoto from '../assets/uem-campus.jpg'

export default function NoticesHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">
            — Notices
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] text-navy-900">
            Stay Updated,
            <br />
            <span className="text-brand-blue">Stay Ahead</span>
          </h1>
          <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-600">
            Get the latest updates, announcements, event alerts and important information from
            IEDC Lab. Never miss an opportunity.
          </p>
          <a
            href="mailto:iedclab.cstcsit@iem.edu.in?subject=Subscribe%20to%20notifications"
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
          >
            <Bell size={16} />
            Subscribe to Notifications
          </a>
        </div>

        <div className="relative">
          <img
            src={campusPhoto}
            alt="UEM Newtown campus"
            className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
