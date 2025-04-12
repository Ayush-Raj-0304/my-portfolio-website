import Image from 'next/image'

const techStack = [
  { name: 'HTML', icon: '/icons/html.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Express', icon: '/icons/express.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'MySql', icon: '/icons/mysql.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'C++', icon: '/icons/cpp.svg' },
  { name: 'LeetCode (DSA)', icon: '/icons/leetcode.svg' },
]

export default function TechStack() {
  return (
    <section className='pb-24 pt-20'>
      <div className='container max-w-4xl mx-auto px-5'>
        <h2 className='title mb-12 text-center animate-fade-in-left delay-100'>
          Tech Stack I Use
        </h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 animate-fade-in-up delay-200'>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl shadow-md bg-gradient-to-br from-white/70 to-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:from-white/10 dark:to-white/5 dark:shadow-[0_4px_20px_rgba(255,255,255,0.04)]"

            >
              <div className='relative w-12 h-12 md:w-16 md:h-16'>
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className='object-contain'
                />
              </div>
              <span className='text-sm text-muted-foreground group-hover:text-foreground text-center'>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
