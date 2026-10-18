const { test, expect } = require('@playwright/test');

for (const p of ['./', './search.html', './checkout.html']) {
  test(`smoke: ${p} loads`, async ({ page }) => {
    const res = await page.goto(p);
    expect(res.status()).toBe(200);
  });
}
