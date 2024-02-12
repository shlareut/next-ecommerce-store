'use client';
import React from 'react';
import { toast } from 'react-toastify';
import CrossButton from '../components/CrossButton';
import { removeCookieItem } from './actions';

export default function RemoveProductButton(props) {
  const sendToastMessage = () => {
    const item = props.product.quantity === 1 ? 'item' : 'items';
    return toast.success(`${Number(props.product.quantity)} ${item} trashed!`);
  };
  const removeProduct = async () => {
    await removeCookieItem(props.product);
    sendToastMessage();
  };
  return <CrossButton onClick={removeProduct} />;
}
