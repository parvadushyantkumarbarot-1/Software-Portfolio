import type { Metadata } from "next";
import { SystemsShowcase } from "@/components/systems/systems-showcase";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "An interactive look at the architecture patterns behind Parva Barot's backend and AI infrastructure work: decoupling, async processing, caching, and observability.",
  alternates: { canonical: "/systems" },
};

export default function SystemsPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
          Systems
        </p>
        <h1 className="mt-2 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          System design, made explorable
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          This is a preview of the architecture shape behind the professional
          work described on this site — not a specific live deployment.
        </p>
      </div>
      <div className="mt-8">
        <SystemsShowcase />
      </div>
    </div>
  );
}
