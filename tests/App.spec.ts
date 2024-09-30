import { test, expect } from "@playwright/test";

test("search itineraries from Anthon to Lyon", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByPlaceholder("Point de départ").click();
  await page.getByPlaceholder("Point de départ").fill("Anthon");
  await page.getByPlaceholder("Point d'arrivée").click();
  await page.getByPlaceholder("Point d'arrivée").fill("Lyon");
  await page
    .getByRole("button", { name: "Rechercher les itinéraires" })
    .click();
  await expect(page.getByText('{ "1": { "color": "#5394cf')).toBeVisible();
});
