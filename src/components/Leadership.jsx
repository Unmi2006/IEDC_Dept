import { Linkedin, Mail, User } from 'lucide-react'
import hodPhoto from '../assets/maumita-chakraborty.jpg'

export default function Leadership() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-2">
          — Leadership
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2">Guiding Our Vision</h2>
        <p className="text-slate-500 text-sm mb-8 max-w-2xl">
          Our leadership provides direction, support and inspiration to help us build a
          thriving innovation ecosystem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex gap-5 bg-sky-50 rounded-2xl p-5">
            <img
              src={hodPhoto}
              alt="Prof. (Dr.) Maumita Chakraborty"
              className="w-28 h-32 sm:w-32 sm:h-36 object-cover object-[center_18%] rounded-xl shrink-0"
            />
            <div>
              <h3 className="text-navy-900 font-bold">Prof. (Dr.) Maumita Chakraborty</h3>
              <p className="text-slate-500 text-xs mb-2">Head of the Department &amp; IEDC</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                With a strong academic background and a vision for innovation, Prof. (Dr.)
                Maumita Chakraborty leads the department and IEDC with a focus on academic
                excellence, research and student empowerment.
              </p>
              <div className="flex gap-3 mt-3 text-slate-400">
                <a href="#" aria-label="LinkedIn" className="hover:text-brand-blue transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" aria-label="Email" className="hover:text-brand-blue transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-5 bg-sky-50 rounded-2xl p-5">
            <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-xl shrink-0 bg-white border border-brand-blue/15 flex items-center justify-center text-brand-blue">
              <User size={40} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-navy-900 font-bold">Add name</h3>
              <p className="text-slate-500 text-xs mb-2">Faculty Coordinator, IEDC Lab</p>
              <p className="text-slate-400 text-sm leading-relaxed italic">Bio coming soon.</p>
              <div className="flex gap-3 mt-3 text-slate-400">
                <a href="#" aria-label="LinkedIn" className="hover:text-brand-blue transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" aria-label="Email" className="hover:text-brand-blue transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
