import Image from 'next/image';
import React from 'react';
import { getCookie } from '../../util/cookies';
import PageLink from '../components/PageLink';
import { getDbProducts } from '../database/db';
import styles from './page.module.scss';
import RemoveProductButton from './RemoveProductButton';

export default async function CartPage() {
  const allDbProducts = await getDbProducts();
  const cookie = getCookie('cart');
  const cookieCart = !cookie ? '' : JSON.parse(cookie);
  const cart = !cookie
    ? ''
    : cookieCart.map((cookieItem) => {
        const dbProduct = allDbProducts.find(
          (dbItem) => dbItem.id === cookieItem.id,
        );
        if (dbProduct) {
          return {
            id: dbProduct.id,
            category: dbProduct.category,
            condition: dbProduct.condition,
            image: dbProduct.image,
            title: dbProduct.title,
            currency: dbProduct.currency,
            isdeal: dbProduct.isdeal,
            details: dbProduct.details,
            price: dbProduct.price,
            quantity: cookieItem.quantity,
          };
        }
      });
  const sum = !cookie
    ? ''
    : cart.reduce((accumulator, item) => {
        return (accumulator += item.price * item.quantity);
      }, 0);
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.productWrapper}>
        {!cart.length ? (
          <div className={styles.emptyCartWrapper}>
            <p>Your cart is empty</p>
            <PageLink to="/">Scavenge some junk!</PageLink>
          </div>
        ) : (
          cart.map((item) => {
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
          })
        )}
      </div>
      <div className={styles.cartTotal}>
        {!cart.length ? '' : `Total: ${sum}€`}
        {!cart.length ? '' : <PageLink to="/checkout">Checkout</PageLink>}
      </div>
    </div>
  );
}
