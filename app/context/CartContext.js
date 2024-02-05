'use client';

import Cookies from 'js-cookie';
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // LOCALSTORAGE TEST
  const localStorageCart = JSON.parse(window.localStorage.getItem('cart'));
  const cartCookie = Cookies.get('cart');
  const cookieCart = cartCookie ? JSON.parse(cartCookie) : [];
  const [cart, setCart] = useState(cookieCart);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
