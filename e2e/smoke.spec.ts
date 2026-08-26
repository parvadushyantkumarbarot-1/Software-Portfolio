import { test, expect } from "@playwright/test";

test.describe("smoke", () => {
  test("home page renders with no console errors and no photo", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: "Parva Barot" })
    ).toBeVisible();
    await expect(page.getByRole("img")).toHaveCount(0);
    expect(errors).toEqual([]);
  });

  test("navigation reaches the projects archive", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Projects" }).first().click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(
      page.getByRole("heading", { level: 1, name: /honest status/i })
    ).toBeVisible();
  });

  test("project filter narrows the archive", async ({ page }) => {
    await page.goto("/projects");
    const initialCount = await page.locator("article").count();

    await page.getByRole("button", { name: "AI Infrastructure" }).click();
    const filteredCount = await page.locator("article").count();

    expect(filteredCount).toBeGreaterThan(0);
    expect(filteredCount).toBeLessThanOrEqual(initialCount);
  });

  test("a project case study links back to the archive and shows no fabricated Live badge", async ({
    page,
  }) => {
    await page.goto("/projects/rag-platform");
    await expect(
      page.getByRole("heading", { level: 1, name: "RAG Platform" })
    ).toBeVisible();
    await expect(page.getByText("IN DEVELOPMENT")).toBeVisible();
    await expect(page.getByText(/^live$/i)).toHaveCount(0);
  });

  test("resume page shows an honest not-configured state", async ({
    page,
  }) => {
    await page.goto("/resume");
    await expect(
      page.getByText("Résumé file not configured")
    ).toBeVisible();
  });

  test("mobile nav drawer opens and closes with Escape", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.getByLabel("Open navigation menu").click();
    await expect(
      page.getByRole("dialog", { name: "Navigation menu" })
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("dialog", { name: "Navigation menu" })
    ).toHaveCount(0);
  });

  test("theme toggle switches the document theme", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("data-theme", "dark");
    await page.getByRole("button", { name: /switch to light theme/i }).click();
    await expect(html).toHaveAttribute("data-theme", "light");
  });
});
