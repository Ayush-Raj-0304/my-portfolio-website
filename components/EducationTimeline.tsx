import Image from 'next/image'
import Link from 'next/link'

type EducationItem = {
  title: string
  institution: string
  year: string
  image: string
  link: string
  score: string
  summary: string
}

const education: EducationItem[] = [
  {
    title: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Maharaja Agrasen Institute of Technology',
    year: '2022 - 2026',
    image: '/images/mait-logo.webp',
    link: 'https://mait.ac.in/',
    score: '8.445 CGPA',
    summary: 'Admitted via JEE Mains 2022 (Secured 96.69%ile)'
  },
  {
    title: 'Class XII (CBSE)',
    institution: 'Sunbeam English School, Bhagwanpur',
    year: '2020 - 2021',
    image: '/images/sunbeam-logo.jpeg',
    link: 'https://www.sunbeamschools.com/school/bhagwanpur',
    score: '94%',
    summary: 'Physics, Chemistry, Mathematics, English , Informatics Practices'
  },
  {
    title: 'Class X (CBSE)',
    institution: 'Sunbeam English School, Bhagwanpur',
    year: '2018 - 2019',
    image: '/images/sunbeam-logo.jpeg',
    link: 'https://www.sunbeamschools.com/school/bhagwanpur',
    score: '92.8%',
    summary: 'Science, Maths, Social Studies, English, Hindi'
  },
]

export default function EducationTimeline() {
  return (
    <section className='pb-24 animate-fade-in-up'>
      <div className='animate-fade-in-left delay-100'>
        <h2 className='title mb-12'>My Education</h2>
      </div>

      <div className='relative border-l border-muted pl-6 space-y-10'>
        {education.map((item, index) => (
          <div key={index} className='relative group'>
            <span className='absolute -left-[14px] top-1 h-3 w-3 rounded-full bg-primary' />

            <Link
              href={item.link}
              className='relative block overflow-hidden rounded-xl transition-transform hover:scale-[1.02]'
            >
              {/* Main Content */}
              <div className='relative z-10 flex items-start gap-4 transition-all duration-500 group-hover:blur-sm'>
                <div className='shrink-0'>
                  <Image
                    src={item.image}
                    alt={item.institution}
                    width={48}
                    height={48}
                    className='rounded-xl object-cover border shadow-md dark:shadow-[0_4px_20px_rgba(255,255,255,0.04)]'
                  />
                </div>

                <div>
                  <h3 className='text-lg font-semibold'>{item.title}</h3>
                  <p className='text-muted-foreground'>{item.institution}</p>
                  <span className='text-sm text-muted-foreground'>{item.year}</span>
                </div>
              </div>

              {/* Overlay */}
              <div className='absolute inset-0 z-20 rounded-xl bg-black/40 backdrop-blur-sm opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100' />

              {/* Hover Content */}
              <div className='absolute inset-x-0 bottom-0 z-30 px-6 py-4 opacity-0 translate-y-3 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100'>
                <p className='text-sm text-white/90 font-semibold'>
                  Score: {item.score}
                </p>
                <p className='text-xs text-white/80 mt-1'>
                  {item.summary}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
