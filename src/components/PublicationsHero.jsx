import { ArrowRight, FileText } from 'lucide-react'
import campusPhoto from '../assets/uem-campus.jpg'

export default function PublicationsHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">
            — Publications
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] text-navy-900">
            Research Today
            <br />
            <span className="text-brand-blue">for a Better Tomorrow</span>
          </h1>
          <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-600">
            Explore research papers, articles, and innovations published by our student
            community and faculty mentors. At IEDC Lab, we encourage idea sharing, knowledge
            creation, and impactful research for real-world solutions.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:iedclab.cstcsit@iem.edu.in?subject=Submit%20a%20Publication"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
            >
              Submit a Publication
              <ArrowRight size={16} />
            </a>
            <a
              href="mailto:iedclab.cstcsit@iem.edu.in?subject=Publication%20Guidelines"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
            >
              <FileText size={16} />
              Publication Guidelines
            </a>
          </div>
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
              Knowledge fuels innovation. Together, we build a brighter tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
