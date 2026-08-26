import { heroMetrics } from "@/data/portfolio";

export function MetricsStrip() {
  return (
    <section
      aria-label="Engineering metrics"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Professional experience outcomes
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <dt className="order-2 text-sm text-muted-foreground">
                {metric.label}
              </dt>
              <dd className="order-1 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
