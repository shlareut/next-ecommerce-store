import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo/logo2.jpeg';
import { getCookie } from '../../util/cookies';
import styles from './Navbar.module.scss';
import PageLink from './PageLink';

export default function Navbar() {
  const cartItems = () => {
    const cartCookie = getCookie('cookieCart');
    const cart = !cartCookie ? [] : JSON.parse(cartCookie);
    const itemCount = cart.reduce((accumulator, item) => {
      return (accumulator += item.quantity);
    }, 0);
    return itemCount;
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div>
          <Link href={'/'}>
            <Image
              className={styles.logoImage}
              alt="logo"
              src={logo}
              width={50}
            />
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
          <PageLink to="/">Products</PageLink>
        </li>
        <li>
          <PageLink to="/about">About</PageLink>
        </li>
        <li>
          <PageLink to="/cart">🛒 {`(${cartItems()})`}</PageLink>
        </li>
      </ul>
    </div>
  );
}
