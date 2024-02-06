'use client';
import Cookies from 'js-cookie';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './CartButton.module.scss';

export default function CartButton(props) {
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <button
        className={styles.button}
        onClick={() => {
          // if an existing item, count is incremented
          if (cart.some((item) => item.id === props.productId)) {
            const newCart = cart.map((item) =>
              item.id === props.productId
                ? { ...item, quantity: (item.quantity += 1) }
                : item,
            );
            Cookies.set('cart', JSON.stringify(newCart));
            setCart(newCart);
          } else {
            // if a new item, it's added to the array
            const newCart = [...cart];
            newCart.push({
              id: props.productId,
              title: props.productTitle,
              condition: props.productCondition,
              category: props.productCategory,
              image: props.productImage,
              price: props.productPrice,
              currency: props.productCurrency,
              quantity: 1,
            });
            Cookies.set('cart', JSON.stringify(newCart));
            setCart(newCart);
          }
        }}
      >
        Add to cart
      </button>
    </>
  );
}
