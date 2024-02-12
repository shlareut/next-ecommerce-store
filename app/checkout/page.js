import React from 'react';
import CheckoutForm from './CheckoutForm';
import styles from './page.module.scss';

export default function CheckoutPage() {
  return (
    <>
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.form}>
        <CheckoutForm>
          <label className={styles.input}>
            First name <input data-test-id="checkout-first-name" required />
          </label>
          <label className={styles.input}>
            Last name <input data-test-id="checkout-last-name" required />
          </label>
          <label className={styles.input}>
            Email <input data-test-id="checkout-email" type="email" required />
          </label>
          <label className={styles.input}>
            Street address <input data-test-id="checkout-address" required />
          </label>
          <label className={styles.input}>
            Postal code{' '}
            <input data-test-id="checkout-postal-code" type="number" required />
          </label>
          <label className={styles.input}>
            City <input data-test-id="checkout-city" required />
          </label>
          <label className={styles.input}>
            Country <input data-test-id="checkout-country" required />
          </label>
          <label className={styles.input}>
            Credit card number{' '}
            <input data-test-id="checkout-credit-card" type="number" required />
          </label>
          <label className={styles.input}>
            Expiry date{' '}
            <input
              data-test-id="checkout-expiration-date"
              type="date"
              required
            />
          </label>
          <label className={styles.input}>
            CCV{' '}
            <input
              data-test-id="checkout-security-code"
              type="number"
              required
            />
          </label>
          <label className={styles.input}>
            Name on card <input required />
          </label>
        </CheckoutForm>
      </div>
    </>
  );
}
