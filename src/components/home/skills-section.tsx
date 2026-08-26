import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillsGrid } from "@/components/skills/skills-grid";

export function SkillsSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Technical skills"
            title="Grouped by engineering responsibility"
            description="Not a logo wall — skills organized the way they're actually used in a system."
          />
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-accent-secondary hover:underline"
          >
            All skills
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10">
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
}
