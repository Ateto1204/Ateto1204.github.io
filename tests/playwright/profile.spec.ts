import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
    await page.goto("https://ateto1204.github.io/");

    await expect(page).toHaveTitle(/Dong-Yi Su/);
});

test("has profile img", async ({ page }) => {
    await page.goto("https://ateto1204.github.io/");

    await page.getByRole("img", { name: "蘇東毅" }).click();
});

test("has title name and profile subtitle", async ({ page }) => {
    await page.goto("https://ateto1204.github.io/");

    await expect(
        page.getByRole("heading", { name: "Dong-Yi Su" })
    ).toBeVisible();
    await expect(
        page.getByRole("heading", { name: /Software Engineer/i }).first()
    ).toBeVisible();
});

test("has profile text paragraph", async ({ page }) => {
    await page.goto("https://ateto1204.github.io/");

    await page.getByText("This is Dong-Yi Su aka Ateto").click();
    await page.getByText("My domains of expertise include").click();
});

test("has contact icon", async ({ page }) => {
    await page.goto("https://ateto1204.github.io/");

    const githubPopup = page.waitForEvent("popup");
    await page.locator('a[href*="github.com"]').first().click();
    await githubPopup;

    const href = await page
        .locator('a[href^="mailto:"]')
        .first()
        .getAttribute("href");
    expect(href).toContain("mailto:");

    const otherPopup = page.waitForEvent("popup");
    await page.locator('a[href*="linkedin.com"]').first().click();
    await otherPopup;
});

test("exp page", async ({ page }) => {
    await page.goto("https://ateto1204.github.io/");

    await page
        .locator("section")
        .filter({ hasText: "Experience Jul2024 -" })
        .locator("path")
        .nth(0)
        .click();
    await page.getByRole("heading", { name: "Experience" }).click();

    await page.locator(".w-9 > path:nth-child(2)").click();
    await page.locator(".w-9 > path").click();
});

test("has language switching btn", async ({ page }) => {
    await page.goto("https://ateto1204.github.io/");

    await page.getByRole("button", { name: "中" }).click();
    await page.getByRole("button", { name: "En" }).click();
});
