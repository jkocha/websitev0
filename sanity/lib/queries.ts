import { groq } from 'next-sanity'
import { client } from './client'
import { BlogPost, BlogPostPreview, Project, ProjectPreview } from './types'

// Blog Post Queries
export const blogPostsQuery = groq`
  *[_type == "blogPost" && draft != true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    draft,
    content
  }
`

export const blogPostQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    draft
  }
`

export const blogPostSlugsQuery = groq`
  *[_type == "blogPost" && draft != true].slug.current
`

// Get adjacent posts for navigation
export const adjacentPostsQuery = groq`
{
  "current": *[_type == "blogPost" && slug.current == $slug][0] {
    publishedAt
  },
  "previous": *[_type == "blogPost" && draft != true && publishedAt < ^.current.publishedAt] | order(publishedAt desc) [0] {
    title,
    slug
  },
  "next": *[_type == "blogPost" && draft != true && publishedAt > ^.current.publishedAt] | order(publishedAt asc) [0] {
    title,
    slug
  }
}`

// Project Queries
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    technologies,
    link,
    image,
    featured,
    order
  }
`

export const projectQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    technologies,
    link,
    image,
    featured,
    order
  }
`

// Fetch functions with proper typing and error handling
export async function getBlogPosts(): Promise<BlogPostPreview[]> {
  try {
    const posts = await client.fetch<BlogPostPreview[]>(blogPostsQuery)
    return posts || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch<BlogPost>(blogPostQuery, { slug })
    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getProjects(): Promise<ProjectPreview[]> {
  try {
    const projects = await client.fetch<ProjectPreview[]>(projectsQuery)
    return projects || []
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const project = await client.fetch<Project>(projectQuery, { slug })
    return project
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

export async function getAdjacentPosts(slug: string) {
  try {
    const result = await client.fetch<{
      previous: { title: string; slug: { current: string } } | null
      next: { title: string; slug: { current: string } } | null
    }>(adjacentPostsQuery, { slug })

    return result
  } catch (error) {
    console.error('Error fetching adjacent posts:', error)
    return { previous: null, next: null }
  }
}

// Helper function to calculate read time
export function calculateReadTime(content: any[]): number {
  if (!content) return 0

  const text = content
    .filter((block) => block._type === 'block')
    .map((block) => block.children?.map((child: any) => child.text).join(''))
    .join(' ')

  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)

  return readTime
}
