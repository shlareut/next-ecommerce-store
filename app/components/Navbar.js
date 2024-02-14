import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo/logo2.jpeg';
import { getCookie } from '../../util/cookies';
import styles from './Navbar.module.scss';
import PageLink from './PageLink';

export default function Navbar() {
  const cartItems = () => {
    const cartCookie = getCookie('cart');
    const cart = !cartCookie ? [] : JSON.parse(cartCookie);
    const itemCount = cart.reduce((accumulator, item) => {
      return (accumulator += item.quantity);
    }, 0);
    return Number(itemCount);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div>
          <Link href="/">
            <Image
              className={styles.logoImage}
              alt="logo"
              src={logo}
              width={50}
            />
          </Link>
        </div>
        <div className={styles.logoText}>
          <h1>
            <Link href="/">Junkyard</Link>
          </h1>
          <h2 className={styles.logoSubTitle}>
            <Link href="/">Only the best junk</Link>
          </h2>
        </div>
      </div>
      <ul className={styles.linkList}>
        <li>
          <Link className="styledLink" href="/" data-test-id="products-link">
            Products
          </Link>
        </li>
        <li>
          <Link className="styledLink" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="styledLink" href="/cart" data-test-id="cart-link">
            🛒 <span data-test-id="cart-count">({Number(cartItems())})</span>
          </Link>
        </li>
        {/* <li>
          <PageLink to="/" data-test-id="products-link">
            Products
          </PageLink>
        </li>
        <li>
          <PageLink to="/about">About</PageLink>
        </li>
        <li>
          <PageLink data-test-id="cart-link" to="/cart">
            🛒 <span data-test-id="cart-count">({cartItems()})</span>
          </PageLink>
        </li> */}
      </ul>
    </div>
  );
}
