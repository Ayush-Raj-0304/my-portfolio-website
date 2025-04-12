import Image from 'next/image'
import authorImage from '../../public/images/authors/me.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center animate-fade-in-up hover:scale-[1.02] transition-transform'>
      <div className='mt-2 flex-1 md:mt-0 animate-fade-in-left delay-100'>
        <h1 className='title no-underline font-black text-3xl'>Hey, I&#39;m Ayush.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a full stack developer based in Delhi, India. I&#39;m
          passionate about learning new technologies and problem solving.
        </p>
      </div>
      <div className='relative animate-fade-in-right delay-200'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Ayush Raj'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
