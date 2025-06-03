import { Suspense } from 'react'
import { getProjects } from '@/sanity/lib/queries'
import { ProjectCard } from '@/components/project-card'
import { ProjectCardSkeleton } from '@/components/skeleton'

async function ProjectsGrid() {
  const projects = await getProjects()

  if (projects.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-foreground/60">No projects found. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  )
}

function ProjectsLoading() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {[...Array(4)].map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  )
}

export default function MyWorkPage() {
  return (
    <div className="container py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-medium">My Work</h1>
        <p className="text-foreground/80 text-lg">
          A collection of projects I've worked on. Each represents a unique challenge and learning
          experience.
        </p>
      </div>

      <Suspense fallback={<ProjectsLoading />}>
        <ProjectsGrid />
      </Suspense>
    </div>
  )
}
