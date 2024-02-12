'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Button from '../components/Button';
import { removeCookieCart } from './actions';

export default function CheckoutForm(props) {
  const router = useRouter();
  const handlePurchase = async () => {
    await removeCookieCart();
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handlePurchase().catch((error) => {
          console.log(error);
        });
        router.push('/purchaseCompleted');
      }}
    >
      {props.children}
      <Button data-test-id="checkout-confirm-order" type="submit">
        {' '}
        Submit
      </Button>
    </form>
  );
}
