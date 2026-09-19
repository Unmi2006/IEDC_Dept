import { Target, Eye, Gem } from 'lucide-react'

const values = ['Innovation', 'Collaboration', 'Inclusivity', 'Integrity', 'Impact', 'Continuous Learning']

export default function MissionVisionValues() {
  return (
    <section className="bg-white pb-14 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-2xl bg-sky-50 p-6">
          <Target className="text-brand-blue mb-4" size={28} strokeWidth={1.75} />
          <h3 className="text-navy-900 font-bold text-lg mb-2">Our Mission</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To identify, mentor and support student-led ideas — from first prototype to a
            fundable start-up — through workshops, funding guidance and industry mentorship.
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 p-6">
          <Eye className="text-green-600 mb-4" size={28} strokeWidth={1.75} />
          <h3 className="text-navy-900 font-bold text-lg mb-2">Our Vision</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To build a thriving culture of innovation and entrepreneurship among students of
            CST, CSIT, CSE (Cybersecurity) and CSE (Networks) at IEM Newtown (UEM Kolkata).
          </p>
        </div>

        <div className="rounded-2xl bg-purple-50 p-6">
          <Gem className="text-purple-600 mb-4" size={26} strokeWidth={1.75} />
          <h3 className="text-navy-900 font-bold text-lg mb-2">Our Values</h3>
          <ul className="text-slate-600 text-sm leading-relaxed list-disc pl-4 space-y-0.5">
            {values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
