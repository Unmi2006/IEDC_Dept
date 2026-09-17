import PageBanner from '../components/PageBanner'
import { Image as ImageIcon } from 'lucide-react'

const items = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  caption: `Add photo ${i + 1}`,
}))

export default function Gallery() {
  return (
    <>
      <PageBanner title="Gallery" subtitle="Our activities and events" />

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="aspect-square rounded-xl border border-dashed border-ocean/25 bg-ocean/5 flex flex-col items-center justify-center gap-2 text-ocean/50"
              >
                <ImageIcon size={28} strokeWidth={1.5} />
                <span className="text-xs">{item.caption}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-8 text-center">
            Replace these placeholders with photos from your events.
          </p>
        </div>
      </section>
    </>
  )
}
