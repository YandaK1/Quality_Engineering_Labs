import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/index.html');
 await page.getByTestId('reset-btn').click();
await expect(page.getByText(/\$1000|\$1,000/)).toBeVisible({ timeout: 10000 });
}); 