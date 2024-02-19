import Image from 'next/image';
import Link from 'next/link';
import { ProductList } from '../util/types';
import { getDbProducts } from './database/db';
// backup: fetching products from static list below
// import { getProductList } from './database/database';
import styles from './page.module.scss';

export default async function HomePage() {
  // backup: fetching products from static list below
  // const products = getProductList();
  const dbProducts: ProductList = await getDbProducts();
  return (
    <>
      <h1 className={styles.productListingsTitle}>Popular junk</h1>
      <div className={styles.productListing}>
        {dbProducts.map((product) => {
          // adding a fixed strike price as a gimmick
          const strikePrice = Math.round(product.price * 1.5);
          // ispublished flag to hide products if it's false
          return product.ispublished ? (
            <div
              className={styles.productCard}
              key={`product-${Number(product.id)}`}
            >
              <Link
                href={`/productDetails/${Number(product.id)}`}
                data-test-id={`product-${Number(product.id)}`}
              >
                {product.isdeal ? (
                  // isdeal flag to highlight "deals" as a gimmick
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
                      // conditional to show a strike price if isdeal = true
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
