import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceCard } from "@/components/experience/experience-card";

export function ExperienceSection() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Professional experience"
            title="Engineering impact, anonymized by design"
            description="Roles are presented by engineering domain rather than employer name."
          />
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-accent-secondary hover:underline"
          >
            Full experience
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {experience.map((entry) => (
            <ExperienceCard key={entry.id} entry={entry} metricsLimit={3} />
          ))}
        </div>
      </div>
    </section>
  );
}
