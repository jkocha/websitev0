import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="mt-8 mb-4 text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="mt-8 mb-4 text-2xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-6 mb-3 text-xl font-semibold">{children}</h3>,
    h4: ({ children }) => <h4 className="mt-6 mb-3 text-lg font-semibold">{children}</h4>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-foreground/20 my-6 border-l-4 pl-4 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-4 list-disc space-y-2 pl-6">{children}</ul>,
    number: ({ children }) => <ol className="mb-4 list-decimal space-y-2 pl-6">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-foreground/10 rounded px-1 py-0.5 text-sm">{children}</code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link hover:text-link-hover underline transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ''}
            width={800}
            height={450}
            className="w-full rounded-lg"
          />
          {value.alt && (
            <figcaption className="text-foreground/60 mt-2 text-center text-sm">
              {value.alt}
            </figcaption>
          )}
        </figure>
      )
    },
    code: ({ value }) => (
      <pre className="bg-foreground/5 my-6 overflow-x-auto rounded-lg p-4">
        <code className="text-sm">{value.code}</code>
      </pre>
    ),
  },
}

export function CustomPortableText({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}
