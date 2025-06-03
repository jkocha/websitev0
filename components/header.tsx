'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'My Work', href: '/my-work' },
  { name: 'Thoughts', href: '/thoughts' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center">
        <nav className="flex flex-1 items-center justify-between">
          <Link href="/" className="font-medium transition-opacity hover:opacity-80">
            Portfolio
          </Link>
          <ul className="flex items-center gap-6 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'hover:text-foreground/80 transition-colors',
                    pathname === item.href ? 'text-foreground font-medium' : 'text-foreground/60'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
