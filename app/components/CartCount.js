import Link from 'next/link';
import React from 'react';
import { getCookie } from '../../util/cookies';

export default function CartCount() {
  const cookie = getCookie('cookieCart');
  const cookieCart = JSON.parse(cookie);
  const itemCount = cookieCart.reduce((accumulator, item) => {
    return (accumulator += item.quantity);
  }, 0);
  return (
    <>
      <Link href="/newcart">
        <div>NewCart {`(${itemCount})`}</div>
      </Link>
    </>
  );
}
