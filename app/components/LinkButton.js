'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './LinkButton.module.scss';

export default function LinkButton(props) {
  const { cart } = useContext(CartContext);
  return (
    <div className={styles[props.variant]}>
      <Link href={props.href}>
        {props.text}
        {props.variant === 'cart' ? ` (${cart.length})` : ''}
      </Link>
    </div>
  );
}
