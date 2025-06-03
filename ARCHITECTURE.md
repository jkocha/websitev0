# Architecture Documentation

## Overview

This portfolio website is built using a modern JAMstack architecture with the following core technologies:

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity.io
- **Language**: TypeScript
- **Deployment**: Vercel
- **Analytics**: Plausible

## Project Structure

```
portfolio-site/
├── app/                        # Next.js App Router
│   ├── (routes)/              # Page routes
│   │   ├── my-work/           # Portfolio page
│   │   ├── thoughts/          # Blog listing
│   │   │   └── [slug]/        # Dynamic blog posts
│   │   └── studio/            # Sanity Studio
│   ├── api/                   # API routes (if needed)
│   ├── error.tsx              # Error boundary
│   ├── icon.tsx               # Dynamic favicon
│   ├── layout.tsx             # Root layout
│   ├── not-found.tsx          # 404 page
│   ├── page.tsx               # Home page
│   ├── robots.ts              # Dynamic robots.txt
│   └── sitemap.ts             # Dynamic sitemap
│
├── components/                 # React components
│   ├── ui/                    # UI components
│   │   ├── card.tsx           # Card system
│   │   ├── skeleton.tsx       # Loading states
│   │   └── skip-nav.tsx       # Accessibility
│   ├── blog-post-card.tsx     # Blog post preview
│   ├── footer.tsx             # Site footer
│   ├── header.tsx             # Site navigation
│   ├── portable-text.tsx      # Rich text renderer
│   └── project-card.tsx       # Project display
│
├── lib/                       # Utilities
│   ├── image.ts               # Image optimization
│   ├── types.ts               # TypeScript types
│   └── utils.ts               # Helper functions
│
├── sanity/                    # Sanity CMS
│   ├── lib/                   # Sanity utilities
│   │   ├── client.ts          # Sanity client
│   │   ├── preview.ts         # Preview mode
│   │   ├── queries.ts         # GROQ queries
│   │   └── types.ts           # Sanity types
│   └── schemas/               # Content schemas
│       ├── blogPost.ts        # Blog schema
│       ├── index.ts           # Schema exports
│       └── project.ts         # Project schema
│
├── public/                    # Static assets
│   └── manifest.json          # PWA manifest
│
├── styles/                    # Global styles
│   └── globals.css            # Tailwind imports
│
└── config files               # Configuration
    ├── .env.local.example     # Environment template
    ├── .eslintrc.json         # ESLint config
    ├── .gitignore             # Git ignore
    ├── .prettierrc            # Prettier config
    ├── middleware.ts          # Next.js middleware
    ├── next.config.ts         # Next.js config
    ├── package.json           # Dependencies
    ├── sanity.config.ts       # Sanity config
    ├── tailwind.config.ts     # Tailwind config
    ├── tsconfig.json          # TypeScript config
    └── vercel.json            # Vercel config
```

## Data Flow

### Content Creation

1. Content creators log into Sanity Studio (`/studio`)
2. Create/edit blog posts or projects
3. Content is stored in Sanity's hosted database

### Content Delivery

1. Next.js fetches content via Sanity Client
2. Pages are statically generated at build time
3. ISR (Incremental Static Regeneration) updates content
4. Images are optimized through Next.js Image component

### Client-Side Features

- Navigation state management via Next.js hooks
- Loading states with React Suspense
- Error boundaries for graceful failures
- Analytics tracking via Plausible

## Key Design Decisions

### Next.js App Router

- Chosen for better performance and React Server Components
- Enables streaming and partial rendering
- Built-in SEO optimizations

### Sanity CMS

- Headless CMS for flexible content management
- Real-time collaboration features
- Powerful query language (GROQ)
- Built-in image optimization

### Tailwind CSS v4

- Utility-first approach for rapid development
- Consistent design system
- Minimal CSS bundle size
- Built-in responsive utilities

### TypeScript

- Type safety across the application
- Better developer experience
- Catches errors at compile time
- Improved IDE support

## Performance Optimizations

### Image Optimization

- Next.js Image component with lazy loading
- Blur placeholders for better UX
- WebP/AVIF format support
- Responsive image sizing

### Code Splitting

- Automatic code splitting by Next.js
- Dynamic imports for heavy components
- Route-based code splitting

### Caching Strategy

- Static assets: 1 year cache
- HTML pages: must-revalidate
- API responses: ISR with revalidation

### Bundle Optimization

- Tree shaking unused code
- CSS purging with Tailwind
- Minification in production
- Compression enabled

## Security Measures

### Headers (via middleware)

- Content Security Policy (CSP)
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

### Environment Variables

- Sensitive data in `.env.local`
- Public variables prefixed with `NEXT_PUBLIC_`
- No secrets in client-side code

### Content Validation

- Sanity schemas enforce data structure
- TypeScript ensures type safety
- Input sanitization for user content

## Deployment Architecture

### Build Process

1. Vercel triggers build on git push
2. Dependencies installed
3. Next.js builds static pages
4. Assets optimized and compressed
5. Deploy to Vercel edge network

### Runtime

- Static pages served from CDN
- API routes run as serverless functions
- ISR updates pages on-demand
- Middleware runs at edge locations

## Monitoring & Analytics

### Performance Monitoring

- Vercel Analytics (automatic)
- Core Web Vitals tracking
- Error tracking in production

### User Analytics

- Plausible for privacy-focused analytics
- No cookies required
- GDPR compliant

## Scaling Considerations

### Current Architecture Supports

- Thousands of blog posts
- Hundreds of projects
- High traffic loads
- Global distribution

### Future Enhancements

- Redis caching for API responses
- Database for user interactions
- Newsletter integration
- Comment system

## Development Workflow

### Local Development

1. Clone repository
2. Install dependencies
3. Configure environment variables
4. Run development server

### Code Quality

- ESLint for code linting
- Prettier for formatting
- TypeScript for type checking
- Pre-commit hooks

### Testing Strategy

- Type checking with TypeScript
- Linting with ESLint
- Manual testing for UI/UX
- Lighthouse for performance

## Maintenance

### Regular Tasks

- Update dependencies monthly
- Monitor error logs
- Check analytics for issues
- Review security headers

### Content Backups

- Sanity provides automatic backups
- Export content via API if needed
- Version control for code

---

This architecture provides a solid foundation for a performant, scalable, and maintainable portfolio website.
