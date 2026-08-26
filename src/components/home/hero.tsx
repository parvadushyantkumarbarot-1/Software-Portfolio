import Link from "next/link";
import { MapPin, Mail, ArrowRight, Download } from "lucide-react";
import { site, systemArchitecture } from "@/data/portfolio";
import { ArchitecturePanel } from "@/components/architecture/architecture-panel";
import { resumeFileExists } from "@/lib/resume";
import { GithubIcon } from "@/components/icons/github-icon";

export function Hero() {
  const resumeAvailable = resumeFileExists();

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground">
              {site.experienceYears} years of engineering experience
            </span>

            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              {site.name}
            </h1>

            <p className="mt-3 max-w-xl text-lg font-medium leading-snug text-foreground/90 sm:text-xl">
              {site.title}
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {site.positioning}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:opacity-90"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-raised"
              >
                View Resume
              </Link>
              {resumeAvailable ? (
                <a
                  href={site.resumePath}
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-raised"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  title="Resume file not configured"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-dashed border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground/60"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Résumé Not Yet Available
                </span>
              )}
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-raised"
              >
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {site.location}
              </span>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {site.email}
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <ArchitecturePanel nodes={systemArchitecture} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
