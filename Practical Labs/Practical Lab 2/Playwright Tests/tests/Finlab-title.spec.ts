import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/index.html');
  await expect(page).toHaveTitle(/Finlab/i);

});  