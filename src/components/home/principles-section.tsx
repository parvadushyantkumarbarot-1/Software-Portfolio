import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { engineeringPrinciples } from "@/data/portfolio";

export function PrinciplesSection() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Engineering principles"
          title="How these projects are built"
          description="The same standards applied to production systems, applied here."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="flex gap-3 rounded-lg border border-border bg-background p-4"
            >
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-success"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
