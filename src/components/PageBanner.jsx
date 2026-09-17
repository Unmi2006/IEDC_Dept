export default function PageBanner({ title, subtitle }) {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{title}</h1>
        {subtitle && <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
