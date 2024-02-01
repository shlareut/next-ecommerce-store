import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo/logo2.jpeg';
import Button from './Button';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div>
          <Image alt="logo" src={logo} width={50} />
        </div>
        <div className={styles.logoText}>
          <h1 className={styles.logoTitle}>Junkyard</h1>
          <h2 className={styles.logoSubTitle}>Only the best junk</h2>
        </div>
      </div>
      <ul className={styles.linkList}>
        <li>
          <Button text="Products" />
        </li>
        <li>
          <Button text="About" />
        </li>
        <li>
          <Button text="TEST" />
        </li>
        <li>
          <Button text="Checkout" />
        </li>
      </ul>
    </div>
  );
}
