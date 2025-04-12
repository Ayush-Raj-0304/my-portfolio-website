import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
  const posts = await getPosts(3)

  return (
    <section className='pb-24 animate-fade-in-up'>
      <div className='animate-fade-in-left delay-100'>
        <h2 className='title mb-12'>Recent posts</h2>
      </div>

      <div className='animate-fade-in-up delay-200'>
        <Posts posts={posts} />
      </div>

      <div className='animate-fade-in-right delay-300'>
        <Link
          href='/posts'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All posts</span>
        </Link>
      </div>
    </section>
  )
}
