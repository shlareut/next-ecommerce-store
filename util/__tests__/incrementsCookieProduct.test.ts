import { expect, test } from '@jest/globals';
import { incrementCookieProduct } from '../../app/productDetails/[productId]/functions';

test('increment cookie product', () => {
  const mockCookie = [{ id: 1, quantity: 3 }];
  const mockProduct = {
    id: 1,
    ispublished: true,
    category: 'vehicles',
    condition: 'wrecked',
    image: `/images/1.jpeg`,
    title: 'Rusty bicycle',
    price: 10.0,
    currency: '€',
    isdeal: false,
    details: 'Text',
    quantity: 1,
  };
  const newMockCookie = incrementCookieProduct(mockCookie, mockProduct);
  const newMockCookieQuantity = newMockCookie[0]?.quantity;
  expect(newMockCookieQuantity).toBe(4);
});
