import { Link } from 'react-router-dom'
import { Info, Users, Calendar, Rocket, Image, Mail, TrendingUp } from 'lucide-react'

const links = [
  {
    icon: Info,
    title: 'About Us',
    desc: 'Learn about our vision, mission and objectives',
    to: '/about',
  },
  {
    icon: Users,
    title: 'Team',
    desc: 'Meet our leadership team',
    to: '/team',
  },
  {
    icon: Calendar,
    title: 'Events',
    desc: 'Bengal E-Summit 2024 and upcoming events',
    to: '/events',
  },
  {
    icon: Rocket,
    title: 'Start-ups',
    desc: "Companies we've incubated",
    to: '/innovation-research#start-ups',
  },
  {
    icon: Image,
    title: 'Gallery',
    desc: 'Our activities and events',
    to: '/gallery',
  },
  {
    icon: Mail,
    title: 'Contact',
    desc: 'Get in touch with us',
    to: '/contact',
  },
  {
    icon: TrendingUp,
    title: 'Innovation & Research',
    desc: 'Patents, grants, publications and projects',
    to: '/innovation-research',
  },
]

export default function QuickLinks() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ocean-dark text-center mb-12">
          Quick Links
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map(({ icon: Icon, title, desc, to }) => (
            <Link
              key={title}
              to={to}
              className="bg-white border border-ocean/15 rounded-xl p-6 shadow-sm hover:border-ocean/50 hover:shadow-md transition-all"
            >
              <Icon className="text-ocean mb-4" size={30} strokeWidth={1.75} />
              <h3 className="text-ocean-dark font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
