import type { Metadata } from "next";
import { projects, PROJECT_CATEGORIES } from "@/data/portfolio";
import { ProjectsArchive } from "@/components/projects/projects-archive";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project archive: production AI infrastructure, distributed systems, and backend platforms, each with honest status and engineering-decision writeups.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
        Project archive
      </p>
      <h1 className="mt-2 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Engineering work, with honest status
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Every project lists what&apos;s actually built versus planned. Filter by
        engineering domain, or open a case study for architecture, testing,
        and reliability details.
      </p>

      <div className="mt-10">
        <ProjectsArchive projects={projects} categories={PROJECT_CATEGORIES} />
      </div>
    </div>
  );
}
