import React from 'react';
import CheckoutForm from './CheckoutForm';
import styles from './page.module.scss';

export default function CheckoutPage() {
  return (
    <>
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.form}>
        <CheckoutForm>
          <p className={styles.subTitle}>Personal details</p>
          <div className={styles.inputDetails}>
            <label className={styles.input}>
              First name{' '}
              <input
                data-test-id="checkout-first-name"
                placeholder="Donald"
                required
              />
            </label>
            <label className={styles.input}>
              Last name{' '}
              <input
                data-test-id="checkout-last-name"
                placeholder="Duck"
                required
              />
            </label>
            <label className={styles.input}>
              Email{' '}
              <input
                data-test-id="checkout-email"
                type="email"
                placeholder="donald@quack.com"
                required
              />
            </label>
            <label className={styles.input}>
              Mobile <input type="number" placeholder="012345678" />
            </label>
            <label className={styles.input}>
              Street address{' '}
              <input
                data-test-id="checkout-address"
                placeholder="Quackstreet 99A"
                required
              />
            </label>
            <label className={styles.input}>
              Postal code{' '}
              <input
                data-test-id="checkout-postal-code"
                type="number"
                placeholder="38252874"
                required
              />
            </label>
            <label className={styles.input}>
              City{' '}
              <input
                data-test-id="checkout-city"
                placeholder="Duckburg"
                required
              />
            </label>
            <label className={styles.input}>
              Country{' '}
              <input
                data-test-id="checkout-country"
                placeholder="Disney World"
                required
              />
            </label>
          </div>
          <p className={styles.subTitle}>Payment details</p>
          <div className={styles.inputDetails}>
            <label className={styles.input}>
              Card number{' '}
              <input
                data-test-id="checkout-credit-card"
                placeholder="1111-2222-3333-4444"
                required
              />
            </label>
            <label className={styles.input}>
              Expiry date{' '}
              <input
                data-test-id="checkout-expiration-date"
                placeholder="11/26"
                required
              />
            </label>
            <label className={styles.input}>
              CVV{' '}
              <input
                data-test-id="checkout-security-code"
                placeholder="123"
                required
              />
            </label>
          </div>
        </CheckoutForm>
      </div>
    </>
  );
}
