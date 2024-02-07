'use client';
import React from 'react';
import { toast } from 'react-toastify';
import CrossButton from '../components/CrossButton';
import { removeCookieItem } from './actions';

export default function RemoveProductButton(props) {
  const sendToastMessage = () =>
    toast.info(`${props.product.quantity} item(s) trashed!`);
  const removeProduct = async () => {
    await removeCookieItem(props.product);
    sendToastMessage();
  };
  return <CrossButton onClick={removeProduct} />;
}
