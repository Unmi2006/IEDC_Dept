import { ArrowRight, Bell } from 'lucide-react'
import campusPhoto from '../assets/uem-campus.jpg'

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">
            — Our Projects
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] text-navy-900">
            Ideas into <span className="text-brand-blue">Impact</span>
          </h1>
          <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-600">
            At IEDC Lab, we believe in the power of ideas to create real-world solutions. Our
            student projects reflect innovation, and a commitment to building a better tomorrow.
          </p>
          <a
            href="mailto:iedclab.cstcsit@iem.edu.in?subject=Notify%20me%20about%20new%20projects"
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
          >
            <Bell size={16} />
            Stay Updated
            <ArrowRight size={16} />
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
