import Link from "next/link";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons/github-icon";
import { StatusBadge } from "@/components/ui/status-badge";
import { TechChip } from "@/components/ui/tech-chip";
import { ArchitecturePanel } from "@/components/architecture/architecture-panel";

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="font-serif text-xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-foreground/90">
          <span
            aria-hidden="true"
            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-secondary"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CaseStudy({
  project,
  previous,
  next,
}: {
  project: Project;
  previous: Project | null;
  next: Project | null;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        Project archive
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <StatusBadge status={project.status} />
        <div className="flex flex-wrap gap-1.5">
          {project.categories.map((category) => (
            <span
              key={category}
              className="font-mono text-[11px] text-accent-secondary"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
        {project.shortDescription}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-surface-raised"
          >
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
            View Source
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-surface-raised"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Visit Deployment
          </a>
        )}
      </div>

      <div className="mt-10 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <TechChip key={tech}>{tech}</TechChip>
        ))}
      </div>

      <DetailSection title="Problem">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.problem}
        </p>
      </DetailSection>

      <DetailSection title="Goals">
        <BulletList items={project.goals} />
      </DetailSection>

      <DetailSection title="Architecture overview">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.architectureSummary}
        </p>
        <div className="mt-5">
          <ArchitecturePanel
            nodes={project.architectureFlow}
            label="Architecture Overview"
          />
        </div>
      </DetailSection>

      <DetailSection title="Core capabilities">
        <div className="flex flex-wrap gap-2">
          {project.capabilities.map((capability) => (
            <span
              key={capability}
              className="rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs text-foreground/90"
            >
              {capability}
            </span>
          ))}
        </div>
      </DetailSection>

      <DetailSection title="Key engineering decisions">
        <div className="flex flex-col gap-4">
          {project.engineeringDecisions.map((decision) => (
            <div
              key={decision.decision}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <p className="text-sm font-medium text-foreground">
                {decision.decision}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {decision.rationale}
              </p>
            </div>
          ))}
        </div>
      </DetailSection>

      <DetailSection title="Distributed-systems & reliability considerations">
        <BulletList items={project.reliabilityConsiderations} />
      </DetailSection>

      <DetailSection title="Security considerations">
        <BulletList items={project.securityConsiderations} />
      </DetailSection>

      <DetailSection title="Testing strategy">
        <BulletList items={project.testingStrategy} />
      </DetailSection>

      <DetailSection title="Observability strategy">
        <BulletList items={project.observabilityStrategy} />
      </DetailSection>

      {project.metrics && project.metrics.length > 0 && (
        <DetailSection title="Verified outcomes">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-serif text-2xl font-semibold text-foreground">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </DetailSection>
      )}

      <DetailSection title="Current limitations">
        <BulletList items={project.limitations} />
      </DetailSection>

      <DetailSection title="Roadmap">
        <BulletList items={project.roadmap} />
      </DetailSection>

      <nav
        aria-label="Project navigation"
        className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>
              <span className="block text-xs text-muted-foreground/70">
                Previous
              </span>
              {previous.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center gap-2 text-right text-sm text-muted-foreground hover:text-foreground sm:ml-auto"
          >
            <span>
              <span className="block text-xs text-muted-foreground/70">
                Next
              </span>
              {next.title}
            </span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
