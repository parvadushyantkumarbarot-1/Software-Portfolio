import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "next-themes";
import { SiteNav } from "./site-nav";

vi.mock("next/navigation", () => ({
  usePathname: () => "/projects",
}));

function renderNav() {
  return render(
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      <SiteNav />
    </ThemeProvider>
  );
}

describe("SiteNav", () => {
  it("renders every primary nav item", () => {
    renderNav();
    for (const label of [
      "Home",
      "Experience",
      "Projects",
      "Systems",
      "Skills",
      "Contact",
    ]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
  });

  it("marks the current route as active via aria-current", () => {
    renderNav();
    const links = screen.getAllByRole("link", { name: "Projects" });
    expect(links.some((link) => link.getAttribute("aria-current") === "page")).toBe(
      true
    );
  });

  it("opens and closes the mobile drawer, including via Escape", async () => {
    const user = userEvent.setup();
    renderNav();

    await user.click(screen.getByLabelText("Open navigation menu"));
    expect(screen.getByRole("dialog", { name: "Navigation menu" })).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog", { name: "Navigation menu" })).not.toBeInTheDocument();
  });

  it("does not render a LinkedIn link anywhere in the nav", () => {
    renderNav();
    expect(screen.queryByText(/linkedin/i)).not.toBeInTheDocument();
  });
});
