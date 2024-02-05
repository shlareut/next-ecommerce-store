'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { CartContext } from '../context/CartContext';

export default function TestButton(props) {
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((accumulator, item) => {
    return (accumulator += item.quantity);
  }, 0);
  return (
    <div>
      <Link href={props.link ? props.link : ''}>
        <div>
          <button
            onClick={() => {
              switch (props.action) {
                case 'add':
                  return alert('ADDING');
                default:
                  return alert('DEFAULT');
              }
            }}
          >
            {props.variant === 'cart' ? `Cart (${itemCount})` : 'Button'}
          </button>
        </div>
      </Link>
      <ToastContainer />
    </div>
  );
}
