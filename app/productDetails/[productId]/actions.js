'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';

export async function updateCookie(addedProduct) {
  const cookie = getCookie('cart');
  const cookieCart = !cookie ? [] : JSON.parse(cookie);
  // check whether product exists and increment quantity if yes.
  if (cookieCart.some((item) => item.id === addedProduct.id)) {
    // const newProducts = products.map((item) =>
    //   item.id === addedProduct.id
    //     ? { ...item, quantity: (item.quantity += addedProduct.quantity) }
    //     : item,
    // );
    // await cookies().set('cart', JSON.stringify(newProducts));
    await incrementCookieProduct(cookieCart, addedProduct);
  } else {
    // else, add product with initial quantity.
    // const newProducts = [...products];
    // newProducts.push({ id: addedProduct.id, quantity: addedProduct.quantity });
    // await cookies().set('cart', JSON.stringify(newProducts));
    await addCookieProduct(cookieCart, addedProduct);
  }
}

// Need to add another cookie function here

export async function incrementCookieProduct(cookieCart, addedProduct) {
  const newCookie = cookieCart.map((cookieItem) =>
    cookieItem.id === addedProduct.id
      ? {
          ...cookieItem,
          quantity: (cookieItem.quantity += addedProduct.quantity),
        }
      : cookieItem,
  );
  await cookies().set('cart', JSON.stringify(newCookie));
}

export async function addCookieProduct(cookieCart, addedProduct) {
  const newCookieCart = [...cookieCart];
  newCookieCart.push({ id: addedProduct.id, quantity: addedProduct.quantity });
  await cookies().set('cart', JSON.stringify(newCookieCart));
}
