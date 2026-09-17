import PageBanner from '../components/PageBanner'
import ThrustAreas from '../components/ThrustAreas'
import HodSection from '../components/HodSection'
import { Target, Eye, Sparkles } from 'lucide-react'

const pillars = [
  {
    icon: Eye,
    title: 'Our Vision',
    body: 'To build a thriving culture of innovation and entrepreneurship among students of CST, CSIT, CSE (Cybersecurity) and CSE (Networks) at IEM Newtown(UEM Kolkata).',
  },
  {
    icon: Target,
    title: 'Our Mission',
    body: 'To identify, mentor and support student-led ideas — from first prototype to a fundable start-up — through workshops, funding guidance and industry mentorship.',
  },
  {
    icon: Sparkles,
    title: 'What We Do',
    body: 'We run hackathons, ideation bootcamps, sponsored research programs, and connect students with incubators, patent filing support and publication guidance.',
  },
]

export default function About() {
  return (
    <>
      <PageBanner
        title="About IEDC"
        subtitle="Innovation and Entrepreneurship Development Center, IEM Newtown(UEM Kolkata)"
      />

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            The Innovation and Entrepreneurship Development Center (IEDC) at IEM Newtown(UEM Kolkata) was
            established in 2024 to give students of CST, CSIT, CSE (Cybersecurity) and CSE
            (Networks) a structured path from idea to impact. We work closely with faculty
            mentors, alumni founders and external industry partners to give every student
            innovator the resources they need.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mb-12">
            The IEDC Lab was established in August 2024 under the leadership of Prof. (Dr.)
            Maumita Chakraborty, HoD, Dept of CST/CSIT/CSE (Cybersecurity)/CSE (Networks).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border border-ocean/15 rounded-xl p-6 shadow-sm">
                <Icon className="text-ocean mb-4" size={28} strokeWidth={1.75} />
                <h3 className="text-ocean-dark font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HodSection />

      <ThrustAreas />
    </>
  )
}
