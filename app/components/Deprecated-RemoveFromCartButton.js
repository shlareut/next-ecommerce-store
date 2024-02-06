'use client';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { CartContext } from '../context/CartContext';

export default function RemoveFromCartButton(props) {
  const { cart, setCart } = useContext(CartContext);
  const notify = () =>
    toast('Product removed from cart!', {
      position: 'bottom-right',
    });
  // NOT USED ANYMORE
  return (
    <>
      <button
        onClick={() => {
          const newCart = cart.filter((item) => item.id !== props.productId);
          console.log(newCart);
          setCart(newCart);
          notify();
        }}
      >
        Remove from cart
      </button>
      <ToastContainer />
    </>
  );
}
