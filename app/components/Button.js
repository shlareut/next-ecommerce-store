'use client';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './Button.module.scss';

// OLD BUTTON COMPONENT THAT NEEDS REFACTORING -> LINKBUTTON IS NEWER

export default function Button(props) {
  const { cart } = useContext(CartContext);
  return (
    <button className={styles[props.variant]}>
      {props.text}
      {props.variant === 'cart' ? ` (${cart.length})` : ''}
    </button>
  );
}
