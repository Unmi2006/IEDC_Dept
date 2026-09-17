import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Eye,
  EyeOff,
  Lock,
  LogOut,
  Shield,
  User,
  UserCog,
  GraduationCap,
  CheckCircle2,
  ClipboardList,
  Award,
  AlertCircle,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const USER_TYPES = [
  { key: 'Admin', icon: Shield },
  { key: 'Faculty', icon: UserCog },
  { key: 'Student', icon: GraduationCap },
]

export default function LoginCard() {
  const { user, login, logout } = useAuth()
  const [userType, setUserType] = useState('Admin')
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = login(userType, username, password)
    if (!result.success) {
      setError(result.error)
      return
    }
    setError('')
    setUsername('')
    setPassword('')
  }

  if (user) {
    return (
      <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(8,40,86,0.28)] ring-1 ring-blue-900/10 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
            <CheckCircle2 size={22} />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">{user.displayName}</p>
            <p className="text-xs font-medium uppercase tracking-wide text-brand-blue">{user.role}</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-500">You're logged in. Quick access:</p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link
            to="/attendance"
            className="flex min-h-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 py-3 text-xs font-medium text-slate-600 transition-colors hover:border-brand-blue/50 hover:text-brand-blue"
          >
            <ClipboardList size={18} />
            Attendance
          </Link>
          <Link
            to="/certificates"
            className="flex min-h-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 py-3 text-xs font-medium text-slate-600 transition-colors hover:border-brand-blue/50 hover:text-brand-blue"
          >
            <Award size={18} />
            Certificates
          </Link>
        </div>

        <button
          onClick={logout}
          className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={14} />
          Logout
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(8,40,86,0.28)] ring-1 ring-blue-900/10 sm:p-6">
      <h3 className="text-xl font-bold text-slate-900">Login</h3>
      <p className="mt-1 text-sm text-slate-500">Select User Type</p>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {USER_TYPES.map(({ key, icon: Icon }) => {
          const active = userType === key
          return (
            <button
              key={key}
              type="button"
              onClick={() => {
                setUserType(key)
                setError('')
              }}
              className={`flex min-h-11 flex-col items-center gap-1.5 rounded-xl border py-3 text-xs font-medium transition-colors ${
                active
                  ? 'border-brand-blue bg-brand-blue text-white'
                  : 'border-slate-200 text-slate-600 hover:border-brand-blue/50'
              }`}
            >
              <Icon size={18} />
              {key}
            </button>
          )
        })}
      </div>

      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <div className="flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 focus-within:border-brand-blue">
          <User size={16} className="text-slate-400" />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username / Email"
            className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
        <div className="flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 focus-within:border-brand-blue">
          <Lock size={16} className="text-slate-400" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="flex h-8 w-8 shrink-0 items-center justify-center text-slate-400 hover:text-slate-600"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {error && (
          <div className="flex items-start gap-1.5 text-xs font-medium text-red-600">
            <AlertCircle size={14} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          className="mt-2 min-h-11 w-full rounded-xl bg-brand-blue py-3 text-sm font-semibold text-white shadow-md shadow-brand-blue/30 hover:bg-navy-800"
        >
          Login
        </button>
      </form>

      <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-400">
        Demo access — Admin: admin / admin123 · Faculty: faculty / faculty123 · Student: student / student123
      </p>
    </div>
  )
}
