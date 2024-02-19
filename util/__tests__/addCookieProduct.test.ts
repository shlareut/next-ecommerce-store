import { expect, test } from '@jest/globals';
import { addCookieProduct } from '../../app/productDetails/[productId]/functions';
import { CookieCart } from '../types';

test('increment cookie product', () => {
  const mockCookie: CookieCart = [];
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

  const newMockCookie = addCookieProduct(mockCookie, mockProduct);
  const newMockCookieQuantity = newMockCookie[0]?.quantity;
  expect(newMockCookieQuantity).toBe(1);
});
