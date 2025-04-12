import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40 animate-fade-in-up'>
      <div className='container max-w-3xl mx-auto px-5'>
        <h2 className='title mb-12 animate-fade-in-left delay-100'>
          Let&apos;s Connect, Email Me
        </h2>

        <div className='animate-fade-in-up delay-200'>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
