import { ArrowRight, Bell } from 'lucide-react'
import campusPhoto from '../assets/uem-campus.jpg'
import { Briefcase, Users, Lightbulb, Share2, FileCheck2, Rocket } from 'lucide-react'

const benefits = [
  { icon: Briefcase, label: 'Industry Exposure', desc: 'Work on real-world challenges', bg: 'bg-sky-50', fg: 'text-brand-blue' },
  { icon: Users, label: 'Mentorship', desc: 'Learn from experts', bg: 'bg-green-50', fg: 'text-green-600' },
  { icon: Lightbulb, label: 'Skill Development', desc: 'Build job-ready skills', bg: 'bg-purple-50', fg: 'text-purple-600' },
  { icon: Share2, label: 'Networking', desc: 'Connect with innovators', bg: 'bg-orange-50', fg: 'text-orange-500' },
  { icon: FileCheck2, label: 'Certificates', desc: 'Get recognized', bg: 'bg-cyan-50', fg: 'text-cyan-600' },
  { icon: Rocket, label: 'Career Opportunities', desc: 'Open doors to the future', bg: 'bg-rose-50', fg: 'text-rose-500' },
]

export default function InternshipsHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">
              — Internships &amp; Opportunities
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] text-navy-900">
              Gain Real-World
              <br />
              <span className="text-brand-blue">Experience</span>
            </h1>
            <p className="mt-3 text-lg font-semibold text-navy-900/80">
              Internships for a Brighter Tomorrow
            </p>
            <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-600">
              Explore hands-on opportunities, work with innovative teams, and turn your ideas
              into real-world impact. IEDC Lab connects students with industry, startups and
              research organizations to help you grow beyond the classroom.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#internship-details"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
              >
                Explore Opportunities
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:iedclab.cstcsit@iem.edu.in?subject=Notify%20me%20about%20internships"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              >
                <Bell size={16} />
                Notify Me
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
                Experience today. A brighter tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-14 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map(({ icon: Icon, label, desc, bg, fg }) => (
            <div key={label} className={`rounded-2xl ${bg} p-5 text-center`}>
              <Icon size={26} className={`mx-auto ${fg}`} />
              <p className="mt-3 text-sm font-bold text-navy-900">{label}</p>
              <p className="mt-1 text-xs text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
