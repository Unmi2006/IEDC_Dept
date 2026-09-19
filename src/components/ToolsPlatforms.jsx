import { SiGithub, SiGooglecolab, SiNotion, SiFigma, SiArduino } from 'react-icons/si'
import { Palette, Sigma, Code2 } from 'lucide-react'

const tools = [
  { name: 'GitHub', Icon: SiGithub, color: '#181717' },
  { name: 'Google Colab', Icon: SiGooglecolab, color: '#F9AB00' },
  { name: 'Notion', Icon: SiNotion, color: '#000000' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'Canva', Icon: Palette, color: '#00C4CC' },
  { name: 'MATLAB', Icon: Sigma, color: '#E16737' },
  { name: 'Arduino', Icon: SiArduino, color: '#00979D' },
  { name: 'VS Code', Icon: Code2, color: '#007ACC' },
]

export default function ToolsPlatforms() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-2">
          — Tools &amp; Platforms
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-1">Tools &amp; Platforms</h2>
        <p className="text-slate-500 text-sm mb-8">Popular tools used by innovators at IEDC Lab.</p>

        <div className="flex flex-wrap gap-4">
          {tools.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-5 text-sm font-semibold text-navy-900 min-w-[120px] hover:border-brand-blue/40 hover:shadow-sm transition-all"
            >
              <Icon size={28} color={color} />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
