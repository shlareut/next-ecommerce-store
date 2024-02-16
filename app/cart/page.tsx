import Image from 'next/image';
import React from 'react';
import { getCookie } from '../../util/cookies';
import { Cart, CartItem, CookieItem } from '../../util/types';
import PageLink from '../components/PageLink';
import { getDbProducts } from '../database/db';
import { cartSum } from './functions';
import styles from './page.module.scss';
import RemoveProductButton from './RemoveProductButton';

export default async function CartPage() {
  const allDbProducts = await getDbProducts();
  const cookie = getCookie('cart');
  const cookieCart = !cookie ? '' : JSON.parse(cookie);
  const cart: Cart = !cookie
    ? ''
    : cookieCart.map((cookieItem: CookieItem) => {
        const dbProduct = allDbProducts.find(
          (dbItem) => dbItem.id === cookieItem.id,
        );
        if (dbProduct) {
          const cartItem: CartItem = {
            id: dbProduct.id,
            ispublished: dbProduct.ispublished,
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
          return cartItem;
        }
        return null;
      });
  const sum = !cookie ? '' : cartSum(cart);
  // Former function below, before putting it into functions.ts
  // cart.reduce((accumulator, item) => {
  //     return (accumulator += item.price * item.quantity);
  //   }, 0);
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.title}>Shopping cart</h1>
      <div className={styles.productWrapper}>
        {!cart.length ? (
          <div className={styles.emptyCartWrapper}>
            <p>Your cart is empty</p>
            <PageLink to="/">Scavenge some junk!</PageLink>
          </div>
        ) : (
          cart.map((item) => {
            const itemSubTotal = () => {
              return Number(item.quantity) * Number(item.price);
            };
            return (
              <div
                className={styles.productCard}
                key={`Product-${Number(item.id)}`}
                data-test-id={`cart-product-${Number(item.id)}`}
              >
                <Image
                  className={styles.productImage}
                  alt="product"
                  src={item.image}
                  width={150}
                  height={150}
                />
                <div className={styles.productDetails}>
                  <div>
                    <div className={styles.productTitle}>{item.title}</div>
                    <div className={styles.productProperties}>
                      <span className={styles.productCondition}>
                        {item.condition}
                      </span>{' '}
                      {item.category}
                      {/* <span className={styles.drone}>Junkyard</span> */}
                    </div>
                    <div className={styles.productPrice}>
                      {Math.round(item.price)}
                      {item.currency}
                    </div>
                  </div>
                  <div className={styles.itemQuantity}>
                    {/* Change quantity feature should be here. */}
                    {/* {item.quantity} */}Qty:
                    <span
                      data-test-id={`cart-product-quantity-${Number(item.id)}`}
                    >
                      {item.quantity}
                    </span>
                  </div>
                </div>
                <div className={styles.totalQuantityWrapper}>
                  <RemoveProductButton product={item} />
                  <div className={styles.totalItemQuantity}>
                    {itemSubTotal()}€
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className={styles.cartTotal}>
        <span>
          Total: <span data-test-id="cart-total">{Number(sum)}</span>€
        </span>
        {!cart.length ? (
          ''
        ) : (
          <PageLink to="/checkout" dataTestId="cart-checkout">
            Checkout
          </PageLink>
        )}
      </div>
    </div>
  );
}
