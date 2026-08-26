import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="mt-8 flex flex-col gap-4">
          {education.map((entry) => (
            <div
              key={entry.degree}
              className="flex flex-col gap-3 rounded-lg border border-border bg-background p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex gap-3">
                <GraduationCap
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent-secondary"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {entry.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {entry.institution}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 font-mono text-xs text-muted-foreground sm:text-right">
                <span>{entry.period}</span>
                <span>{entry.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
