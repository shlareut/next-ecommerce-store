'use client';

import Image from 'next/image';
import { useContext } from 'react';
import RemoveFromCartButton from '../components/RemoveFromCartButton';
import { CartContext } from '../context/CartContext';
import styles from './page.module.scss';

export default function CartPage() {
  const { cart, setCart } = useContext(CartContext);
  const sum = cart.reduce((accumulator, item) => {
    return (accumulator += item.price);
  }, 0);
  // LOCALSTORAGE TEST BELOW
  const localStorageCart = JSON.parse(window.localStorage.getItem('cart'));
  console.log(localStorageCart.length);
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.productWrapper}>
        {!cart.length
          ? 'Cart is empty'
          : cart.map((item) => (
              <div className={styles.productCard} key={`Product-${item.id}`}>
                <Image
                  className={styles.productImage}
                  alt="product"
                  src={item.image}
                  width={150}
                  height={150}
                />
                <div className={styles.productDetails}>
                  <div className={styles.productTitle}>{item.title}</div>
                  <div className={styles.productProperties}>
                    <span className={styles.productCondition}>
                      {item.condition}
                    </span>{' '}
                    {item.category}
                  </div>
                  <div className={styles.productPrice}>
                    {item.price}
                    {item.currency}
                  </div>
                </div>
                <button
                  onClick={() => {
                    const newCart = cart.filter(
                      (cartItem) => cartItem.id !== item.id,
                    );
                    setCart(newCart);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
      </div>
      <div className={styles.cartTotal}>
        {!cart.length ? '' : `Total: ${sum}€`}
      </div>
    </div>
  );
}
