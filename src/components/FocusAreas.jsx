import { Bot, Cpu, BrainCircuit, Rocket, PersonStanding } from 'lucide-react'

const AREAS = [
  {
    icon: Bot,
    title: 'Drone Technology',
    desc: 'Exploring the skies of innovation',
    bg: 'bg-sky-50',
    fg: 'text-brand-blue',
  },
  {
    icon: Cpu,
    title: 'IoT & Embedded Systems',
    desc: 'Connecting devices, creating possibilities',
    bg: 'bg-green-50',
    fg: 'text-green-600',
  },
  {
    icon: BrainCircuit,
    title: 'AI / Machine Learning',
    desc: 'Learning today, leading tomorrow',
    bg: 'bg-purple-50',
    fg: 'text-purple-600',
  },
  {
    icon: PersonStanding,
    title: 'Robotics',
    desc: 'Building intelligent solutions',
    bg: 'bg-orange-50',
    fg: 'text-orange-500',
  },
  {
    icon: Rocket,
    title: 'Startups & Incubation',
    desc: 'From ideas to impact',
    bg: 'bg-cyan-50',
    fg: 'text-cyan-600',
  },
]

export default function FocusAreas() {
  return (
    <section id="activities" className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          — Our Focus Areas
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-navy-900 sm:text-4xl">
          Where Ideas Take Shape
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {AREAS.map(({ icon: Icon, title, desc, bg, fg }) => (
            <div
              key={title}
              className={`rounded-2xl ${bg} p-6 text-center transition-transform hover:-translate-y-1`}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center">
                <Icon size={30} className={fg} />
              </div>
              <h3 className="mt-4 text-sm font-bold text-navy-900">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
