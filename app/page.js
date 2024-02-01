import Image from 'next/image';
import Link from 'next/link';
import { getProductList } from './database/database';
import styles from './page.module.scss';

export default function HomePage() {
  const products = getProductList();
  return (
    <div className={styles.productListing}>
      {products.map((product) => {
        const strikePrice = Math.round(product.price * 1.5);
        return product.isPublished ? (
          <div className={styles.productCard} key={`product-${product.id}`}>
            <Link href={`/productDetails/${product.id}`}>
              {product.isDeal ? (
                <div className={styles.deal}>🔥 Hot junk</div>
              ) : (
                ''
              )}
              <Image
                className={styles.productImage}
                alt="product"
                src={product.image}
                width={289}
                height={289}
              />
              <div className={styles.productText}>
                <p className={styles.productTitle}>{product.title}</p>
                <p className={styles.productProperties}>
                  <span className={styles.productCondition}>
                    {product.condition}
                  </span>{' '}
                  {product.category}
                </p>
              </div>
              <div className={styles.productPrice}>
                <p>
                  {product.isDeal ? (
                    <span className={styles.productStrikePrice}>
                      {strikePrice}
                      {product.currency}
                    </span>
                  ) : (
                    ''
                  )}{' '}
                  {product.price}
                  {product.currency}
                </p>
              </div>
            </Link>
          </div>
        ) : (
          ''
        );
      })}
    </div>
  );
}
