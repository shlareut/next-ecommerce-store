'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import InputStepper from '../../components/InputStepper';
import { updateCookie } from './actions';
import styles from './AddProductButton.module.scss';

export default function AddProductButton(props) {
  const [quantity, setQuantity] = useState(Number(1));
  const sendToastMessage = () => {
    const item = quantity === 1 ? 'item' : 'items';
    return toast.success(`${quantity} ${item} scavenged!`);
  };
  const sendErrorMessage = () => {
    return toast.error('Invalid quantity!');
  };
  const addProduct = async () => {
    const newProduct = { ...props.product, quantity: Number(quantity) };
    await updateCookie(newProduct);
    sendToastMessage();
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <InputStepper quantity={quantity} setQuantity={setQuantity} />
        <Button
          dataTestId="product-add-to-cart"
          // product={props.product}
          onClick={() => {
            if (quantity < 1) {
              sendErrorMessage();
            } else if (quantity > 99) {
              sendErrorMessage();
            } else {
              addProduct().catch((error) => {
                console.log(error);
              });
              setQuantity(1);
            }
          }}
        >
          Add
        </Button>
      </div>
      <p className={styles.errorMessage}>
        {quantity < 1 || quantity > 99
          ? 'Please enter a quantity between 1 and 99.'
          : ''}
      </p>
      <p className={styles.text}>
        Total: {quantity * props.product.price}
        {props.product.currency}
      </p>
    </div>
  );
}
