import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProjectsArchive } from "./projects-archive";
import type { Project, ProjectCategory } from "@/data/portfolio";

function makeProject(overrides: Partial<Project>): Project {
  return {
    slug: "sample",
    title: "Sample Project",
    shortDescription: "A sample project.",
    longDescription: "A longer sample project description.",
    status: "In Development",
    categories: ["Backend"],
    stack: ["Python"],
    problem: "Problem",
    goals: ["Goal"],
    architectureSummary: "Summary",
    architectureFlow: [],
    capabilities: ["Capability"],
    engineeringDecisions: [],
    reliabilityConsiderations: [],
    securityConsiderations: [],
    testingStrategy: [],
    observabilityStrategy: [],
    limitations: [],
    roadmap: [],
    featured: false,
    ...overrides,
  };
}

const categories: ProjectCategory[] = ["Backend", "Data", "Cloud"];

const fixtureProjects: Project[] = [
  makeProject({
    slug: "backend-one",
    title: "Backend One",
    categories: ["Backend"],
    githubUrl: "https://github.com/example/backend-one",
    featured: true,
  }),
  makeProject({
    slug: "data-one",
    title: "Data One",
    categories: ["Data"],
    // Deliberately no githubUrl and no liveUrl to test optional-link handling.
  }),
];

describe("ProjectsArchive", () => {
  it("shows every project under the All filter", () => {
    render(
      <ProjectsArchive projects={fixtureProjects} categories={categories} />
    );
    expect(screen.getByText("Backend One")).toBeInTheDocument();
    expect(screen.getByText("Data One")).toBeInTheDocument();
  });

  it("narrows the list when a category filter is selected", async () => {
    const user = userEvent.setup();
    render(
      <ProjectsArchive projects={fixtureProjects} categories={categories} />
    );

    await user.click(screen.getByRole("button", { name: "Data" }));

    expect(screen.getByText("Data One")).toBeInTheDocument();
    expect(screen.queryByText("Backend One")).not.toBeInTheDocument();
  });

  it("shows an empty state when a filter matches nothing", async () => {
    const user = userEvent.setup();
    render(
      <ProjectsArchive projects={fixtureProjects} categories={categories} />
    );

    await user.click(screen.getByRole("button", { name: "Cloud" }));

    expect(
      screen.getByText("No projects in this category yet.")
    ).toBeInTheDocument();
  });

  it("only renders GitHub/live links when configured on the project", () => {
    render(
      <ProjectsArchive projects={fixtureProjects} categories={categories} />
    );

    const backendCard = screen.getByText("Backend One").closest("article");
    const dataCard = screen.getByText("Data One").closest("article");

    expect(
      within(backendCard as HTMLElement).getByLabelText(
        "Open GitHub repository for Backend One"
      )
    ).toBeInTheDocument();
    expect(
      within(dataCard as HTMLElement).queryByLabelText(/GitHub repository/i)
    ).not.toBeInTheDocument();
    expect(
      within(dataCard as HTMLElement).queryByLabelText(/live deployment/i)
    ).not.toBeInTheDocument();
  });

  it("is keyboard operable", async () => {
    const user = userEvent.setup();
    render(
      <ProjectsArchive projects={fixtureProjects} categories={categories} />
    );

    const dataFilter = screen.getByRole("button", { name: "Data" });
    dataFilter.focus();
    await user.keyboard("{Enter}");

    expect(screen.queryByText("Backend One")).not.toBeInTheDocument();
  });
});
