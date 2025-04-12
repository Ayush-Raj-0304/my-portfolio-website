import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'

export default async function RecentProjects() {
  const projects = await getProjects(2)

  return (
    <section className='pb-24 animate-fade-in-up'>
      <div className='animate-fade-in-left delay-100'>
        <h2 className='title mb-12'>Recent projects</h2>
      </div>

      <div className='animate-fade-in-up delay-200'>
        <Projects projects={projects} />
      </div>

      <div className='animate-fade-in-right delay-300'>
        <Link
          href='/projects'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground '
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  )
}
