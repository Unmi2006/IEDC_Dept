import PageBanner from '../components/PageBanner'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" subtitle="Get in touch with the IEDC team" />

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-ocean-dark mb-6">Reach Us</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-ocean shrink-0 mt-1" size={20} />
                <span className="text-gray-700">
                  University of Engineering & Management, Newtown, Kolkata, West Bengal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-ocean shrink-0" size={20} />
                <a href="mailto:iedclab.cstcsit@iem.edu.in" className="text-gray-700 hover:text-ocean">
                  iedclab.cstcsit@iem.edu.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-ocean shrink-0" size={20} />
                <span className="text-gray-700">Add contact number</span>
              </li>
            </ul>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div>
              <label className="block text-sm font-medium text-ocean-dark mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full border border-ocean/20 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ocean/40"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ocean-dark mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full border border-ocean/20 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ocean/40"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ocean-dark mb-1">Message</label>
              <textarea
                rows={4}
                required
                className="w-full border border-ocean/20 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ocean/40"
              />
            </div>
            <button
              type="submit"
              className="bg-ocean text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-ocean-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
