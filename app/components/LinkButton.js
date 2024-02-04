'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './LinkButton.module.scss';

export default function LinkButton(props) {
  const { cart } = useContext(CartContext);
  // LOCALSTORAGE TEST BELOW
  const localStorageCart = JSON.parse(window.localStorage.getItem('cart'));
  const itemCount = cart.reduce((accumulator, item) => {
    return (accumulator += item.quantity);
  }, 0);
  return (
    <Link href={props.href}>
      <div className={styles[props.variant]}>
        {props.text}
        {props.variant === 'cart' ? ` (${itemCount})` : ''}
      </div>
    </Link>
  );
}
