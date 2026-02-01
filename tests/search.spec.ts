import { test, expect } from "@playwright/test";

test.describe("Search Functionality", () => {
  test("should update URL query param on search and clear it on reset", async ({
    page,
  }) => {
    // 1. Navigate to home page
    await page.goto("/");

    // 2. Type in search input
    const searchInput = page.getByTestId("search-input");
    await expect(searchInput).toBeVisible();
    await searchInput.fill("test service");

    // 3. Verify URL update after debounce (650ms)
    // We wait a bit more than the debounce time to be safe
    await expect(page).toHaveURL(/.*q=test[\+]?service/);

    // 4. Verify clear button appears and works
    const clearButton = page.locator("button:has(svg.lucide-x)"); // Identifying button by the X icon
    await expect(clearButton).toBeVisible();
    await clearButton.click();

    // 5. Verify input is empty and query param removed
    await expect(searchInput).toBeEmpty();
    await expect(page).not.toHaveURL(/.*q=test/);
  });
});
// npx playwright test --headed tests/search.spec.ts 

