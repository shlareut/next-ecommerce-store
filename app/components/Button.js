'use client';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { CartContext } from '../context/CartContext';
import styles from './Button.module.scss';

export default function Button(props) {
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      {(() => {
        switch (props.type) {
          case 'cartLink': {
            const itemCount = cart.reduce((accumulator, item) => {
              return (accumulator += item.quantity);
            }, 0);
            return (
              <Link href="/cart">
                <div className={styles.primary}>Cart {`(${itemCount})`}</div>
              </Link>
            );
          }
          case 'link':
            return (
              <Link href={props.to}>
                <div className={styles.secondary}>
                  {props.to !== '/' ? props.to.slice(1) : 'products'}
                </div>
              </Link>
            );
          case 'addCartItem':
            return (
              <button
                className={styles.primary}
                onClick={() =>
                  toast.success('Item added to cart!', {
                    position: 'bottom-right',
                  })
                }
              >
                Add to cart
              </button>
            );
          case 'removeCartItem':
            return (
              <button
                className={styles.removeCartItem}
                onClick={() => {
                  const newCart = cart.filter(
                    (cartItem) => cartItem.id !== props.itemId,
                  );
                  Cookies.set('cart', JSON.stringify(newCart));
                  setCart(newCart);
                }}
              >
                ✖️
              </button>
            );
          default:
            return <button>Empty button</button>;
        }
      })()}
      <ToastContainer />
    </>
  );
}
