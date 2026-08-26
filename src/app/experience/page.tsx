import type { Metadata } from "next";
import { experience, education } from "@/data/portfolio";
import { ExperienceCard } from "@/components/experience/experience-card";
import { GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional engineering experience across enterprise backend systems, distributed processing, and production AI infrastructure.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
        Professional experience
      </p>
      <h1 className="mt-2 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        4+ years building backend and AI infrastructure
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Roles are presented by engineering domain rather than employer name.
        Every metric below is a verified professional outcome.
      </p>

      <div className="mt-10 flex flex-col gap-6">
        {experience.map((entry) => (
          <ExperienceCard key={entry.id} entry={entry} />
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-border bg-surface p-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-accent-secondary" aria-hidden="true" />
          <h2 className="font-serif text-lg font-semibold text-foreground">
            Education
          </h2>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {education.map((entry) => (
            <div key={entry.degree} className="flex flex-col gap-0.5">
              <p className="text-sm font-medium text-foreground">
                {entry.degree}
              </p>
              <p className="text-sm text-muted-foreground">
                {entry.institution} · {entry.period}
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {entry.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
