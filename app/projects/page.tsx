import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40 animate-fade-in-up'>
      <div className='container max-w-3xl mx-auto px-5'>
        <h1 className='title mb-12 animate-fade-in-left delay-100'>Projects</h1>

        <div className='animate-fade-in-up delay-200'>
          <Projects projects={projects} />
        </div>
      </div>
    </section>
  )
}
