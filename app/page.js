import Image from 'next/image';
import Link from 'next/link';
import { getProductList } from './database/database';
import styles from './page.module.css';

export default function HomePage() {
  const products = getProductList();
  return (
    <>
      <div>Listing:</div>
      <ul>
        {products.map((product) => {
          return product.isPublished ? (
            <li key={`product-${product.id}`}>
              <Link href={`/productDetails/${product.id}`}>
                {product.title}
              </Link>
            </li>
          ) : (
            ''
          );
        })}
      </ul>
    </>
  );
}
