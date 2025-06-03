import { Suspense } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getBlogPost,
  getAdjacentPosts,
  calculateReadTime,
  blogPostSlugsQuery,
} from '@/sanity/lib/queries'
import { CustomPortableText } from '@/components/portable-text'
import { BlogPostSkeleton } from '@/components/skeleton'
import { client } from '@/sanity/lib/client'

// Revalidate blog posts every hour
export const revalidate = 3600

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(blogPostSlugsQuery)
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const postUrl = `${siteUrl}/thoughts/${post.slug.current}`

  return {
    title: post.title,
    description: post.excerpt || 'Read this blog post',
    openGraph: {
      title: post.title,
      description: post.excerpt || 'Read this blog post',
      type: 'article',
      publishedTime: post.publishedAt,
      url: postUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || 'Read this blog post',
    },
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

async function BlogPostContent({ slug }: { slug: string }) {
  const [post, adjacentPosts] = await Promise.all([getBlogPost(slug), getAdjacentPosts(slug)])

  if (!post) {
    notFound()
  }

  const readTime = calculateReadTime(post.content || [])

  return (
    <article className="container py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/thoughts"
          className="text-foreground/60 hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Thoughts
        </Link>

        <header className="mb-8">
          <h1 className="mb-4 text-3xl font-medium md:text-4xl">{post.title}</h1>
          <div className="text-foreground/60 flex items-center gap-4 text-sm">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {readTime > 0 && (
              <>
                <span>•</span>
                <span>{readTime} min read</span>
              </>
            )}
          </div>
        </header>

        {post.content && (
          <div className="prose prose-lg max-w-none">
            <CustomPortableText value={post.content} />
          </div>
        )}

        <footer className="border-border mt-16 border-t pt-8">
          <nav className="flex items-center justify-between">
            {adjacentPosts.previous ? (
              <Link
                href={`/thoughts/${adjacentPosts.previous.slug.current}`}
                className="text-foreground/60 hover:text-foreground flex items-center gap-2 text-sm transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">{adjacentPosts.previous.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : (
              <div />
            )}
            {adjacentPosts.next ? (
              <Link
                href={`/thoughts/${adjacentPosts.next.slug.current}`}
                className="text-foreground/60 hover:text-foreground flex items-center gap-2 text-sm transition-colors"
              >
                <span className="hidden sm:inline">{adjacentPosts.next.title}</span>
                <span className="sm:hidden">Next</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </footer>
      </div>
    </article>
  )
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  
  return (
    <Suspense fallback={<BlogPostSkeleton />}>
      <BlogPostContent slug={slug} />
    </Suspense>
  )
}
