import InternshipsHero from '../components/InternshipsHero'
import { Briefcase, CalendarClock, GraduationCap, CheckCircle2, ClipboardList, ExternalLink} from 'lucide-react'

const highlights = [
  { icon: CalendarClock, label: 'Duration', value: '4–6 Weeks(Tentative)' },
  { icon: CalendarClock, label: 'Start Date', value: 'TBD' },
  { icon: GraduationCap, label: 'Eligibility', value: 'Any Stream/Any Year/Any Collage' },
  { icon: Briefcase, label: 'Mode', value: 'IEM Newtown, CST-CSIT IEDC Lab' },
]

const perks = [
  'Hands-on project under faculty & industry mentors',
  'Certificate of completion from IEDC, IEM Newtown(UEM Kolkata)',
  'Letter of recommendation for top performers',
  'Opportunity to convert internship work into a publication or patent',
]
const areas = [
  'ADAS',
  'Artificial Intelligence & Machine Learning',
  'BCI Systems',
  'Blockchain Technology',
  'Cybersecurity',
  'Drone Technology',
  'High Performance Computing',
  'Internet of Things (IoT)',
  'Robotics'
]

export default function Internships() {
  return (
    <>
      <InternshipsHero />

      <section id="internship-details" className="bg-white py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-600">
            <span className="bg-yellow-200 px-2 py-1 rounded-md box-decoration-clone">
               Application For Winter Internship 2026-27 Is Open
            </span>
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg mb-10">
            IEDC Lab runs structured internship programs for students of CST, CSIT, CSE
            (Cybersecurity) and CSE (Networks), giving them a chance to work on real,
            faculty-guided projects in AI/ML, IoT, Cybersecurity, Robotics and more.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12">
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
          <section className="mb-12">
  <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">

    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-ocean-dark mb-2">
        Internship Thrust Areas
      </h2>
      <p className="text-gray-600">
        Explore the key research and technology domains covered under our
        winter internship programme.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {areas.map((area) => (
        <div
          key={area}
          className="flex items-center gap-3 bg-white border border-gray-200
          rounded-xl p-4 shadow-sm hover:shadow-md hover:border-ocean
          transition-all duration-300 group"
        >
          <CheckCircle2
            className="text-ocean shrink-0 group-hover:text-ocean-dark"
            size={22}
          />

          <span className="font-semibold text-gray-800 text-sm md:text-base">
            {area}
          </span>
        </div>
      ))}
    </div>

  </div>
</section>

          
<div className="bg-gradient-to-br from-ocean/5 to-white border border-ocean/20 rounded-2xl p-6 md:p-8 shadow-sm">

  {/* Heading */}
  <div className="mb-6">
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-ocean/10 p-3 rounded-xl">
        <ClipboardList className="text-ocean" size={24} />
      </div>
      <h3 className="text-xl md:text-2xl text-ocean-dark font-bold">
        How to Apply
      </h3>
    </div>

    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
      Interested in joining our Winter Internship Programme? Choose the
      appropriate application form below and submit your details.
      For any queries, contact us at{" "}
      <a
        href="mailto:iedclab.cstcsit@iem.edu.in"
        className="text-ocean font-semibold hover:underline"
      >
        iedclab.cstcsit@iem.edu.in
      </a>.
    </p>
  </div>

  {/* Application Options */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* IEM Students */}
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-ocean/50 hover:shadow-md transition-all duration-300">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-ocean">
          Application 01
        </span>
        <h4 className="text-lg font-bold text-ocean-dark mt-2">
          IEM Students
        </h4>
        <p className="text-sm text-gray-500 mt-1">
          For students currently enrolled at IEM.
        </p>
      </div>

      <a
        href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=U53vQTHLQEulXQiTM0pAWYjF_hhWKjdDsJVf23slZ21UOEJQVU9NNzk0UEg1Nk1OU1ROWDNNTTI5SC4u&route=shorturl"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-ocean text-white font-semibold py-3 px-4 rounded-lg hover:bg-ocean-dark transition-colors"
      >
        Apply Now
        <ExternalLink size={16} />
      </a>
    </div>

    {/* Other College Students */}
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-ocean/50 hover:shadow-md transition-all duration-300">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-ocean">
          Application 02
        </span>
        <h4 className="text-lg font-bold text-ocean-dark mt-2">
          Other College Students
        </h4>
        <p className="text-sm text-gray-500 mt-1">
          For students from institutions other than IEM.
        </p>
      </div>

      <a
        href="https://forms.gle/6uSgUg8JDqkRVAAH7"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-ocean text-white font-semibold py-3 px-4 rounded-lg hover:bg-ocean-dark transition-colors"
      >
        Apply Now
        <ExternalLink size={16} />
      </a>
    </div>

  </div>

  {/* Contact Footer */}
  <div className="mt-6 pt-5 border-t border-ocean/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <p className="text-sm text-gray-500">
      Need assistance with your application?
    </p>
    <a
      href="mailto:iedclab.cstcsit@iem.edu.in"
      className="text-sm font-semibold text-ocean hover:underline"
    >
      Contact IEDC Lab →
    </a>
  </div>

</div>

        </div>
      </section>
    </>
  )
}
