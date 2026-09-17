import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, LogOut } from 'lucide-react'
import iemLogo from '../assets/iem-logo.png'
import uemLogo from '../assets/uem-logo.png'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Team', to: '/team' },
  { label: 'Resources', to: '/resources' },
  { label: 'Internships', to: '/internships' },
  { label: 'Projects', to: '/projects' },
  { label: 'Publication', to: '/publication' },
  { label: 'Notice', to: '/notice' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact-us', to: '/contact' },
]

const authLinks = [
  { label: 'Attendance', to: '/attendance' },
  { label: 'Certificates', to: '/certificates' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth()

  const links = isAuthenticated ? [...navLinks, ...authLinks] : navLinks

  return (
    <header className="bg-white text-ocean-dark sticky top-0 z-50 shadow-sm border-b border-ocean/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2.5">
        {/* IEM logo, left */}
        <Link to="/" className="shrink-0">
          <img src={iemLogo} alt="Institute of Engineering & Management" className="h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-4 text-[14px] font-medium">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `whitespace-nowrap transition-colors ${
                  isActive ? 'text-ocean' : 'text-ocean-dark/80 hover:text-ocean'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {isAuthenticated && (
            <button
              onClick={logout}
              className="flex items-center gap-1.5 whitespace-nowrap text-ocean-dark/80 transition-colors hover:text-red-600"
            >
              <LogOut size={14} />
              Logout
            </button>
          )}
        </nav>

        {/* UEM logo, right */}
        <Link to="/" className="shrink-0 hidden sm:block">
          <img src={uemLogo} alt="University of Engineering & Management" className="h-14 w-auto" />
        </Link>

        {/* Mobile toggle */}
        <button className="xl:hidden text-ocean-dark" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="xl:hidden bg-white border-t border-ocean/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `text-[15px] font-medium ${isActive ? 'text-ocean' : 'text-ocean-dark/80 hover:text-ocean'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {isAuthenticated && (
            <button
              onClick={() => {
                logout()
                setMobileOpen(false)
              }}
              className="flex items-center gap-1.5 text-[15px] font-medium text-ocean-dark/80 hover:text-red-600"
            >
              <LogOut size={15} />
              Logout
            </button>
          )}
        </nav>
      )}
    </header>
  )
}
