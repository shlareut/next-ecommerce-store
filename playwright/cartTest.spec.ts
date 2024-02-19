import { expect, test } from '@playwright/test';

test('add and remove products', async ({ page }) => {
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

  // increase product quantity
  await page.goto('/');
  await productCard.click();
  await addButton.click();

  // go to cart and check product quantity
  await cartLink.click();
  await expect(cartProduct).toBeVisible();
  await expect(productQuantity).toHaveText(['2']);

  // remove product from cart
  const removeButton = await page
    .locator('button[aria-label="crossButton"]')
    .first();
  await removeButton.click();

  // verify that cart is empty
  const emptyCartMessage = await page.locator(
    'p[aria-label="emptyCartMessage"]',
  );
  await expect(emptyCartMessage).toBeVisible();

  // await page.goto('/productDetails/3');
  // // Add product
  // await page.getByRole('button', { name: 'Add' }).click();
  // await page.goto('/cart');
  // await expect(
  //   page.locator('div[data-test-id="cart-product-3"]'),
  // ).toBeVisible();
  // await expect(page.locator('img[alt="product"]')).toBeVisible();
  // await expect(page.getByText('Qty:')).toBeVisible();
  // await expect(
  //   page.locator('span[data-test-id="cart-product-quantity-3"]'),
  // ).toHaveText(['1']);
  // // Increase quantity of product
  // await page.goto('/productDetails/3');
  // await page.getByRole('button', { name: 'Add' }).click();
  // await page.goto('/cart');
  // await expect(
  //   page.locator('span[data-test-id="cart-product-quantity-3"]'),
  // ).toHaveText(['2']);
  // // remove product
  // await page.locator('button[data-test-id="cart-product-remove-3"]').click();
  // await expect(page.locator('div[data-test-id="cart-product-3"]')).toBeHidden();
});
