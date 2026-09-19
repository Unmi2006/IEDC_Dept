import iedcLogo from '../assets/iedc-logo.jpeg'

export default function Hero() {
  return (
    <section id="home" className="bg-navy text-white">
      <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <img
          src={iedcLogo}
          alt="IEDC Logo"
          className="w-40 h-40 md:w-48 md:h-48 object-contain mb-6 rounded-full bg-white/95 p-2 shadow-lg"
        />

        <p className="text-blue-200 tracking-wide font-semibold mb-3">
          IEDC · CST / CSIT / CSE (Cybersecurity) / CSE (Networks)
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          Innovation and Entrepreneurship
          <br />
          Development Center
        </h1>

        <p className="mt-6 text-lg md:text-xl text-blue-100">UEM Newtown</p>
      </div>
    </section>
  )
}
