"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/portfolio";
import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

export function ProjectsArchive({
  projects,
  categories,
}: {
  projects: Project[];
  categories: ProjectCategory[];
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...categories];

  const filtered = useMemo(() => {
    const list =
      filter === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(filter));

    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [projects, filter]);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {filters.map((option) => {
          const active = option === filter;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              aria-pressed={active}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-200",
                active
                  ? "border-accent bg-accent-soft text-foreground"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground"
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {filtered.length} project{filtered.length === 1 ? "" : "s"} for{" "}
        {filter}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={project.featured}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
