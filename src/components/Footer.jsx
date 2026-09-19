import { Link } from 'react-router-dom'
import { Twitter, Facebook, Linkedin } from 'lucide-react'
import iedcLogo from '../assets/iedc-logo.jpeg'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Team', to: '/team' },
  { label: 'Resources', to: '/resources' },
  { label: 'Internships', to: '/internships' },
]

const researchLinksLeft = [
  { label: 'Projects', to: '/projects' },
  { label: 'Publication', to: '/publication' },
]

const researchLinksRight = [
  { label: 'Notice', to: '/notice' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact-us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-ocean/10 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={iedcLogo} alt="IEDC Logo" className="h-10 w-10 rounded-full object-contain bg-white border border-ocean/15 p-0.5" />
            <div>
              <p className="text-ocean-dark font-bold leading-tight">IEDC</p>
              <p className="text-gray-500 text-sm leading-tight">IEM Newtown(UEM Kolkata)</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            Innovation and Entrepreneurship Development Center for CST, CSIT, CSE (Cybersecurity)
            and CSE (Networks) at IEM Newtown(UEM Kolkata), fostering innovation and entrepreneurship since 2024.
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            <a href="#" aria-label="Twitter" className="hover:text-ocean transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-ocean transition-colors">
              <Facebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/uemkcstcsit-iedc/posts/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-ocean transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-ocean-dark font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="text-gray-600 hover:text-ocean text-sm transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-ocean-dark font-bold mb-4">More Links</h4>
          <div className="grid grid-cols-2 gap-x-6">
            <ul className="space-y-2">
              {researchLinksLeft.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-gray-600 hover:text-ocean text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {researchLinksRight.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-gray-600 hover:text-ocean text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-ocean/10 my-8" />
        <p className="text-center text-gray-500 text-sm">
          Developed by <a href="#" className="text-ocean hover:underline">Sujaan</a> &{' '}
          <a href="#" className="text-ocean hover:underline">Sanket</a>
        </p>
      </div>
    </footer>
  )
}
