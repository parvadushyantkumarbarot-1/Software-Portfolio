import type { Metadata } from "next";
import { SkillsGrid } from "@/components/skills/skills-grid";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills grouped by engineering responsibility: languages, backend, distributed systems, cloud infrastructure, databases, AI engineering, and reliability.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
        Technical skills
      </p>
      <h1 className="mt-2 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Grouped by engineering responsibility
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Organized the way these tools are actually used in a system, not as a
        single undifferentiated logo wall.
      </p>

      <div className="mt-10">
        <SkillsGrid />
      </div>
    </div>
  );
}
