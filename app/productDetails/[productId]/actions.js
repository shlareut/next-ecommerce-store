'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';

export async function updateCookie(addedProduct) {
  const cookie = getCookie('cart');
  const products = !cookie ? [] : JSON.parse(cookie);
  // check whether product exists and increment quantity if yes.
  if (products.some((item) => item.id === addedProduct.id)) {
    const newProducts = products.map((item) =>
      item.id === addedProduct.id
        ? { ...item, quantity: (item.quantity += addedProduct.quantity) }
        : item,
    );
    await cookies().set('cart', JSON.stringify(newProducts));
  } else {
    // else, add product with initial quantity.
    const newProducts = [...products];
    newProducts.push(addedProduct);
    await cookies().set('cart', JSON.stringify(newProducts));
  }
}
