import hodPhoto from '../assets/maumita-chakraborty.jpg'

export default function HodSection() {
  return (
    <section id="hod" className="overflow-hidden bg-blue-50/60 py-12 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.7fr_1fr_0.7fr] lg:gap-10">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute left-0 top-0 h-full w-full rounded-2xl bg-ocean/10 sm:-left-3 sm:-top-3" />
          <img
            src={hodPhoto}
            alt="Prof. (Dr.) Maumita Chakraborty"
            className="relative h-64 w-full rounded-2xl object-cover object-[center_18%] shadow-xl sm:h-72"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ocean">
            — From HoD's Desk
          </p>
          <h3 className="mt-3 text-xl font-extrabold text-navy-dark sm:text-2xl">
            Prof. (Dr.) Maumita Chakraborty
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-500">Head of the Department &amp; IEDC</p>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            With a strong academic background and a vision for innovation, Prof. (Dr.) Maumita
            Chakraborty leads the department and IEDC with a focus on academic excellence,
            research, and student empowerment. Her guidance continues to inspire and shape the
            next generation of innovators and leaders.
          </p>
        </div>

        <div className="text-gray-400">
          <span className="text-5xl font-serif text-ocean">&ldquo;</span>
          <p className="-mt-4 text-sm italic leading-relaxed text-gray-600">
            Innovation is not just about creating new things, but about creating better
            tomorrows.
          </p>
          <p className="mt-3 text-right text-xs font-semibold text-gray-500">
            — Prof. (Dr.) Maumita Chakraborty
          </p>
        </div>
      </div>
    </section>
  )
}
