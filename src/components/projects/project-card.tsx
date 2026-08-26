import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { StatusBadge } from "@/components/ui/status-badge";
import { TechChip } from "@/components/ui/tech-chip";
import { GithubIcon } from "@/components/icons/github-icon";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const visibleStack = project.stack.slice(0, featured ? 8 : 5);
  const remaining = project.stack.length - visibleStack.length;

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:bg-surface-raised",
        featured && "sm:p-7 lg:col-span-1"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className={cn(
            "font-serif font-semibold text-foreground",
            featured ? "text-xl" : "text-lg"
          )}
        >
          {project.title}
        </h3>
        <StatusBadge status={project.status} />
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {project.categories.map((category) => (
          <span
            key={category}
            className="font-mono text-[11px] text-accent-secondary"
          >
            {category}
          </span>
        ))}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {project.shortDescription}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {visibleStack.map((tech) => (
          <TechChip key={tech}>{tech}</TechChip>
        ))}
        {remaining > 0 && (
          <TechChip className="text-muted-foreground/70">
            +{remaining} more
          </TechChip>
        )}
      </div>

      <div className="mt-6 flex flex-1 items-end justify-between gap-3 pt-2">
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Open GitHub repository for ${project.title}`}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Open live deployment for ${project.title}`}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live
            </a>
          )}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-secondary hover:underline"
        >
          View Case Study
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
