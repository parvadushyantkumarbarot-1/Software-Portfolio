import type { ExperienceEntry } from "@/data/portfolio";
import { TechChip } from "@/components/ui/tech-chip";

export function ExperienceCard({
  entry,
  metricsLimit,
}: {
  entry: ExperienceEntry;
  metricsLimit?: number;
}) {
  const metrics = metricsLimit ? entry.metrics.slice(0, metricsLimit) : entry.metrics;

  return (
    <article className="rounded-lg border border-border bg-surface p-6 sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-serif text-xl font-semibold text-foreground">
          {entry.roleLabel}
        </h3>
        <span className="font-mono text-xs text-muted-foreground">
          {entry.period}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {entry.summary}
      </p>

      <ul className="mt-4 flex flex-col gap-2">
        {entry.impact.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm leading-relaxed text-foreground/90"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-secondary"
            />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-5 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col">
            <span className="font-serif text-xl font-semibold text-foreground">
              {metric.value}
            </span>
            <span className="text-xs leading-snug text-muted-foreground">
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {entry.stack.map((tech) => (
          <TechChip key={tech}>{tech}</TechChip>
        ))}
      </div>
    </article>
  );
}
