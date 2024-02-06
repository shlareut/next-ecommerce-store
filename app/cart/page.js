'use client';

import Cookies from 'js-cookie';
import Image from 'next/image';
import { useContext } from 'react';
import Button from '../components/Button';
import { CartContext } from '../context/CartContext';
import styles from './page.module.scss';

export default function CartPage() {
  const { cart, setCart } = useContext(CartContext);
  const sum = cart.reduce((accumulator, item) => {
    return (accumulator += item.price * item.quantity);
  }, 0);
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.productWrapper}>
        {!cart.length
          ? 'Cart is empty'
          : cart.map((item) => {
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
                      {/* Decrement button */}
                      <button
                        className={styles.quantityButton}
                        onClick={() => {
                          if (item.quantity > 1) {
                            // if quantity more than 1, decrement
                            const newCart = cart.map((cartItem) =>
                              cartItem.id === item.id
                                ? {
                                    ...cartItem,
                                    quantity: (cartItem.quantity -= 1),
                                  }
                                : cartItem,
                            );
                            Cookies.set('cart', JSON.stringify(newCart));
                            setCart(newCart);
                          } else {
                            // if quantity is 1 then remove item from cart
                            const newCart = cart.filter(
                              (cartItem) => cartItem.id !== item.id,
                            );
                            Cookies.set('cart', JSON.stringify(newCart));
                            setCart(newCart);
                          }
                        }}
                      >
                        −
                      </button>
                      {/* Item quantity */}
                      {item.quantity}
                      {/* Increment button */}
                      <button
                        className={styles.quantityButton}
                        onClick={() => {
                          const newCart = cart.map((cartItem) =>
                            cartItem.id === item.id
                              ? {
                                  ...cartItem,
                                  quantity: (cartItem.quantity += 1),
                                }
                              : cartItem,
                          );
                          Cookies.set('cart', JSON.stringify(newCart));
                          setCart(newCart);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.totalQuantityWrapper}>
                    <Button type="removeCartItem" itemId={item.id} />
                    <div className={styles.totalItemQuantity}>
                      {item.quantity * item.price}€
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className={styles.cartTotal}>
        {!cart.length ? '' : `Total: ${sum}€`}
        {!cart.length ? '' : <button>Checkout</button>}
      </div>
    </div>
  );
}
