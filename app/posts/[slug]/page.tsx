import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import { getPosts, getPost } from '@/lib/posts'
import { ArrowLeftIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'

type PostPageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))
  return slugs
}

export default async function Post({ params }: PostPageProps) {
  const { slug } = params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata

  return (
    <section className="pb-24 pt-32 animate-fade-in-up">
      <div className="container mx-auto max-w-3xl px-6">
        {/* Back Link */}
        <div className="animate-fade-in-left delay-100">
          <Link
            href="/posts"
            className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to posts</span>
          </Link>
        </div>

        {/* Post Image */}
        {image && (
          <div className="relative mb-6 h-80 w-full overflow-hidden rounded-lg animate-fade-in-up delay-200">
            <Image src={image} alt={title || ''} className="object-cover object-center" fill />
          </div>
        )}

        {/* Post Title & Author */}
        <header className="animate-fade-in-up delay-300">
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        {/* Markdown Content */}
        <main className="prose prose-lg mt-12 dark:prose-invert animate-fade-in-up delay-400">
          <MDXRemote source={content} />
        </main>

        {/* Footer (Optional) */}
        <footer className="mt-16 animate-fade-in-up delay-500">
          {/* <NewsletterForm /> */}
        </footer>
      </div>
    </section>
  )
}
