import Link from 'next/link'
import { Card, CardDescription, CardHeader, CardTitle } from './card'
import { BlogPostPreview } from '@/sanity/lib/types'
import { calculateReadTime } from '@/sanity/lib/queries'
import { PortableTextBlock } from '@portabletext/types'

interface BlogPostCardProps {
  post: BlogPostPreview & { content?: PortableTextBlock[] }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const readTime = post.content ? calculateReadTime(post.content) : 0

  return (
    <Link href={`/thoughts/${post.slug.current}`}>
      <Card className="transition-all hover:-translate-y-0.5 hover:shadow-md">
        <CardHeader>
          <div className="text-foreground/60 mb-2 flex items-center gap-4 text-sm">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {readTime > 0 && (
              <>
                <span>•</span>
                <span>{readTime} min read</span>
              </>
            )}
          </div>
          <CardTitle className="hover:text-link text-xl transition-colors">{post.title}</CardTitle>
          {post.excerpt && (
            <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
          )}
        </CardHeader>
      </Card>
    </Link>
  )
}
