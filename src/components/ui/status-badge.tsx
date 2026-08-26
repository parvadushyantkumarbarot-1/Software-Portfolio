import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/data/portfolio";

const statusStyles: Record<ProjectStatus, string> = {
  "Active Development": "bg-accent-soft text-accent border-accent/40",
  "In Development": "bg-surface-raised text-accent-secondary border-accent-secondary/40",
  "Planned Rebuild": "bg-surface-raised text-muted-foreground border-border",
};

const statusDot: Record<ProjectStatus, string> = {
  "Active Development": "bg-success",
  "In Development": "bg-accent-secondary",
  "Planned Rebuild": "bg-muted-foreground",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wide",
        statusStyles[status]
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", statusDot[status])}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}
