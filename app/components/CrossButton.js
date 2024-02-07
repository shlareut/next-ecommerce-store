'use client';
import React from 'react';
import { toast } from 'react-toastify';
import styles from './CrossButton.module.scss';

export default function CrossButton() {
  const sentErrorToast = () => toast.error('Does not work yet');
  return (
    <button
      className={styles.style}
      onClick={() => {
        sentErrorToast();
        // const newCart = cart.filter(
        //   (cartItem) => cartItem.id !== props.itemId,
        // );
        // Cookies.set('cart', JSON.stringify(newCart));
        // setCart(newCart);
      }}
    >
      ✖️
    </button>
  );
}
