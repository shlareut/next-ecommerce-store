'use client';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function RemoveFromCartButton(props) {
  const { cart, setCart } = useContext(CartContext);
  return (
    <button
      onClick={() => {
        const newCart = cart.filter((item) => item.id !== props.productId);
        console.log(newCart);
        // Testing out local storage below
        window.localStorage.setItem('cart', JSON.stringify(newCart));
        // END TEST
        setCart(newCart);
      }}
    >
      Remove from cart
    </button>
  );
}
