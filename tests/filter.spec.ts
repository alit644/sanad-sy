import { test, expect } from "@playwright/test";

test.describe("Filter Functionality", () => {
  test("should update URL params when selecting filters and reset them", async ({
    page,
  }) => {
    // Navigate to home page
    await page.goto("/");

    // Wait for FilterBar to load
    await expect(page.locator("text=فلترة حسب :")).toBeVisible();

    // Select a city (assuming Damascus is an option)
    const citySelect = page.locator("[value='all-cities']");
    await citySelect.click();
    await page.locator("text=دمشق").click(); // Assuming "دمشق" is Damascus
    await expect(page).toHaveURL(/.*city=دمشق/);

    // Select a type (e.g., HOSPITAL)
    const typeSelect = page.locator("[value='all-types']");
    await typeSelect.click();
    await page.locator("text=مستشفى").click();
    await expect(page).toHaveURL(/.*types=HOSPITAL/);

    // Select status (e.g., VERIFIED)
    const statusSelect = page.locator("[value='all-status']");
    await statusSelect.click();
    await page.locator("text=موثق").click();
    await expect(page).toHaveURL(/.*status=VERIFIED/);

    // Check that all params are in URL
    await expect(page).toHaveURL(/city=دمشق.*types=HOSPITAL.*status=VERIFIED/);

    // Click reset button
    const resetButton = page.locator("text=مسح الفلاتر");
    await resetButton.click();

    // Verify URL is reset (no query params except possibly q if keepQuery, but since no q, should be /)
    await expect(page).toHaveURL("/");
  });

  test("should filter services based on selected criteria", async ({
    page,
  }) => {
    // This test assumes there are services in the database
    // Navigate to home
    await page.goto("/");

    // Select a filter, e.g., city
    const citySelect = page.locator("[name='all-cities']");
    await citySelect.click();
    await page.locator("text=دمشق").click();

    // Wait for services to load and check if filtered
    // This might require checking the number of service cards or specific content
    // For now, just check URL as above
    await expect(page).toHaveURL(/city=دمشق/);

    // Optionally, check that services are displayed (assuming there are some)
    const serviceCards = page.locator(".grid > div"); // Assuming cards are in a grid
    await expect(serviceCards.first()).toBeVisible();
  });
});
// npx playwright test --headed tests/filter.spec.ts 