import Image from 'next/image';
import Link from 'next/link';
import { getDbProducts } from './database/db';
// import { getProductList } from './database/database';
import styles from './page.module.scss';

export default async function HomePage() {
  // const products = getProductList();
  const dbProducts = await getDbProducts();
  return (
    <>
      <h1 className={styles.productListingsTitle}>Popular junk</h1>
      <div className={styles.productListing}>
        {dbProducts.map((product) => {
          const strikePrice = Math.round(product.price * 1.5);
          return product.ispublished ? (
            <div
              className={styles.productCard}
              key={`product-${Number(product.id)}`}
            >
              <Link
                href={`/productDetails/${Number(product.id)}`}
                data-test-id={`product-${Number(product.id)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {product.isdeal ? (
                  <div className={styles.deal}>🔥 Hot junk</div>
                ) : (
                  ''
                )}
                <Image
                  className={styles.productImage}
                  alt="product"
                  src={product.image}
                  width={262}
                  height={262}
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
                    {product.isdeal ? (
                      <span className={styles.productStrikePrice}>
                        {strikePrice}
                        {product.currency}
                      </span>
                    ) : (
                      ''
                    )}{' '}
                    {Math.round(product.price)}
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
    </>
  );
}
