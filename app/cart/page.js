import Image from 'next/image';
import React from 'react';
import { getCookie } from '../../util/cookies';
import styles from './page.module.scss';

export default function CartPage() {
  const cookie = getCookie('cookieCart');
  const cookieCart = JSON.parse(cookie);
  const sum = cookieCart.reduce((accumulator, item) => {
    return (accumulator += item.price * item.quantity);
  }, 0);
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.productWrapper}>
        {!cookieCart.length
          ? 'Cart is empty'
          : cookieCart.map((item) => {
              return (
                <div className={styles.productCard} key={`Product-${item.id}`}>
                  <Image
                    className={styles.productImage}
                    alt="product"
                    src={item.image}
                    width={150}
                    height={150}
                  />
                  <div className={styles.productDetails}>
                    <div className={styles.productTextWrapper}>
                      <div className={styles.productTitle}>{item.title}</div>
                      <div className={styles.productProperties}>
                        <span className={styles.productCondition}>
                          {item.condition}
                        </span>{' '}
                        {item.category}
                      </div>
                      <div className={styles.productPrice}>
                        {Math.round(item.price)}
                        {item.currency}
                      </div>
                    </div>
                    <div className={styles.itemQuantity}>{item.quantity}</div>
                  </div>
                  <div className={styles.totalQuantityWrapper}>
                    <button>Remove</button>
                    <div className={styles.totalItemQuantity}>
                      {item.quantity * item.price}€
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className={styles.cartTotal}>
        {!cookieCart.length ? '' : `Total: ${sum}€`}
        {!cookieCart.length ? '' : <button>Checkout</button>}
      </div>
    </div>
  );
}
