import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/logo/logo2.jpeg';
import Button from './Button';
import LinkButton from './LinkButton';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div>
          <Link href={'/'}>
            <Image alt="logo" src={logo} width={50} />
          </Link>
        </div>
        <div className={styles.logoText}>
          <h1 className={styles.logoTitle}>
            <Link href={'/'}>Junkyard</Link>
          </h1>
          <h2 className={styles.logoSubTitle}>
            <Link href={'/'}>Only the best junk</Link>
          </h2>
        </div>
      </div>
      <ul className={styles.linkList}>
        <li>
          <LinkButton href="/" variant="secondary" text="Products" />
        </li>
        <li>
          <Button variant="secondary" text="About" />
        </li>
        <li>
          <Button variant="secondary" text="Test" />
        </li>
        <li>
          <LinkButton variant="cart" text="Junk cart 🛒" href="/cart" />
        </li>
      </ul>
    </div>
  );
}
