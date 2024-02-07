import Image from 'next/image';
import React from 'react';
import { getCookie } from '../../util/cookies';
import CrossButton from '../components/CrossButton';
import PageLink from '../components/PageLink';
import styles from './page.module.scss';
import RemoveProductButton from './RemoveProductButton';

export default function CartPage() {
  const cookie = getCookie('cart');
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
                    <div className={styles.itemQuantity}>
                      {/* Change quantity feature should be here. */}
                      {/* {item.quantity} */}×{item.quantity}
                    </div>
                  </div>
                  <div className={styles.totalQuantityWrapper}>
                    <RemoveProductButton product={item} />
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
        {!cookieCart.length ? '' : <PageLink to="/checkout">Checkout</PageLink>}
      </div>
    </div>
  );
}
