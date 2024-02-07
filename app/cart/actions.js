'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';

export async function removeCookieItem(removedProduct) {
  const cookie = getCookie('cart');
  const products = !cookie ? [] : JSON.parse(cookie);
  const newProducts = products.filter((item) => item.id !== removedProduct.id);
  await cookies().set('cart', JSON.stringify(newProducts));
}
