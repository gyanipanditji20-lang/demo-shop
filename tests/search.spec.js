const { test, expect } = require('@playwright/test');

test('search finds a matching product', async ({ page }) => {
  await page.goto('./search.html');
  await page.fill('#search-box', 'lap');
  await page.click('#search-btn');
  await expect(page.locator('#results li')).toHaveCount(1);
  await expect(page.locator('#results')).toContainText('Laptop');
});

test('search with no match shows a message', async ({ page }) => {
  await page.goto('./search.html');
  await page.fill('#search-box', 'zzz');
  await page.click('#search-btn');
  await expect(page.locator('#no-results')).toHaveText('No products found');
});
