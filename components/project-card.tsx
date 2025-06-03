import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
import { ProjectPreview } from '@/sanity/lib/types'
import { urlFor } from '@/sanity/lib/client'

interface ProjectCardProps {
  project: ProjectPreview
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      {project.image && (
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={urlFor(project.image).width(600).height(338).url()}
            alt={project.image.alt || project.title}
            width={600}
            height={338}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        {project.description && <CardDescription>{project.description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1">
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-foreground/10 rounded-full px-3 py-1 text-xs">
                {tech}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      {project.link && (
        <CardFooter>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:text-link-hover text-sm transition-colors"
          >
            View Project →
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}
