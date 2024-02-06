'use client';

import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
// import { CartContext } from '../../context/CartContext';
import { updateCookie } from './actions';

export default function CookieButton(props) {
  // const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const notify = () =>
    toast.success(`${quantity} item(s) added!`, {
      position: 'top-right',
      autoClose: 1000,
    });
  const resetQuantity = () => {
    notify();
    setQuantity(1);
  };
  return (
    <>
      <input
        type="number"
        min={1}
        max={99}
        defaultValue={1}
        value={quantity}
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
          resetQuantity();
          // setQuantity(1);
        }}
      >
        Add {quantity} items
      </button>
    </>
  );
}
