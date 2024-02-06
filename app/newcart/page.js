import React from 'react';
import { getCookie } from '../../util/cookies';

export default function page() {
  const cookie = getCookie('cookieCart');
  const cookieCart = JSON.parse(cookie);
  return (
    <div>
      {cookie}
      <ul>
        {cookieCart.map((item) => (
          <li key={item.id}>
            {item.quantity}x {item.title} = {item.quantity * item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
