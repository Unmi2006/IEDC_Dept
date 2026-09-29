import { Link } from 'react-router-dom'
import { faculty } from '../data/faculty'

export default function Leadership() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-2">
          — Faculty
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2">Guiding Our Vision</h2>
        <p className="text-slate-500 text-sm mb-8 max-w-2xl">
          Our leadership provides direction, support and inspiration to help us build a
          thriving innovation ecosystem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((person) => (
            <Link
              key={person.slug}
              to={`/team/${person.slug}`}
              className="flex gap-5 bg-sky-50 rounded-2xl p-5 hover:shadow-md transition-shadow"
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-28 h-32 sm:w-32 sm:h-36 object-cover object-top rounded-xl shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-navy-900 font-bold">{person.name}</h3>
                <p className="text-slate-500 text-xs mt-1">{person.iedcRole}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
