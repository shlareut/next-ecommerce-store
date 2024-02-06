'use client';

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
// import { CartContext } from '../../context/CartContext';
import { updateCookie } from './actions';

export default function CookieButton(props) {
  // const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <input
        type="number"
        min={1}
        max={99}
        defaultValue={1}
        onChange={(event) => {
          const newQuantity = event.currentTarget.value;
          setQuantity(newQuantity);
        }}
      />
      {/* DO I NEED ON FORM SUBMIT BELOW? */}
      <button
        onClick={async () => {
          const newValue = { ...props.value, quantity: Number(quantity) };
          await updateCookie(newValue);
          toast.success(`${quantity} ${props.value.title} added!`, {
            position: 'bottom-right',
          });
        }}
      >
        Add {quantity} items
      </button>
      <ToastContainer />
    </>
  );
}
