import PageBanner from '../components/PageBanner'
import { Briefcase, CalendarClock, GraduationCap, CheckCircle2 } from 'lucide-react'

const highlights = [
  { icon: CalendarClock, label: 'Duration', value: '4–6 Weeks' },
  { icon: GraduationCap, label: 'Eligibility', value: 'CST / CSIT / CSE (Cybersecurity) / CSE (Networks)' },
  { icon: Briefcase, label: 'Mode', value: 'On-campus, IEDC Lab' },
]

const perks = [
  'Hands-on project under faculty & industry mentors',
  'Certificate of completion from IEDC, IEM Newtown(UEM Kolkata)',
  'Letter of recommendation for top performers',
  'Opportunity to convert internship work into a publication or patent',
]

export default function Internships() {
  return (
    <>
      <PageBanner
        title="Internships"
        subtitle="Winter & Summer internship programs run by IEDC, IEM Newtown(UEM Kolkata)"
      />

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-gray-700 leading-relaxed text-lg mb-10">
            IEDC Lab runs structured internship programs for students of CST, CSIT, CSE
            (Cybersecurity) and CSE (Networks), giving them a chance to work on real,
            faculty-guided projects in AI/ML, IoT, Cybersecurity, Robotics and more.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="border border-ocean/15 rounded-xl p-6 text-center shadow-sm">
                <Icon className="text-ocean mx-auto mb-3" size={28} strokeWidth={1.75} />
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">{label}</p>
                <p className="text-ocean-dark font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-ocean-dark mb-6">What You Get</h2>
          <ul className="space-y-3 mb-12">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <CheckCircle2 className="text-ocean shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">{perk}</span>
              </li>
            ))}
          </ul>

          <div className="bg-ocean/5 border border-ocean/15 rounded-xl p-6">
            <h3 className="text-ocean-dark font-bold mb-2">How to Apply</h3>
            <p className="text-gray-600 text-sm">
              Applications open at the start of each semester. Watch the{' '}
              <a href="/notice" className="text-ocean font-medium hover:underline">
                Notice
              </a>{' '}
              page for the next intake, or write to{' '}
              <a href="mailto:iedclab.cstcsit@iem.edu.in" className="text-ocean font-medium hover:underline">
                iedclab.cstcsit@iem.edu.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
