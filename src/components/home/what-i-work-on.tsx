import { Server, Network, Cloud, Workflow, Layers, BrainCircuit } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { focusAreas, type FocusArea } from "@/data/focus-areas";

const icons: Record<FocusArea["icon"], typeof Server> = {
  server: Server,
  network: Network,
  cloud: Cloud,
  workflow: Workflow,
  layers: Layers,
  brain: BrainCircuit,
};

export function WhatIWorkOn() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Focus areas"
          title="What I work on"
          description="Four-plus years spent making backend systems, distributed pipelines, and AI infrastructure reliable enough to run in production."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = icons[area.icon];
            return (
              <div
                key={area.title}
                className="rounded-lg border border-border bg-surface p-5 transition-colors duration-200 hover:bg-surface-raised"
              >
                <Icon
                  className="h-5 w-5 text-accent-secondary"
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
