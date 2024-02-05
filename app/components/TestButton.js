'use client';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { CartContext } from '../context/CartContext';
import styles from './TestButton.module.scss';

export default function TestButton(props) {
  const { cart } = useContext(CartContext);
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
            return <button className={styles.removeCartItem}>✖️</button>;
          default:
            return <button>Empty button</button>;
        }
      })()}
      <ToastContainer />
    </>
  );
}
