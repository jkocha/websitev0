import { PortableTextBlock } from '@portabletext/types'

export interface SanityDocument {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: string
}

export interface BlogPost extends SanityDocument {
  _type: 'blogPost'
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  content?: PortableTextBlock[]
  publishedAt: string
  draft?: boolean
}

export interface Project extends SanityDocument {
  _type: 'project'
  title: string
  slug: {
    current: string
  }
  description?: string
  technologies?: string[]
  link?: string
  image?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  featured?: boolean
  order?: number
}

// Helper type for GROQ query results
export type BlogPostPreview = Pick<
  BlogPost,
  '_id' | 'title' | 'slug' | 'excerpt' | 'publishedAt' | 'draft'
>

export type ProjectPreview = Pick<
  Project,
  | '_id'
  | 'title'
  | 'slug'
  | 'description'
  | 'technologies'
  | 'link'
  | 'image'
  | 'featured'
  | 'order'
>
