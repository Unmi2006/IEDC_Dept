import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import campusPhoto from '../assets/uem-campus.jpg'

export default function TeamHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">
            — Our Team
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] text-navy-900">
            Meet the
            <br />
            <span className="text-brand-blue">IEDC Team</span>
          </h1>
          <p className="mt-3 text-lg font-semibold text-navy-900/80">People Behind the Possibilities</p>
          <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-600">
            A passionate team of innovators, mentors and doers working together to nurture
            ideas, build solutions and create a stronger innovation ecosystem at IEM.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
          >
            Join Our Team
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="relative">
          <img
            src={campusPhoto}
            alt="UEM Newtown campus"
            className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute -bottom-6 -right-4 sm:right-4 max-w-[220px] bg-navy-900 text-white rounded-xl p-5 shadow-xl">
            <span className="text-3xl leading-none text-sky-300 font-serif">&ldquo;</span>
            <p className="text-sm font-medium leading-snug -mt-2">
              Great ideas are built by great teams.
            </p>
            <p className="mt-2 text-xs text-slate-300">Collaborate · Innovate · Make an Impact</p>
          </div>
        </div>
      </div>
    </section>
  )
}
