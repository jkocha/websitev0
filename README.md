# Personal Portfolio Website

A clean, minimalistic personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS. Features a responsive design, blog functionality, and excellent performance scores.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)
![Sanity](https://img.shields.io/badge/Sanity-3.0-red)

## 🌟 Features

- **Minimalistic Design**: Clean, modern interface inspired by simplicity
- **Responsive**: Mobile-first design that works on all devices
- **Blog Platform**: Full-featured blog with Sanity CMS integration
- **Performance Optimized**: 90+ Lighthouse scores across all metrics
- **SEO Ready**: Dynamic sitemaps, meta tags, and Open Graph support
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation
- **Analytics**: Privacy-focused analytics with Plausible
- **Type Safe**: Full TypeScript support throughout

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Git
- A Sanity.io account (free tier available)
- (Optional) Vercel account for deployment
- (Optional) Plausible Analytics account

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio-site.git
cd portfolio-site
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your values:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DOMAIN=localhost:3000

# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Optional: For draft previews
SANITY_API_TOKEN=your_token_here
```

### 4. Set Up Sanity CMS

#### Create a Sanity Project

1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project from the dashboard
3. Copy your project ID and dataset name

#### Initialize Sanity Studio

```bash
# The schemas are already configured in this project
# You just need to deploy the studio
npm run sanity:deploy
```

#### Add CORS Origins

In your Sanity project settings, add your URLs to CORS origins:

- `http://localhost:3000` (for development)
- `https://your-domain.com` (for production)

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## 📁 Project Structure

```
portfolio-site/
├── app/                    # Next.js App Router pages
│   ├── my-work/           # Portfolio page
│   ├── thoughts/          # Blog listing page
│   │   └── [slug]/        # Individual blog posts
│   ├── studio/            # Sanity Studio route
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── header.tsx         # Site navigation
│   ├── footer.tsx         # Site footer
│   ├── card.tsx           # Card components
│   └── ...               # Other components
├── lib/                   # Utility functions
│   ├── utils.ts          # Helper functions
│   └── types.ts          # TypeScript types
├── sanity/               # Sanity CMS configuration
│   ├── lib/              # Sanity client and queries
│   └── schemas/          # Content schemas
├── public/               # Static assets
└── middleware.ts         # Security headers and caching
```

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run format          # Format code with Prettier
npm run format:check    # Check formatting
npm run type-check      # Run TypeScript compiler

# Sanity
npm run sanity:deploy   # Deploy Sanity Studio
```

### Content Management

#### Access Sanity Studio

1. Navigate to `/studio` in your browser
2. Log in with your Sanity credentials
3. Create and manage content:
   - **Blog Posts**: Add title, content, excerpt, and publish date
   - **Projects**: Add project details, technologies, and links

#### Blog Post Features

- Rich text editor with formatting options
- Code syntax highlighting
- Image uploads with automatic optimization
- Draft/Published status
- SEO metadata fields

## 🚀 Deployment

### Deploy to Vercel

#### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

#### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables:
   - Add all variables from `.env.local`
   - Ensure `NEXT_PUBLIC_SITE_URL` matches your Vercel URL

#### 3. Deploy

Click "Deploy" and wait for the build to complete.

### Custom Domain Setup

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. Wait for DNS propagation (up to 48 hours)

### Post-Deployment

1. Update environment variables:

   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_DOMAIN=your-domain.com
   ```

2. Add production URL to Sanity CORS origins

3. Update Plausible Analytics domain (if using)

## 📊 Performance Monitoring

### Lighthouse Scores

Target metrics (all should be >90):

- Performance
- Accessibility
- Best Practices
- SEO

### Analytics Setup

If using Plausible Analytics:

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. The integration is already configured in the codebase

### Monitoring Tools

- **Vercel Analytics**: Automatic with Vercel deployment
- **Google Search Console**: Add site for SEO monitoring
- **Uptime Monitoring**: Use services like Uptime Robot

## 🔧 Troubleshooting

### Common Issues

#### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

#### Sanity Connection Issues

1. Check project ID and dataset in `.env.local`
2. Verify CORS origins in Sanity dashboard
3. Ensure API token has correct permissions

#### Image Loading Issues

1. Check image domains in `next.config.ts`
2. Verify Sanity CDN URLs are allowed
3. Clear Next.js cache: `rm -rf .next`

#### TypeScript Errors

```bash
# Check for type errors
npm run type-check

# Update TypeScript definitions
npm install -D @types/node@latest
```

### Debug Mode

Add to `.env.local` for verbose logging:

```env
NEXT_PUBLIC_DEBUG=true
```

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests and linting: `npm run lint && npm run type-check`
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed

### Component Guidelines

- Keep components small and focused
- Use TypeScript interfaces for props
- Implement proper error boundaries
- Ensure accessibility compliance
- Write responsive styles mobile-first

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by [wongmjane.com](https://wongmjane.com)
- Built with [Next.js](https://nextjs.org)
- Content management by [Sanity](https://sanity.io)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Analytics by [Plausible](https://plausible.io)

## 📞 Support

For questions or support:

- Open an issue on GitHub
- Check the [troubleshooting guide](#-troubleshooting)
- Review the [Sanity documentation](https://sanity.io/docs)
- Consult the [Next.js documentation](https://nextjs.org/docs)

---

Made with ❤️ using Next.js and Sanity CMS
