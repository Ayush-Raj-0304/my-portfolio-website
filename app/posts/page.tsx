import PostsWithSearch from '@/components/posts-with-search'
import { getPosts } from '@/lib/posts'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className='pb-24 pt-40 animate-fade-in-up'>
      <div className='container max-w-3xl mx-auto px-5'>
        <h1 className='title mb-12 animate-fade-in-left delay-100'>Posts</h1>

        <div className='animate-fade-in-up delay-200'>
          <PostsWithSearch posts={posts} />
        </div>
      </div>
    </section>
  )
}
