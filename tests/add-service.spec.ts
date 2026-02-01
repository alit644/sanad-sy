import { test, expect } from '@playwright/test';

test('user can add a new service', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByTestId('add-service-button').click();
  await expect(page).toHaveURL(/\/add-services/);

  await page.getByTestId('service-name').fill('تجربة خدمة جديدة');


  await page.getByTestId('service-area').fill('Test Area');


  await page.getByTestId('service-phone').fill('0912345678');
  await page.getByTestId('service-hours').fill('9 AM - 5 PM');
  await page.getByTestId('service-description')
    .fill('This is a test service description.');

  await page.getByTestId('submit-service').click();

  await expect(
    page.getByText(/تم (إضافة|إرسال) الخدمة/i)
  ).toBeVisible();
});

// npx playwright test --headed tests/add-service.spec.ts 