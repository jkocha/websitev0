'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
      <h2 className="mb-4 text-2xl font-medium">Something went wrong!</h2>
      <p className="text-foreground/60 mb-8 max-w-md">
        We encountered an error while loading this page. Please try again.
      </p>
      <button
        onClick={reset}
        className="bg-foreground text-background rounded-lg px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80"
      >
        Try again
      </button>
    </div>
  )
}
