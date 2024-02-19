'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { addCookieProduct, incrementCookieProduct } from './functions';

export async function updateCookie(addedProduct) {
  const cookie = getCookie('cart');
  const cookieCart = !cookie ? [] : JSON.parse(cookie);
  // check whether product exists and increment quantity if yes.
  if (cookieCart.some((item) => item.id === addedProduct.id)) {
    const newCookie = await incrementCookieProduct(cookieCart, addedProduct);
    await cookies().set('cart', JSON.stringify(newCookie));
  } else {
    // else, add product with initial quantity.
    const newCookie = await addCookieProduct(cookieCart, addedProduct);
    await cookies().set('cart', JSON.stringify(newCookie));
  }
}

// export async function incrementCookieProduct(cookieCart, addedProduct) {
//   const newCookie = await cookieCart.map((cookieItem) =>
//     cookieItem.id === addedProduct.id
//       ? {
//           ...cookieItem,
//           quantity: (cookieItem.quantity += addedProduct.quantity),
//         }
//       : cookieItem,
//   );
//   return newCookie;
//   // await cookies().set('cart', JSON.stringify(newCookie));
// }

// export async function addCookieProduct(cookieCart, addedProduct) {
//   const newCookieCart = [...cookieCart];
//   await newCookieCart.push({
//     id: addedProduct.id,
//     quantity: addedProduct.quantity,
//   });
//   return newCookieCart;
//   // await cookies().set('cart', JSON.stringify(newCookieCart));
// }
