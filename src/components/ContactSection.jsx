import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

export default function ContactSection() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  )
}
