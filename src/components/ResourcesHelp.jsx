import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Headphones, HelpCircle, ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  { q: 'Are the resources free for all students?', a: 'Yes, all resources listed here are free for students of the department.' },
  { q: 'Can I contribute a resource to this section?', a: 'Reach out to the IEDC team via the Contact page to suggest a resource.' },
  { q: 'How do I access premium tools or datasets?', a: 'Details on premium access will be added here once available.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-navy-900"
      >
        {q}
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="px-4 pb-3 text-sm text-slate-500">{a}</p>}
    </div>
  )
}

export default function ResourcesHelp() {
  return (
    <section className="bg-white pb-14 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-sky-50 rounded-2xl p-6">
          <Headphones className="text-brand-blue mb-3" size={26} />
          <h3 className="text-navy-900 font-bold text-lg mb-1">Need Help?</h3>
          <p className="text-slate-600 text-sm mb-4">
            Can't find what you're looking for? Reach out to us and we'll help you find the
            right resources.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue px-5 py-2.5 text-sm font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="bg-sky-50 rounded-2xl p-6">
          <HelpCircle className="text-brand-blue mb-3" size={26} />
          <h3 className="text-navy-900 font-bold text-lg mb-1">Frequently Asked Questions</h3>
          <p className="text-slate-600 text-sm mb-4">Quick answers to common queries.</p>
          <div className="space-y-2">
            {faqs.map((f) => (
              <FaqItem key={f.q} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
