import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./theme-toggle";

function renderToggle() {
  return render(
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      <ThemeToggle />
    </ThemeProvider>
  );
}

describe("ThemeToggle", () => {
  it("switches the document theme attribute when clicked", async () => {
    const user = userEvent.setup();
    renderToggle();

    const button = await screen.findByRole("button");
    await user.click(button);

    expect(document.documentElement.getAttribute("data-theme")).toBe("light");

    await user.click(button);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});
