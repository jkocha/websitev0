import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn('bg-foreground/10 animate-pulse rounded-md', className)} />
}

export function ProjectCardSkeleton() {
  return (
    <div className="border-border bg-background rounded-lg border p-6">
      <Skeleton className="mb-2 h-6 w-3/4" />
      <Skeleton className="mb-4 h-4 w-full" />
      <Skeleton className="mb-4 h-4 w-5/6" />
      <div className="mb-4 flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-18 rounded-full" />
      </div>
      <Skeleton className="h-4 w-24" />
    </div>
  )
}

export function BlogPostCardSkeleton() {
  return (
    <div className="border-border bg-background rounded-lg border p-6">
      <div className="mb-2 flex items-center gap-4 text-sm">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="mb-2 h-6 w-4/5" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}

export function BlogPostSkeleton() {
  return (
    <article className="container py-16">
      <div className="mx-auto max-w-3xl">
        <Skeleton className="mb-8 h-4 w-32" />

        <header className="mb-8">
          <Skeleton className="mb-4 h-10 w-4/5" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>
        </header>

        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    </article>
  )
}
