import { Car, BrainCircuit, Activity, Boxes, ShieldCheck, PlaneTakeoff, Cpu, Wifi, Bot } from 'lucide-react'

const areas = [
  { icon: Car, label: 'ADAS', color: 'bg-ocean text-white' },
  { icon: BrainCircuit, label: 'AI & ML', color: 'bg-emerald-600 text-white' },
  { icon: Activity, label: 'BCI Systems', color: 'bg-ocean text-white' },
  { icon: Boxes, label: 'Blockchain Technology', color: 'bg-emerald-600 text-white' },
  { icon: ShieldCheck, label: 'Cybersecurity', color: 'bg-ocean text-white' },
  { icon: PlaneTakeoff, label: 'Drone Technology', color: 'bg-emerald-600 text-white' },
  { icon: Cpu, label: 'High Performance Computing', color: 'bg-ocean text-white' },
  { icon: Wifi, label: 'IoT', color: 'bg-emerald-600 text-white' },
  { icon: Bot, label: 'Robotics', color: 'bg-ocean text-white' },
]

export default function ThrustAreas() {
  return (
    <section className="bg-ocean/5 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-ocean-dark text-center mb-2">
          Thrust Areas
        </h2>
        <p className="text-gray-600 text-center mb-10">
          The technology domains our students explore and build in
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-4 bg-white border border-ocean/15 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
                <Icon size={22} strokeWidth={2} />
              </span>
              <span className="font-semibold text-ocean-dark">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
