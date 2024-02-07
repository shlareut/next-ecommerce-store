'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import InputStepper from '../../components/InputStepper';
import { updateCookie } from './actions';
import styles from './AddProductButton.module.scss';

export default function AddProductButton(props) {
  const [quantity, setQuantity] = useState(Number(1));
  const sendToastMessage = () =>
    toast.success(`${quantity} item(s) scavenged!`);
  const addProduct = async () => {
    const newProduct = { ...props.product, quantity: Number(quantity) };
    await updateCookie(newProduct);
    sendToastMessage();
  };
  return (
    <div className={styles.style}>
      <InputStepper quantity={quantity} setQuantity={setQuantity} />
      <Button
        product={props.product}
        onClick={() => {
          addProduct();
          setQuantity(1);
        }}
      >
        Add
      </Button>
    </div>
  );
}
