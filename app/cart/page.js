'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './page.module.scss';

export default function CartPage() {
  const { cart, setCart } = useContext(CartContext);
  const sum = cart.reduce((accumulator, item) => {
    return (accumulator += item.price);
  }, 0);
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.productWrapper}>
        {!cart.length
          ? 'Cart is empty'
          : cart.map((cart) => (
              <div className={styles.productCard} key={`Product-${cart.id}`}>
                <Image
                  className={styles.productImage}
                  alt="product"
                  src={cart.image}
                  width={150}
                  height={150}
                />
                <div className={styles.productDetails}>
                  <div className={styles.productTitle}>{cart.title}</div>
                  <div className={styles.productProperties}>
                    <span className={styles.productCondition}>
                      {cart.condition}
                    </span>{' '}
                    {cart.category}
                  </div>
                  <div className={styles.productPrice}>
                    {cart.price}
                    {cart.currency}
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className={styles.cartTotal}>
        {!cart.length ? '' : `Total: ${sum}€`}
      </div>
    </div>
  );
}
