import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TechChip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface-raised px-2 py-1 font-mono text-[11px] leading-none text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
