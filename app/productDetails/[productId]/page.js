import Image from 'next/image';
import CartButton from '../../components/CartButton';
import { getProductDetails } from '../../database/database';
import { getDbProductDetails } from '../../database/db';
import { updateCookie } from './actions';
import CookieButton from './CookieButton';
import styles from './page.module.scss';

export const metadata = {
  title: 'Junk details',
  description: 'All about junk.',
};

export default async function ProductDetailsPage(props) {
  // const productDetails = getProductDetails(Number(props.params.productId));
  const dbProductDetails = await getDbProductDetails(
    Number(props.params.productId),
  );
  return (
    <div className={styles.pageWrapper}>
      {/* <h1 className={styles.pageTitle}>{productDetails?.title}</h1>
      <div className={styles.pageContent}>
        <div className={styles.pageBody}>
          <div className={styles.imageWrapper}>
            <Image
              alt={productDetails?.title}
              src={productDetails?.image}
              width={300}
              height={300}
            />
          </div>
          <div className={styles.text}>
            <div>
              Category: {productDetails?.category}, Condition:{' '}
              {productDetails?.condition}
            </div>
            <div>Title: {productDetails?.title}</div>
            <div>Deal: {productDetails?.isDeal ? 'HotJUNK' : '-'}</div>
            <div>
              Price: {productDetails?.price} {productDetails?.currency}
            </div>
            <div>{productDetails?.details.description}</div>
            <div>{JSON.stringify(productDetails?.details)}</div>
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sidebox}>
            Sidebox <br />
            <br />
            <br />
            <br />
            <CartButton
              productId={productDetails.id}
              productTitle={productDetails.title}
              productCondition={productDetails.condition}
              productCategory={productDetails.category}
              productImage={productDetails.image}
              productPrice={productDetails.price}
              productCurrency={productDetails.currency}
            />
          </div>
        </div>
      </div> */}
      {/* DB ProductDetails starts here */}
      {/* DB ProductDetails starts here */}
      {/* DB ProductDetails starts here */}
      <h1 className={styles.pageTitle}>{dbProductDetails?.title}</h1>
      <div className={styles.pageContent}>
        <div className={styles.pageBody}>
          <div className={styles.imageWrapper}>
            <Image
              alt={dbProductDetails?.title}
              src={dbProductDetails?.image}
              width={300}
              height={300}
            />
          </div>
          <div className={styles.text}>
            <div>
              Category: {dbProductDetails?.category}, Condition:{' '}
              {dbProductDetails?.condition}
            </div>
            <div>Title: {dbProductDetails?.title}</div>
            <div>Deal: {dbProductDetails?.isDeal ? 'HotJUNK' : '-'}</div>
            <div>
              Price: {dbProductDetails?.price} {dbProductDetails?.currency}
            </div>
            <div>{JSON.stringify(dbProductDetails?.details)}</div>
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sidebox}>
            <div className={styles.sideboxTitle}>Add to cart</div>
            <div className={styles.itemQuantity}>
              <button className={styles.quantityButton}>−</button>
              {/* Item quantity needs to come here */}0
              <button className={styles.quantityButton}>+</button>
            </div>
            <CartButton
              productId={dbProductDetails.id}
              productTitle={dbProductDetails.title}
              productCondition={dbProductDetails.condition}
              productCategory={dbProductDetails.category}
              productImage={dbProductDetails.image}
              productPrice={dbProductDetails.price}
              productCurrency={dbProductDetails.currency}
            />
            <CookieButton value={dbProductDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
