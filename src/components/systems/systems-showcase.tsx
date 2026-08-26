import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { systemArchitecture, architecturePrinciples } from "@/data/portfolio";
import { ArchitecturePanel } from "@/components/architecture/architecture-panel";
import { SectionHeading } from "@/components/ui/section-heading";

export function SystemsShowcase({
  linkToFullPage = false,
}: {
  linkToFullPage?: boolean;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Interactive system design"
            title="How the pieces fit together"
            description="A representative architecture shaped by the systems I've built professionally — not a specific production deployment."
          />
          {linkToFullPage && (
            <Link
              href="/systems"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-accent-secondary hover:underline"
            >
              Systems deep dive
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>

        <div className="mt-10">
          <ArchitecturePanel nodes={systemArchitecture} />
        </div>

        <div className="mt-8 rounded-lg border border-border bg-background p-5 sm:p-6">
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Why this architecture matters
          </h3>
          <dl className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {architecturePrinciples.map((principle) => (
              <div key={principle.title}>
                <dt className="font-mono text-xs uppercase tracking-wide text-accent-secondary">
                  {principle.title}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
