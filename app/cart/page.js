'use client';

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartPage() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div>
      <ul>
        {cart.map((cart) => (
          <li key={cart}>{cart}</li>
        ))}
      </ul>
    </div>
  );
}
