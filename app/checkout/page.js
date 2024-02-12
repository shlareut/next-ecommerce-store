import React from 'react';
import styles from './page.module.scss';

export default function CheckoutPage() {
  return (
    <div>
      <form className={styles.form}>
        <label className={styles.input}>
          First name <input id="firstName" />
        </label>
        <label className={styles.input}>
          Last name <input id="lastName" />
        </label>
        <label className={styles.input}>
          Email <input type="email" id="email" />
        </label>
        <label className={styles.input}>
          Street address <input id="address" />
        </label>
        <label className={styles.input}>
          Postal code <input type="number" id="postalCode" />
        </label>
        <label className={styles.input}>
          City <input id="city" />
        </label>
        <label className={styles.input}>
          Country <input id="country" />
        </label>
        <label className={styles.input}>
          Credit card number <input type="number" id="creditCardNumber" />
        </label>
        <label className={styles.input}>
          Expiry date <input type="date" id="expiryDate" />
        </label>
        <label className={styles.input}>
          CCV <input type="number" id="ccv" />
        </label>
        <label className={styles.input}>
          Name on card <input id="cardName" />
        </label>
      </form>
    </div>
  );
}
