'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import InputStepper from '../../components/InputStepper';
import { updateCookie } from './actions';
import styles from './HandleAddButton.module.scss';

export default function HandleAddButton(props) {
  const [quantity, setQuantity] = useState(Number(1));
  const sendToastMessage = () =>
    toast.success(`${quantity} item(s) scavenged!`, {
      position: 'top-right',
      autoClose: 1000,
    });
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
