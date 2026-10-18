const { test, expect } = require('@playwright/test');

test('valid login opens the search page', async ({ page }) => {
  await page.goto('./');
  await page.fill('#email', 'qa@test.com');
  await page.fill('#password', 'pass123');
  await page.click('#login-btn');
  await expect(page).toHaveURL(/search.html/);
});

test('wrong password shows an error', async ({ page }) => {
  await page.goto('./');
  await page.fill('#email', 'qa@test.com');
  await page.fill('#password', 'wrong');
  await page.click('#login-btn');
  await expect(page.locator('#login-error')).toHaveText('Invalid credentials');
});
