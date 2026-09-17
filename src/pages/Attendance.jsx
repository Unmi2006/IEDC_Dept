import PageBanner from '../components/PageBanner'
import { useAuth } from '../context/AuthContext'
import { CalendarCheck, CheckCircle2, XCircle, Clock } from 'lucide-react'

const STUDENT_RECORDS = [
  { date: '02 Sep 2026', session: 'IEDC Weekly Meetup', status: 'Present' },
  { date: '09 Sep 2026', session: 'Prototyping Workshop', status: 'Present' },
  { date: '11 Sep 2026', session: 'Guest Talk — Startup Funding', status: 'Absent' },
  { date: '15 Sep 2026', session: 'Hackathon Prep Session', status: 'Present' },
]

const OVERVIEW_RECORDS = [
  { name: 'Add student name', roll: 'Add roll no.', sessionsAttended: 0, totalSessions: 0 },
  { name: 'Add student name', roll: 'Add roll no.', sessionsAttended: 0, totalSessions: 0 },
  { name: 'Add student name', roll: 'Add roll no.', sessionsAttended: 0, totalSessions: 0 },
]

function StatusBadge({ status }) {
  const isPresent = status === 'Present'
  const Icon = isPresent ? CheckCircle2 : XCircle
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
        isPresent ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
      }`}
    >
      <Icon size={13} />
      {status}
    </span>
  )
}

function StudentView() {
  const present = STUDENT_RECORDS.filter((r) => r.status === 'Present').length
  const total = STUDENT_RECORDS.length
  const percent = Math.round((present / total) * 100)

  return (
    <>
      <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-ocean/15 p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Sessions Attended</p>
          <p className="mt-2 text-3xl font-extrabold text-ocean-dark">{present}</p>
        </div>
        <div className="rounded-xl border border-ocean/15 p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Total Sessions</p>
          <p className="mt-2 text-3xl font-extrabold text-ocean-dark">{total}</p>
        </div>
        <div className="rounded-xl border border-ocean/15 p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Attendance</p>
          <p className="mt-2 text-3xl font-extrabold text-brand-blue">{percent}%</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-ocean/15 shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-ocean/5 text-xs font-semibold uppercase tracking-wide text-ocean-dark">
            <tr>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Session</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ocean/10">
            {STUDENT_RECORDS.map((r) => (
              <tr key={r.date + r.session}>
                <td className="px-5 py-3.5 text-gray-600">{r.date}</td>
                <td className="px-5 py-3.5 font-medium text-ocean-dark">{r.session}</td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={r.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function OverviewView() {
  return (
    <div className="overflow-hidden rounded-xl border border-ocean/15 shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-ocean/5 text-xs font-semibold uppercase tracking-wide text-ocean-dark">
          <tr>
            <th className="px-5 py-3">Student</th>
            <th className="px-5 py-3">Roll No.</th>
            <th className="px-5 py-3">Sessions Attended</th>
            <th className="px-5 py-3">Attendance</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ocean/10">
          {OVERVIEW_RECORDS.map((r, i) => (
            <tr key={i}>
              <td className="px-5 py-3.5 font-medium text-ocean-dark">{r.name}</td>
              <td className="px-5 py-3.5 text-gray-600">{r.roll}</td>
              <td className="px-5 py-3.5 text-gray-600">
                {r.sessionsAttended} / {r.totalSessions}
              </td>
              <td className="px-5 py-3.5 text-gray-400">—</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Attendance() {
  const { user } = useAuth()
  const isStudent = user?.role === 'Student'

  return (
    <>
      <PageBanner
        title="Attendance"
        subtitle={isStudent ? 'Your session attendance record' : 'Attendance overview for IEDC sessions'}
      />

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 flex items-center gap-3">
            <CalendarCheck className="text-ocean" size={26} />
            <h2 className="text-2xl font-bold text-ocean-dark">
              {isStudent ? `Welcome, ${user.displayName}` : `${user?.role} view`}
            </h2>
          </div>

          {isStudent ? <StudentView /> : <OverviewView />}

          <p className="mt-8 flex items-center gap-2 text-center text-sm text-gray-500">
            <Clock size={14} className="shrink-0" />
            This data is a placeholder — connect it to real attendance records once available.
          </p>
        </div>
      </section>
    </>
  )
}
