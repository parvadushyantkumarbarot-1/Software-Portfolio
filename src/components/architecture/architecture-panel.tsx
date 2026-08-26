"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ArchitectureNode } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ArchitecturePanelProps {
  nodes: ArchitectureNode[];
  label?: string;
  className?: string;
}

export function ArchitecturePanel({
  nodes,
  label = "Architecture Preview",
  className,
}: ArchitecturePanelProps) {
  const [activeId, setActiveId] = useState<string>(nodes[0]?.id ?? "");
  const reduceMotion = useReducedMotion();
  const active = nodes.find((node) => node.id === activeId) ?? nodes[0];

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface p-5 sm:p-6",
        className
      )}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <span
            className="h-1.5 w-1.5 rounded-full bg-success"
            aria-hidden="true"
          />
          Deterministic sample events
        </span>
      </div>

      <ol
        className="flex flex-col gap-0 md:flex-row md:items-stretch md:gap-0"
        aria-label="System architecture flow"
      >
        {nodes.map((node, index) => {
          const isLast = index === nodes.length - 1;
          const isActive = node.id === activeId;
          return (
            <li
              key={node.id}
              className="flex flex-1 flex-col md:flex-row md:items-center"
            >
              <button
                type="button"
                onMouseEnter={() => setActiveId(node.id)}
                onFocus={() => setActiveId(node.id)}
                aria-describedby={`arch-detail-${label.replace(/\s+/g, "-")}`}
                aria-pressed={isActive}
                className={cn(
                  "w-full rounded-md border px-3 py-2.5 text-left text-xs font-medium transition-colors duration-200 md:text-[13px]",
                  isActive
                    ? "border-accent bg-accent-soft text-foreground"
                    : "border-border bg-surface-raised text-muted-foreground hover:text-foreground"
                )}
              >
                {node.label}
              </button>

              {!isLast && (
                <div
                  aria-hidden="true"
                  className="relative my-2 h-4 w-px shrink-0 self-center bg-border md:my-0 md:h-px md:w-6"
                >
                  {!reduceMotion && (
                    <>
                      <motion.span
                        className="absolute left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-secondary md:block"
                        style={{ top: 0 }}
                        animate={{ left: ["0%", "100%"] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.3,
                        }}
                      />
                      <motion.span
                        className="absolute top-0 block h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-secondary md:hidden"
                        style={{ left: "50%" }}
                        animate={{ top: ["0%", "100%"] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.3,
                        }}
                      />
                    </>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div
        id={`arch-detail-${label.replace(/\s+/g, "-")}`}
        aria-live="polite"
        className="mt-5 rounded-md border border-border bg-surface-raised px-4 py-3"
      >
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent-secondary">
          {active?.label}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {active?.description}
        </p>
      </div>
    </div>
  );
}
