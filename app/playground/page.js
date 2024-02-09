import React from 'react';
import { getCookie } from '../../util/cookies';
import InputStepper from '../components/InputStepper';
import { getDbProducts } from '../database/db';
import HandleNotifyButton from './HandleNotifyButton';
import styles from './page.module.scss';

export default async function PlaygroundPage() {
  const cookie = getCookie('cart');
  const cookieCart = JSON.parse(cookie);
  const allDbProducts = await getDbProducts();
  // This below WORKS! But something with "FIND" would be more elegant as it's returning an array of arrays!
  const cart = cookieCart.map((cookieItem) => {
    const dbProduct = allDbProducts.find(
      (dbItem) => dbItem.id === cookieItem.id,
    );
    if (dbProduct) {
      return {
        id: dbProduct.id,
        quantity: cookieItem.quantity,
        price: dbProduct.price,
      };
    }
  });

  // I somehow need to use find() + map()
  // Maybe reduce() would work? I could reduce() on the cookieItem ID, and use the DB item as accumulator
  return <div className={styles.style}>{JSON.stringify(cart)}</div>;
}
