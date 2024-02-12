'use server';

import { cookies } from 'next/headers';

export async function removeCookieCart() {
  const newProducts = [];
  await cookies().set('cart', JSON.stringify(newProducts));
}
