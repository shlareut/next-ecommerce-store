'use client';

import React, { useEffect, useState } from 'react';
import styles from './InputStepper.module.scss';

export default function InputStepper(props) {
  const [isDecrementDisabled, setIsDecrementDisabled] = useState(true);
  const [isIncrementDisabled, setIsIncrementDisabled] = useState(false);
  const handleIncrement = () => {
    props.setQuantity(props.quantity + 1);
  };
  const handleDecrement = () => {
    props.setQuantity(props.quantity - 1);
  };
  useEffect(() => {
    console.log(props.quantity);
    if (props.quantity <= 1) {
      setIsDecrementDisabled(true);
      setIsIncrementDisabled(false);
    } else if (props.quantity >= 99) {
      setIsDecrementDisabled(false);
      setIsIncrementDisabled(true);
    } else {
      setIsDecrementDisabled(false);
      setIsIncrementDisabled(false);
    }
  }, [props.quantity]);
  return (
    <div className={styles.style}>
      <button
        className={styles.stepper}
        disabled={isDecrementDisabled}
        onClick={() => {
          handleDecrement();
        }}
      >
        −
      </button>
      <input
        data-test-id="product-quantity"
        className={styles.input}
        type="number"
        min={1}
        max={99}
        value={props.quantity}
        onChange={(event) => {
          // WHEN BELOW IS ENABLED, IT ALLOWS e.g. NEGATIVE VALUES IN THE INPUT FIELD BUT WILL CHANGE IT ONCE UNFOCUSSED
          props.setQuantity(event.currentTarget.value.replace(/^(0+|-)/, ''));
          // WHEN BELOW IS ENABLED, IT WILL NOT ALLOW NEGATIVE VALUES
          //   if (event.currentTarget.value < 1) {
          //     props.setQuantity(1);
          //   } else if (event.currentTarget.value > 99) {
          //     props.setQuantity(99);
          //   } else {
          //     props.setQuantity(event.currentTarget.value);
          //   }
        }}
        // WHEN BELOW IS ENABLED, IT ALLOWS e.g. NEGATIVE VALUES IN THE INPUT FIELD BUT WILL CHANGE IT ONCE UNFOCUSSED
        onBlur={(event) => {
          if (event.currentTarget.value < 1) {
            props.setQuantity(1);
          } else if (event.currentTarget.value > 99) {
            props.setQuantity(99);
          } else {
            props.setQuantity(event.currentTarget.value);
          }
        }}
      />
      <button
        className={styles.stepper}
        disabled={isIncrementDisabled}
        onClick={() => {
          handleIncrement();
        }}
      >
        +
      </button>
    </div>
  );
}
