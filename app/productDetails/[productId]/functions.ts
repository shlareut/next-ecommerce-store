import { CartItem, CookieCart } from '../../../util/types';

export function incrementCookieProduct(
  cookieCart: CookieCart,
  addedProduct: CartItem,
) {
  const newCookie = cookieCart.map((cookieItem) =>
    cookieItem.id === addedProduct.id
      ? {
          ...cookieItem,
          quantity: (cookieItem.quantity += addedProduct.quantity),
        }
      : cookieItem,
  );
  return newCookie;
  // await cookies().set('cart', JSON.stringify(newCookie));
}

export function addCookieProduct(
  cookieCart: CookieCart,
  addedProduct: CartItem,
) {
  const newCookieCart = [...cookieCart];
  newCookieCart.push({
    id: addedProduct.id,
    quantity: addedProduct.quantity,
  });
  return newCookieCart;
  // await cookies().set('cart', JSON.stringify(newCookieCart));
}
