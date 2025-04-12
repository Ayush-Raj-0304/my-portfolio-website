import Link from 'next/link'
import { ArrowLeftIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <section className='min-h-screen flex items-center justify-center bg-background px-6 py-20 sm:py-32'>
      <div className='text-center'>
        <p className='text-6xl font-extrabold text-gray-800 dark:text-gray-300 sm:text-7xl animate-fade-in-up delay-100'>
          404
        </p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl animate-fade-in-up delay-200'>
          Page not found
        </h1>
        <p className='mt-4 text-base text-gray-600 dark:text-gray-400 sm:text-lg animate-fade-in-up delay-300'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className='mt-8 animate-fade-in-up delay-400'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-slate-200 hover:bg-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white  '
          >
            <ArrowLeftIcon className='h-4 w-4' />
            Go back home
          </Link>
        </div>
      </div>
    </section>
  )
}
