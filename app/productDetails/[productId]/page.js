import Image from 'next/image';
import CartButton from '../../components/CartButton';
import { getProductDetails } from '../../database/database';
import { getDbProductDetails } from '../../database/db';
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
      <h1 className={styles.pageTitle}>{dbProductDetails[0]?.title}</h1>
      <div className={styles.pageContent}>
        <div className={styles.pageBody}>
          <div className={styles.imageWrapper}>
            <Image
              alt={dbProductDetails[0]?.title}
              src={dbProductDetails[0]?.image}
              width={300}
              height={300}
            />
          </div>
          <div className={styles.text}>
            <div>
              Category: {dbProductDetails[0]?.category}, Condition:{' '}
              {dbProductDetails[0]?.condition}
            </div>
            <div>Title: {dbProductDetails[0]?.title}</div>
            <div>Deal: {dbProductDetails[0]?.isDeal ? 'HotJUNK' : '-'}</div>
            <div>
              Price: {dbProductDetails[0]?.price}{' '}
              {dbProductDetails[0]?.currency}
            </div>
            <div>{JSON.stringify(dbProductDetails[0]?.details)}</div>
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sidebox}>
            Sidebox <br />
            <br />
            <br />
            <br />
            <CartButton
              productId={dbProductDetails[0].id}
              productTitle={dbProductDetails[0].title}
              productCondition={dbProductDetails[0].condition}
              productCategory={dbProductDetails[0].category}
              productImage={dbProductDetails[0].image}
              productPrice={dbProductDetails[0].price}
              productCurrency={dbProductDetails[0].currency}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
