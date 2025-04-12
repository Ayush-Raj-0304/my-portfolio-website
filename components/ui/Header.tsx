import Link from 'next/link'
import ThemeToggle from './toggle-theme'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm animate-fade-in-down'>
      <nav className='container mx-auto max-w-3xl flex px-5 items-center justify-between'>
        <div className='animate-fade-in-left delay-100 hover:underline transition-transform duration-100 ease-[cubic-bezier(0.22, 1, 0.36, 1)] hover:scale-[1.02] ease-out '>
          <Link href='/' className='font-serif text-3xl font-bold hover:text-foregrond'>
            AR
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-md font-light text-muted-foreground sm:gap-10 animate-fade-in-up delay-200'>
          <li className='transition-colors hover:text-foregrond hover:underline transition-transform duration-100 ease-[cubic-bezier(0.22, 1, 0.36, 1)] hover:scale-[1.05] ease-out'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground hover:text-foregrond hover:underline transition-transform duration-100 ease-[cubic-bezier(0.22, 1, 0.36, 1)] hover:scale-[1.05] ease-out'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground hover:text-foregrond hover:underline transition-transform duration-100 ease-[cubic-bezier(0.22, 1, 0.36, 1)] hover:scale-[1.05] ease-out'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='animate-fade-in-right delay-300 transition-transform duration-100 ease-[cubic-bezier(0.22, 1, 0.36, 1)] hover:scale-[1.4] ease-out'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
