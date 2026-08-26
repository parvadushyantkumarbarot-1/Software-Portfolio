import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import { projects, site } from "@/data/portfolio";
import { getRepoMetadata } from "@/lib/github";
import { SectionHeading } from "@/components/ui/section-heading";

function formatDate(dateString: string | null): string | null {
  if (!dateString) return null;
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateString));
  } catch {
    return null;
  }
}

export async function GithubBuildLog() {
  const repoProjects = projects.filter((project) => project.githubUrl);
  const metadata = await getRepoMetadata(
    repoProjects.map((project) => project.githubUrl as string)
  );

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Build log"
            title="Public repositories"
            description="Repository metadata is fetched from the GitHub API as an enhancement. Project status and descriptions on this site remain the source of truth."
          />
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-accent-secondary hover:underline"
          >
            <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Full GitHub profile
          </a>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {repoProjects.map((project, index) => {
            const meta = metadata[index];
            const updated = formatDate(meta?.updatedAt ?? null);

            return (
              <li key={project.slug}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-4 transition-colors duration-200 hover:bg-surface-raised"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm font-medium text-foreground">
                        {project.title}
                      </span>
                      <ExternalLink
                        className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {project.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
                    {meta?.language && <span>{meta.language}</span>}
                    {updated && <span>Updated {updated}</span>}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
