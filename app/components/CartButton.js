'use client';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './CartButton.module.scss';

export default function CartButton(props) {
  const { cart, setCart } = useContext(CartContext);
  return (
    <button
      className={styles.button}
      onClick={() => {
        const newCart = [...cart];
        newCart.push({
          id: props.productId,
          title: props.productTitle,
          condition: props.productCondition,
          category: props.productCategory,
          image: props.productImage,
          price: props.productPrice,
          currency: props.productCurrency,
        });
        // Testing out local storage below
        window.localStorage.setItem('cart', JSON.stringify(newCart));
        // END TEST
        setCart(newCart);
      }}
    >
      Add to cart
    </button>
  );
}
