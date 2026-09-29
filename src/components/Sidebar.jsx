import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  Home,
  Users,
  Folder,
  GraduationCap,
  Lightbulb,
  FileText,
  ScrollText,
  Bell,
  Image as ImageIcon,
  Phone,
  ClipboardCheck,
  Award,
  LogOut,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'
import iemLogo from '../assets/iem-logo.png'
import iedcLogo from '../assets/iedc-logo.png'
import { useAuth } from '../context/AuthContext'
import './Sidebar.css'

const ANIMATION_MS = 320

const navLinks = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About Us', to: '/about', icon: Users },
  { label: 'Team', to: '/team', icon: Folder },
  { label: 'Resources', to: '/resources', icon: GraduationCap },
  { label: 'Internships', to: '/internships', icon: Lightbulb },
  { label: 'Projects', to: '/projects', icon: FileText },
  { label: 'Publication', to: '/publication', icon: ScrollText },
  { label: 'Notice', to: '/notice', icon: Bell },
  { label: 'Gallery', to: '/gallery', icon: ImageIcon },
  { label: 'Contact Us', to: '/contact', icon: Phone },
]

const authLinks = [
  { label: 'Attendance', to: '/attendance', icon: ClipboardCheck },
  { label: 'Certificates', to: '/certificates', icon: Award },
]

const itemBase =
  'group flex h-10 w-full items-center overflow-hidden rounded-xl text-[14px] font-medium transition-colors duration-200'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  // collapsed -> expanding -> expanded -> collapsing -> collapsed
  const [phase, setPhase] = useState('collapsed')
  const [tip, setTip] = useState(null) // { label, top, left }
  const timer = useRef(null)
  const { isAuthenticated, logout } = useAuth()

  // Hover / keyboard-focus tooltip for the icon-only (collapsed) rail
  const showTip = (label) => (e) => {
    if (open) return
    const r = e.currentTarget.getBoundingClientRect()
    setTip({ label, top: r.top + r.height / 2, left: r.right + 12 })
  }
  const hideTip = () => setTip(null)
  const tipProps = (label) => ({
    onMouseEnter: showTip(label),
    onMouseLeave: hideTip,
    onFocus: showTip(label),
    onBlur: hideTip,
  })

  const links = isAuthenticated ? [...navLinks, ...authLinks] : navLinks

  const setSidebar = useCallback((nextOpen) => {
    clearTimeout(timer.current)
    setTip(null)
    setOpen(nextOpen)
    setPhase(nextOpen ? 'expanding' : 'collapsing')
    timer.current = setTimeout(() => {
      setPhase(nextOpen ? 'expanded' : 'collapsed')
    }, ANIMATION_MS)
  }, [])

  const toggle = () => setSidebar(!open)

  // cleanup pending timer on unmount
  useEffect(() => () => clearTimeout(timer.current), [])

  // Escape closes the sidebar
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setSidebar(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, setSidebar])

  const closeAfterNavigate = () => {
    if (open) setSidebar(false)
  }

  return (
    <>
      {/* click-away layer (only while expanded) */}
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setSidebar(false)}
          className="fixed inset-0 z-40 cursor-default bg-[#061833]/25 backdrop-blur-[1px] md:bg-transparent md:backdrop-blur-none"
        />
      )}

      <aside
        className={`iedc-sidebar fixed inset-y-0 left-0 z-50 flex flex-col rounded-r-[28px] border-r border-slate-200/70 bg-white px-2 pb-3 pt-3 md:px-3 ${
          open ? 'w-56' : 'w-14 md:w-16'
        }`}
        data-open={open}
        data-phase={phase}
        aria-label="Main navigation"
      >
        <span className="iedc-sidebar__glow rounded-r-[28px]" aria-hidden="true" />

        {/* Brand (visible when expanded) */}
        <Link
          to="/"
          onClick={closeAfterNavigate}
          tabIndex={open ? 0 : -1}
          aria-hidden={!open}
          className="iedc-sidebar__brand flex flex-col items-center gap-1 px-2"
        >
          <img src={iemLogo} alt="Institute of Engineering & Management" className="mt-1 h-14 w-auto object-contain" />
          <img
            src={iedcLogo}
            alt="Innovation and Entrepreneurship Development Cell"
            className="mb-3 h-11 w-auto max-w-[150px] object-contain"
          />
        </Link>

        {/* Links */}
        <nav
          onScroll={hideTip}
          className="iedc-sidebar__nav flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overflow-x-hidden py-1"
        >
          {links.map(({ label, to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              {...tipProps(label)}
              onClick={closeAfterNavigate}
              className={({ isActive }) =>
                `${itemBase} ${
                  isActive
                    ? 'bg-[#0d56d8] text-white shadow-md shadow-[#0d56d8]/35'
                    : 'text-[#12284a] hover:bg-[#0d56d8]/10 hover:text-[#0d56d8]'
                }`
              }
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                <Icon size={19} strokeWidth={1.9} />
              </span>
              <span className="iedc-sidebar__label whitespace-nowrap pr-3">{label}</span>
            </NavLink>
          ))}

          {isAuthenticated && (
            <button
              type="button"
              onClick={() => {
                logout()
                closeAfterNavigate()
              }}
              {...tipProps('Logout')}
              className={`${itemBase} text-[#12284a] hover:bg-red-50 hover:text-red-600`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                <LogOut size={19} strokeWidth={1.9} />
              </span>
              <span className="iedc-sidebar__label whitespace-nowrap pr-3">Logout</span>
            </button>
          )}
        </nav>

        {/* Toggle */}
        <div className="mt-2 border-t border-slate-200 pt-3">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
            {...tipProps('Expand')}
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#0d56d8]/10 text-[#0d56d8] transition-colors hover:bg-[#0d56d8] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d56d8]/60"
          >
            {open ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
          </button>
        </div>
      </aside>

      {/* Tooltip with the full name (collapsed state only) */}
      {tip && !open && (
        <div
          role="tooltip"
          className="iedc-sidebar__tip"
          style={{ top: tip.top, left: tip.left }}
        >
          {tip.label}
        </div>
      )}
    </>
  )
}
