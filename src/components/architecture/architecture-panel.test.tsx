import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ArchitecturePanel } from "./architecture-panel";
import type { ArchitectureNode } from "@/data/portfolio";

const nodes: ArchitectureNode[] = [
  { id: "a", label: "Client", description: "Client description." },
  { id: "b", label: "Service", description: "Service description." },
  { id: "c", label: "Queue", description: "Queue description." },
];

describe("ArchitecturePanel", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  // This must run first: framer-motion's useReducedMotion lazily reads
  // matchMedia once per process and caches the result, so the override
  // below only takes effect if it happens before any ArchitecturePanel
  // in this file has mounted.
  it("does not animate the flow indicator when reduced motion is preferred", () => {
    const original = window.matchMedia;
    window.matchMedia = (query: string) =>
      ({
        matches: query.includes("prefers-reduced-motion"),
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }) as unknown as MediaQueryList;

    const { container } = render(<ArchitecturePanel nodes={nodes} />);
    expect(container.querySelector(".bg-accent-secondary")).toBeNull();

    window.matchMedia = original;
  });

  it("shows the first node's description by default", () => {
    render(<ArchitecturePanel nodes={nodes} />);
    expect(screen.getByText("Client description.")).toBeInTheDocument();
  });

  it("updates the description panel on keyboard focus", async () => {
    render(<ArchitecturePanel nodes={nodes} />);

    const serviceButton = screen.getByRole("button", { name: "Service" });
    serviceButton.focus();

    expect(await screen.findByText("Service description.")).toBeInTheDocument();
  });
});
