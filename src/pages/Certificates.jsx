import PageBanner from '../components/PageBanner'
import { useAuth } from '../context/AuthContext'
import { Award, Download, Lock } from 'lucide-react'

const STUDENT_CERTIFICATES = [
  { title: 'IEDC Membership Certificate', issued: 'Add date', status: 'Available' },
  { title: 'Prototyping Workshop — Participation', issued: 'Add date', status: 'Available' },
  { title: 'Hackathon 2026 — Certificate of Merit', issued: 'Pending', status: 'Pending' },
]

const MANAGE_CERTIFICATES = [
  { title: 'Add certificate name', issuedTo: 'Add recipient', status: 'Add status' },
  { title: 'Add certificate name', issuedTo: 'Add recipient', status: 'Add status' },
]

function StudentView() {
  return (
    <div className="space-y-4">
      {STUDENT_CERTIFICATES.map((c) => {
        const available = c.status === 'Available'
        return (
          <div
            key={c.title}
            className="flex flex-col gap-3 rounded-xl border border-ocean/15 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <Award className="mt-0.5 shrink-0 text-ocean" size={22} />
              <div>
                <h3 className="font-semibold text-ocean-dark">{c.title}</h3>
                <p className="text-sm text-gray-500">Issued: {c.issued}</p>
              </div>
            </div>
            <button
              disabled={!available}
              className={`flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors ${
                available
                  ? 'bg-brand-blue text-white hover:bg-navy-800'
                  : 'cursor-not-allowed bg-gray-100 text-gray-400'
              }`}
            >
              {available ? <Download size={15} /> : <Lock size={15} />}
              {available ? 'Download' : 'Pending'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

function ManageView() {
  return (
    <div className="overflow-hidden rounded-xl border border-ocean/15 shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-ocean/5 text-xs font-semibold uppercase tracking-wide text-ocean-dark">
          <tr>
            <th className="px-5 py-3">Certificate</th>
            <th className="px-5 py-3">Issued To</th>
            <th className="px-5 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ocean/10">
          {MANAGE_CERTIFICATES.map((c, i) => (
            <tr key={i}>
              <td className="px-5 py-3.5 font-medium text-ocean-dark">{c.title}</td>
              <td className="px-5 py-3.5 text-gray-600">{c.issuedTo}</td>
              <td className="px-5 py-3.5 text-gray-600">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Certificates() {
  const { user } = useAuth()
  const isStudent = user?.role === 'Student'

  return (
    <>
      <PageBanner
        title="Certificates"
        subtitle={isStudent ? 'Certificates issued to you by IEDC' : 'Manage IEDC-issued certificates'}
      />

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 flex items-center gap-3">
            <Award className="text-ocean" size={26} />
            <h2 className="text-2xl font-bold text-ocean-dark">
              {isStudent ? `Welcome, ${user.displayName}` : `${user?.role} view`}
            </h2>
          </div>

          {isStudent ? <StudentView /> : <ManageView />}

          <p className="mt-8 text-center text-sm text-gray-500">
            These are placeholders — real certificate files and issuance data can be wired in later.
          </p>
        </div>
      </section>
    </>
  )
}
