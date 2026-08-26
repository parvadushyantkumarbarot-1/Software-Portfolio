import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./hero";
import { WhatIWorkOn } from "./what-i-work-on";
import { ExperienceSection } from "./experience-section";
import { FeaturedProjects } from "./featured-projects";
import { SkillsSection } from "./skills-section";
import { PrinciplesSection } from "./principles-section";
import { EducationSection } from "./education-section";
import { ContactCta } from "./contact-cta";
import { site } from "@/data/portfolio";

describe("home page sections render without errors", () => {
  it("renders the hero with the site name and no fabricated photo", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1, name: site.name })).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });

  it("renders the remaining static home sections cleanly", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <>
        <WhatIWorkOn />
        <ExperienceSection />
        <FeaturedProjects />
        <SkillsSection />
        <PrinciplesSection />
        <EducationSection />
        <ContactCta />
      </>
    );

    expect(screen.getByText("What I work on")).toBeInTheDocument();
    expect(screen.getByText("Featured projects")).toBeInTheDocument();
    expect(screen.queryByText(/linkedin/i)).not.toBeInTheDocument();
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });
});
