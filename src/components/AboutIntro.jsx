export default function AboutIntro() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">
            — Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-navy-900">
            Turning Ideas into
            <br />
            Real-World Solutions
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600">
            The Innovation and Entrepreneurship Development Center (IEDC) at IEM Newtown (UEM
            Kolkata) was established in 2024 to give students of CST, CSIT, CSE (Cybersecurity)
            and CSE (Networks) a structured path from idea to impact. We work closely with
            faculty mentors, alumni founders and external industry partners to give every
            student innovator the resources they need.
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
            Visit our department website:{' '}
            <a
              href="https://csit.uem.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue font-semibold hover:underline"
            >
              csit.uem.edu.in
            </a>
          </p>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-0 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="Idea Plan Develop Launch Grow workspace"
            className="h-64 sm:h-72 w-full object-cover"
          />
          <div className="hidden sm:flex flex-col justify-center bg-slate-50 p-6 max-w-[220px]">
            <p className="text-brand-blue font-bold text-lg leading-tight">
              A Platform for Changemakers
            </p>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              From ideas to impact, IEDC Lab supports you at every step of your entrepreneurial
              journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
