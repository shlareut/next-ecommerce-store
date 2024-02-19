import { expect, test } from '@playwright/test';

test('add and remove products', async ({ page }) => {
  await page.goto('/productDetails/3');

  // Add product
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

  // Increase quantity of product
  await page.goto('/productDetails/3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.goto('/cart');
  await expect(
    page.locator('span[data-test-id="cart-product-quantity-3"]'),
  ).toHaveText(['2']);

  // remove product
  await page.locator('button[data-test-id="cart-product-remove-3"]').click();
  await expect(page.locator('div[data-test-id="cart-product-3"]')).toBeHidden();
});
