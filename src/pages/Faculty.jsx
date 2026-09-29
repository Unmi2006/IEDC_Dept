import { Link, Navigate, useParams } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { getFaculty } from '../data/faculty'

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100">
      <h2 className="text-xl font-bold text-navy-900 border-b-2 border-amber-400 pb-2 mb-6 inline-block">
        {title}
      </h2>
      {children}
    </div>
  )
}

export default function Faculty() {
  const { slug } = useParams()
  const person = getFaculty(slug)

  if (!person) return <Navigate to="/team" replace />

  return (
    <div className="bg-slate-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto py-5 px-4 sm:px-6">
          <div className="flex items-center text-sm font-medium text-slate-500">
            <Link to="/team" className="hover:text-navy-900 transition">
              Team
            </Link>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-navy-900">{person.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-navy-900 lg:sticky lg:top-6">
              <div className="p-6 text-center">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-48 h-48 mx-auto mb-6 object-cover object-top rounded-full border-4 border-gray-100 shadow-sm"
                />
                <h1 className="text-2xl font-bold text-navy-900 mb-1">{person.name}</h1>
                <p className="text-amber-500 font-semibold uppercase tracking-wide">{person.designation}</p>
                <p className="text-slate-500 text-sm mt-1">{person.iedcRole}</p>

                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-5 flex items-center justify-center gap-2 text-slate-600 bg-slate-50 py-2 px-3 rounded-lg text-sm hover:text-brand-blue transition"
                  >
                    <Mail size={16} className="text-navy-900 shrink-0" />
                    <span className="break-all">{person.email}</span>
                  </a>
                )}

                {person.links.length > 0 && (
                  <div className="mt-4 flex flex-col gap-2">
                    {person.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-brand-blue hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {person.areas.length > 0 && (
              <Section title="Research Areas">
                <div className="flex flex-wrap gap-2">
                  {person.areas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-blue-50 text-navy-900 rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </Section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
