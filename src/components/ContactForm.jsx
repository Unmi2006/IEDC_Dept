import { useState } from 'react'
import { Send, User, Mail, Phone, FileText, MessageSquare, ArrowRight } from 'lucide-react'

const fieldClass =
  'flex items-center gap-2.5 border border-slate-200 rounded-xl px-4 py-3 focus-within:border-brand-blue transition-colors'
const inputClass = 'w-full text-sm text-slate-700 outline-none placeholder:text-slate-400 bg-transparent'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="bg-sky-50 rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-1">
        <Send className="text-brand-blue" size={22} />
        <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900">Send Us a Message</h2>
      </div>
      <p className="text-slate-500 text-sm mb-6">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      {submitted ? (
        <p className="text-brand-blue font-semibold text-sm py-6">
          Thanks — your message has been noted. We'll get back to you soon.
        </p>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={fieldClass}>
              <User size={16} className="text-slate-400 shrink-0" />
              <input required placeholder="Your Name *" className={inputClass} />
            </div>
            <div className={fieldClass}>
              <Mail size={16} className="text-slate-400 shrink-0" />
              <input required type="email" placeholder="Your Email *" className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={fieldClass}>
              <Phone size={16} className="text-slate-400 shrink-0" />
              <input placeholder="Phone Number" className={inputClass} />
            </div>
            <div className={fieldClass}>
              <FileText size={16} className="text-slate-400 shrink-0" />
              <input required placeholder="Subject *" className={inputClass} />
            </div>
          </div>

          <div className={`${fieldClass} items-start`}>
            <MessageSquare size={16} className="text-slate-400 shrink-0 mt-1" />
            <textarea required rows={5} placeholder="Your Message *" className={`${inputClass} resize-none`} />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 min-h-11 bg-brand-blue text-white font-semibold rounded-xl py-3 hover:bg-navy-800 transition-colors"
          >
            <Send size={16} />
            Send Message
            <ArrowRight size={16} />
          </button>
        </form>
      )}
    </div>
  )
}
