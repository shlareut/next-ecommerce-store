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
          <label className={styles.input}>
            Credit card number{' '}
            <input
              data-test-id="checkout-credit-card"
              placeholder="1111-2222-3333-4444"
              required
            />
          </label>
          <label className={styles.input}>
            Expiry date{' '}
            <input data-test-id="checkout-expiration-date" required />
          </label>
          <label className={styles.input}>
            CCV{' '}
            <input
              data-test-id="checkout-security-code"
              placeholder="123"
              required
            />
          </label>
        </CheckoutForm>
      </div>
    </>
  );
}
