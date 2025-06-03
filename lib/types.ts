export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  image?: string
  featured?: boolean
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  slug: string
  readTime?: number
  draft?: boolean
}
