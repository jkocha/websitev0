import Link from 'next/link'

export default function Home() {
  return (
    <div className="container py-16 md:py-24">
      <div className="flex flex-col items-center text-center">
        {/* Photo placeholder */}
        <div className="bg-foreground/10 mb-8 h-32 w-32 overflow-hidden rounded-full md:h-40 md:w-40">
          <div className="text-foreground/40 flex h-full w-full items-center justify-center text-sm">
            Photo
          </div>
        </div>

        {/* Name and Bio */}
        <h1 className="mb-4 text-3xl font-medium md:text-4xl">Your Name</h1>
        <p className="text-foreground/80 mb-8 max-w-2xl text-lg">
          This is your bio. A brief introduction about yourself, what you do, and what you're
          passionate about. Keep it concise and engaging.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground flex items-center gap-2 transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </Link>
          <Link
            href="mailto:hello@example.com"
            className="text-foreground/60 hover:text-foreground flex items-center gap-2 transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground flex items-center gap-2 transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X
          </Link>
        </div>
      </div>
    </div>
  )
}
