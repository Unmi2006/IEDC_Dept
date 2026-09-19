import campusPhoto from '../assets/uem-campus.jpg'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">
            — Contact Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] text-navy-900">
            Let's Create
            <br />
            <span className="text-brand-blue">Impact Together</span>
          </h1>
          <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-600">
            Have a question, idea or collaboration in mind? We'd love to hear from you. Reach
            out to IEDC Lab at UEM Newtown and be a part of the innovation journey.
          </p>
        </div>

        <div className="relative">
          <img
            src={campusPhoto}
            alt="UEM Newtown campus"
            className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
