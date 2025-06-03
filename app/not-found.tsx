import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-4 text-2xl font-medium">Page Not Found</h2>
      <p className="text-foreground/60 mb-8 max-w-md">
        Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link
        href="/"
        className="bg-foreground text-background rounded-lg px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80"
      >
        Go Home
      </Link>
    </div>
  )
}
