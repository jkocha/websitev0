import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { blogPostSlugsQuery } from '@/sanity/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  // Get all blog post slugs
  const blogSlugs = await client.fetch<string[]>(blogPostSlugsQuery)

  // Generate blog post URLs
  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/thoughts/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Static pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/my-work`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/thoughts`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  return [...routes, ...blogUrls]
}
