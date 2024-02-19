import { expect, test } from '@jest/globals';
import { cookies } from 'next/headers';
import { incrementCookieProduct } from '../../app/productDetails/[productId]/actions';
import { getCookie } from '../cookies';

// Can I somehow mock the cookie?

test('should first', async () => {
  const mockCookie = [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 4 },
  ];
  const addedProduct = {
    id: 2,
    ispublished: true,
    category: 'publications',
    condition: 'abandoned',
    image: `/images/2.jpeg`,
    title: 'Old newspapers',
    price: 7.0,
    currency: '€',
    isdeal: false,
    details: 'Text',
    quantity: 3,
  };
  cookies().set('cart', JSON.stringify(mockCookie));
  const cookie = getCookie('cart');
  const cookieCart = JSON.parse(cookie);
  await incrementCookieProduct(cookieCart, addedProduct);
  const updatedCookie = getCookie('cart');
  const updatedCookieCart = JSON.parse(updatedCookie);
  const updatedCookieCartItem = updatedCookieCart[1].quantity;
  expect(updatedCookieCartItem).toBe(7);
});
