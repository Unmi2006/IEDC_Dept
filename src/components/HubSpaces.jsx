import { Image as ImageIcon } from 'lucide-react'

const spaces = ['Innovation Workspace', 'Prototype & Maker Space', 'Collaboration Zone']

export default function HubSpaces() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-2">
          — Our Space
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-8">
          A Hub for Innovation
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {spaces.map((label) => (
            <div key={label}>
              <div className="aspect-[4/3] rounded-xl border border-dashed border-brand-blue/25 bg-white flex flex-col items-center justify-center gap-2 text-brand-blue/50">
                <ImageIcon size={26} strokeWidth={1.5} />
                <span className="text-xs">Add photo</span>
              </div>
              <p className="mt-2 text-sm font-medium text-navy-900 text-center">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
