'use client';

import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {

  // LOCALSTORAGE TEST
  const localStorageCart = JSON.parse(window.localStorage.getItem('cart'));
  const [cart, setCart] = useState(localStorageCart);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
