import { expect, test } from '@playwright/test';

test('add product and checkout', async ({ page }) => {
  // add product to cart
  await page.goto('/');
  const productCard = await page.locator('img[alt="product"]').first();
  await productCard.click();
  const addButton = await page.getByRole('button', { name: 'Add' });
  await addButton.click();

  // go to cart and check if item is visible
  const cartLink = await page.getByRole('link', { name: '🛒' });
  await cartLink.click();
  const cartProduct = await page.locator('img[alt="product"]').first();
  await expect(cartProduct).toBeVisible();
  const productQuantity = await page
    .locator('span[aria-label="productQuantity"]')
    .first();
  await expect(productQuantity).toHaveText(['1']);

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
