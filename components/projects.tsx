import Image from 'next/image'
import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {projects.map(project => (
        <li
          key={project.slug}
          className='group relative transition-transform duration-500 ease-in-out hover:-translate-y-2'
        >
          <Link href={`/projects/${project.slug}`}>
            {project.image && (
              <div className='relative w-full overflow-hidden rounded-xl bg-muted shadow-sm flex items-center justify-center'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  width={800}
                  height={500}
                  className='object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1'
                />
              </div>
            )}

            {/* Overlay */}
            <div className='absolute inset-0 z-10 rounded-xl bg-black/20 backdrop-blur-sm opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100' />

            {/* Content on hover */}
            <div className='absolute inset-x-0 bottom-0 z-20 translate-y-4 px-6 py-5 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100'>
              <h2 className='text-xl font-semibold text-white drop-shadow-md line-clamp-1'>
                {project.title}
              </h2>
              <p className='mt-1 text-sm text-white/80 line-clamp-1'>
                {project.summary}
              </p>
              <p className='mt-1 text-xs text-white/60 font-light'>
                {formatDate(project.publishedAt ?? '')}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
