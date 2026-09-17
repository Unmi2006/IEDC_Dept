import { Lightbulb, Users, Rocket, ArrowRight } from 'lucide-react'
import LoginCard from './LoginCard'
import campusHero from '../assets/uem-campus.jpg'
import campusHeroMobile from '../assets/uem-campus-mobile.jpg'

const FEATURES = [
  { icon: Lightbulb, title: 'Learn', subtitle: 'Innovate' },
  { icon: Users, title: 'Collaborate', subtitle: 'Build' },
  { icon: Rocket, title: 'Create', subtitle: 'Impact' },
]

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100dvh-64px)] overflow-hidden sm:min-h-[calc(100dvh-73px)]">
      <div
        className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url(${campusHeroMobile})`,
          filter: 'saturate(1.12) contrast(1.05) brightness(0.96)',
        }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-[center_42%] bg-no-repeat md:block"
        style={{
          backgroundImage: `url(${campusHero})`,
          filter: 'saturate(1.12) contrast(1.05) brightness(0.96)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: [
            'linear-gradient(90deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 34%, transparent 52%)',
            'linear-gradient(180deg, rgba(56,140,220,0.22) 0%, transparent 28%)',
          ].join(','),
        }}
      />

      <div className="relative z-10 min-h-[calc(100dvh-64px)] w-full sm:min-h-[calc(100dvh-73px)]">
        <div className="flex min-h-[calc(100dvh-64px)] w-full flex-col justify-center gap-6 px-3 py-5 sm:min-h-[calc(100dvh-73px)] sm:px-4 lg:absolute lg:inset-x-5 lg:top-1/2 lg:min-h-0 lg:w-auto lg:-translate-y-1/2 lg:flex-row lg:items-start lg:justify-between lg:px-0 lg:py-0 xl:inset-x-6">
          <div className="relative w-full max-w-[560px] shrink-0 rounded-2xl border border-white/50 bg-white/35 p-5 shadow-[0_20px_50px_rgba(8,40,86,0.28)] ring-1 ring-white/40 backdrop-blur-2xl sm:p-7 lg:max-w-[520px]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/55 via-white/10 to-sky-200/20" />
              <div className="absolute -left-10 -top-16 h-40 w-56 rotate-12 bg-white/40 blur-2xl" />
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-blue sm:text-[11px] sm:tracking-[0.22em]">
                — Innovation | Entrepreneurship | Development
              </p>
              <h1 className="mt-3 text-[32px] font-extrabold leading-[1.08] tracking-tight text-[#061833] sm:text-5xl lg:text-[62px]">
                Welcome to
                <br />
                <span className="text-[#0d56d8]">IEDC Lab</span>
              </h1>
              <p className="mt-3 text-lg font-semibold text-[#12284a] sm:text-[22px]">Where Ideas Take Shape</p>
              <p className="mt-3 max-w-[430px] text-sm leading-relaxed text-[#1c3558] sm:text-[15px]">
                Innovation &amp; Entrepreneurship Developement Cell empowers students to think beyond
                boundaries, turn ideas into solutions and build a better tomorrow.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 sm:mt-8 sm:gap-9">
                {FEATURES.map(({ icon: Icon, title, subtitle }) => (
                  <div key={title} className="flex items-center gap-2.5">
                    <Icon size={18} className="text-[#0d56d8]" />
                    <div className="text-[13px] font-semibold leading-tight text-[#12284a]">
                      <div>{title}</div>
                      <div>{subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0d56d8] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d56d8]/40 hover:bg-[#0a45b0] sm:mt-8">
                Explore IEDC
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="w-full max-w-sm shrink-0 lg:w-[24rem]">
            <LoginCard />
          </div>
        </div>
      </div>
    </section>
  )
}
