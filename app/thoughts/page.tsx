import { Suspense } from 'react'
import { getBlogPosts } from '@/sanity/lib/queries'
import { BlogPostCard } from '@/components/blog-post-card'
import { BlogPostCardSkeleton } from '@/components/skeleton'

// Revalidate this page every hour
export const revalidate = 3600

async function BlogPosts() {
  const posts = await getBlogPosts()

  if (posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-foreground/60">No blog posts yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <BlogPostCard key={post._id} post={post} />
      ))}
    </div>
  )
}

function BlogPostsLoading() {
  return (
    <div className="space-y-6">
      {[...Array(4)].map((_, i) => (
        <BlogPostCardSkeleton key={i} />
      ))}
    </div>
  )
}

export default function ThoughtsPage() {
  return (
    <div className="container py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-medium">Thoughts</h1>
        <p className="text-foreground/80 text-lg">
          Musings on development, design, and technology.
        </p>
      </div>

      <Suspense fallback={<BlogPostsLoading />}>
        <BlogPosts />
      </Suspense>
    </div>
  )
}
