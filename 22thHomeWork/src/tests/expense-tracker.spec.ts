import { test, expect } from '@playwright/test';

test('App loads', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'http://localhost:3000');
  await expect(page).toHaveTitle(/Expense Tracker/i);
});

test('Add new expense', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'http://localhost:3000');
  
  await page.fill('input[name="title"]', 'Coffee');
  await page.fill('input[name="amount"]', '5');
  await page.click('button:has-text("Add Expense")');

  await expect(page.locator('text=Coffee')).toBeVisible();
  await expect(page.locator('text=$5')).toBeVisible();
});
