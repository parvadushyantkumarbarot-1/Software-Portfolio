import { skillGroups } from "@/data/portfolio";
import { TechChip } from "@/components/ui/tech-chip";

export function SkillsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group) => (
        <div
          key={group.name}
          className="rounded-lg border border-border bg-surface p-5"
        >
          <h3 className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
            {group.name}
          </h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <TechChip key={skill}>{skill}</TechChip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
