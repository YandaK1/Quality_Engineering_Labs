import { test, expect } from '@playwright/test';

test('login test', async ({page}) => {

  await page.goto('https://quality-engineering-labs.vercel.app/login.html');
  await page.getByLabel('username').fill('admin');
  await page.getByLabel('password').fill('password123');
  await page.getByRole('button',{name:'Sign In'}).click();
 await expect(page).toHaveTitle(/login/i);
});
 