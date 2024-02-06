import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo/logo2.jpeg';
import Button from './Button';
import CartCount from './CartCount';
import styles from './Navbar.module.scss';

export default function Navbar() {
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
          <Button type="link" to="/" />
        </li>
        <li>
          <Button type="link" to="/about" />
        </li>
        <li>
          <Button type="cartLink" />
        </li>
        <li>
          <CartCount />
        </li>
      </ul>
    </div>
  );
}
