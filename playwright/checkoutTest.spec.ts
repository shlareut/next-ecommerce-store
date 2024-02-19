import { expect, test } from '@playwright/test';

test('add product and checkout', async ({ page }) => {
  // add product
  await page.goto('/productDetails/3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.goto('/cart');
  await expect(
    page.locator('div[data-test-id="cart-product-3"]'),
  ).toBeVisible();
  await expect(page.locator('img[alt="product"]')).toBeVisible();
  await expect(page.getByText('Qty:')).toBeVisible();
  await expect(
    page.locator('span[data-test-id="cart-product-quantity-3"]'),
  ).toHaveText(['1']);

  // checkout
  await page.getByRole('link', { name: 'Checkout' }).click();
  await expect(page).toHaveURL(/.*checkout/);
  await expect(page.getByRole('heading', { name: 'Checkout' })).toBeVisible();

  // fill checkout form fields
  await page
    .locator('input[data-test-id="checkout-first-name"]')
    .fill('Mickey');
  await page.locator('input[data-test-id="checkout-last-name"]').fill('Mouse');
  await page
    .locator('input[data-test-id="checkout-email"]')
    .fill('mickey@email.com');
  await page
    .locator('input[data-test-id="checkout-address"]')
    .fill('Quackstreet 123');
  await page
    .locator('input[data-test-id="checkout-postal-code"]')
    .fill('12345678');
  await page.locator('input[data-test-id="checkout-city"]').fill('Duckburg');
  await page.locator('input[data-test-id="checkout-country"]').fill('Duckland');
  await page
    .locator('input[data-test-id="checkout-credit-card"]')
    .fill('123456789');
  await page
    .locator('input[data-test-id="checkout-expiration-date"]')
    .fill('1234');
  await page
    .locator('input[data-test-id="checkout-security-code"]')
    .fill('123');

  // submit form
  await page.getByRole('button', { name: 'Submit' }).click();

  // check checkout url
  await expect(page).toHaveURL(/.*purchaseCompleted/);
  await expect(
    page.getByRole('heading', { name: 'Thank you for your order' }),
  ).toBeVisible();
});
