'use client';

import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(['one', 'two', 'three']);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
