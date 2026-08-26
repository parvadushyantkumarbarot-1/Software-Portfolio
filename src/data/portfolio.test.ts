import { describe, expect, it } from "vitest";
import {
  projects,
  getProjectBySlug,
  getFeaturedProjects,
  getAdjacentProjects,
  PROJECT_CATEGORIES,
} from "./portfolio";

describe("portfolio data integrity", () => {
  it("has a unique slug for every project", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("only categorizes projects using the declared category list", () => {
    for (const project of projects) {
      for (const category of project.categories) {
        expect(PROJECT_CATEGORIES).toContain(category);
      }
    }
  });

  it("resolves a project by slug", () => {
    const project = getProjectBySlug("rag-platform");
    expect(project?.title).toBe("RAG Platform");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProjectBySlug("does-not-exist")).toBeUndefined();
  });

  it("marks exactly the four highest-priority projects as featured", () => {
    const featured = getFeaturedProjects();
    expect(featured).toHaveLength(4);
    expect(featured.map((project) => project.slug)).toEqual([
      "rag-platform",
      "multi-agent-workflow-automation",
      "llm-evaluation-monitoring-platform",
      "ev-commerce-platform",
    ]);
  });

  it("has no previous project for the first entry and no next for the last", () => {
    const first = projects[0];
    const last = projects[projects.length - 1];
    expect(getAdjacentProjects(first.slug).previous).toBeNull();
    expect(getAdjacentProjects(last.slug).next).toBeNull();
  });

  it("only reports project-level metrics when explicitly provided", () => {
    for (const project of projects) {
      if (project.metrics) {
        expect(project.metrics.length).toBeGreaterThan(0);
      }
    }
  });
});
