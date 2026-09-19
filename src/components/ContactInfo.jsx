import { MapPin, Mail, Clock, ExternalLink } from 'lucide-react'

const UEM_NEWTOWN_ADDRESS =
  'University Area, Plot No. III-B/5, New Town, Action Area III, Kolkata – 700160, West Bengal, India'
const UEM_NEWTOWN_LAT = 22.560524
const UEM_NEWTOWN_LNG = 88.488148
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${UEM_NEWTOWN_LAT},${UEM_NEWTOWN_LNG}`
const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=University+of+Engineering+%26+Management+Newtown+Kolkata&ll=${UEM_NEWTOWN_LAT},${UEM_NEWTOWN_LNG}&z=16&output=embed`

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 mb-1">Get in Touch</h2>
        <p className="text-slate-500 text-sm mb-5">Here are the different ways you can reach us.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-xl p-4">
            <MapPin className="text-brand-blue mb-2" size={20} />
            <h3 className="text-navy-900 font-bold text-sm mb-1">Our Location</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              IEDC Lab, University of Engineering &amp; Management, UEM Newtown Campus,{' '}
              {UEM_NEWTOWN_ADDRESS}
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-4">
            <Mail className="text-brand-blue mb-2" size={20} />
            <h3 className="text-navy-900 font-bold text-sm mb-1">Email Us</h3>
            <a
              href="mailto:iedclab.cstcsit@iem.edu.in"
              className="text-slate-500 text-xs leading-relaxed hover:text-brand-blue break-all"
            >
              iedclab.cstcsit@iem.edu.in
            </a>
          </div>

          <div className="border border-slate-200 rounded-xl p-4 sm:col-span-2">
            <Clock className="text-brand-blue mb-2" size={20} />
            <h3 className="text-navy-900 font-bold text-sm mb-1">Working Hours</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Add working hours</p>
          </div>
        </div>
      </div>

      <div className="border border-slate-200 rounded-xl p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-navy-900 font-bold text-lg">Find Us</h3>
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue border border-brand-blue rounded-full px-3 py-1.5 hover:bg-brand-blue hover:text-white transition-colors"
          >
            <ExternalLink size={12} />
            Open in Google Maps
          </a>
        </div>
        <p className="text-slate-500 text-xs mb-3">Locate us on the map and visit our campus.</p>
        <div className="rounded-lg overflow-hidden border border-slate-200">
          <iframe
            title="UEM Newtown location map"
            src={GOOGLE_MAPS_EMBED}
            width="100%"
            height="260"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
