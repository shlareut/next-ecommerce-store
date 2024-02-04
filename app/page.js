import Image from 'next/image';
import Link from 'next/link';
import CartPage from './cart/page';
import { getProductList } from './database/database';
import { getDbProducts } from './database/db';
import styles from './page.module.scss';

export default async function HomePage() {
  // const products = getProductList();
  const dbProducts = await getDbProducts();
  return (
    <>
      {/* <h1 className={styles.productListingsTitle}>Popular junk</h1>
      <div className={styles.productListing}>
        {products.map((product) => {
          const strikePrice = Math.round(product.price * 1.5);
          return product.isPublished ? (
            <div className={styles.productCard} key={`product-${product.id}`}>
              <Link
                href={`/productDetails/${product.id}`}
                // target="_blank"
                // rel="noopener noreferrer"
              >
                {product.isDeal ? (
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
      </div> */}
      {/* DB Products start below */}
      {/* DB Products start below */}
      {/* DB Products start below */}
      <h1 className={styles.productListingsTitle}>Popular junk</h1>
      <div className={styles.productListing}>
        {dbProducts.map((product) => {
          const strikePrice = Math.round(product.price * 1.5);
          return product.ispublished ? (
            <div className={styles.productCard} key={`product-${product.id}`}>
              <Link
                href={`/productDetails/${product.id}`}
                // target="_blank"
                // rel="noopener noreferrer"
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
