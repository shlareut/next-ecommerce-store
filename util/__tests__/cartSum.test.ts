import { expect, test } from '@jest/globals';
import { cartSum } from '../../app/cart/functions';

test('add product 1 subtotal + product 2 subtotal to equal cart total', () => {
  expect(
    cartSum([
      {
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
      },
      {
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
        quantity: 1,
      },
    ]),
  ).toBe(17);
  expect(
    cartSum([
      {
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
        quantity: 2,
      },
      {
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
      },
    ]),
  ).toBe(41);
});
