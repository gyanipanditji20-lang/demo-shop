const { test, expect } = require('@playwright/test');

test('checkout shows the total and places the order', async ({ page }) => {
  await page.goto('./checkout.html');
  await expect(page.locator('#total')).toHaveText('Total: $100');
  await page.click('#place-order');
  await expect(page.locator('#order-msg')).toHaveText('Order placed!');
});
