import Image from 'next/image';
import Link from 'next/link';
import { getProductDetails } from '../../database/database';
import styles from './page.module.scss';

export const metadata = {
  title: 'Junk details',
  description: 'All about junk.',
};

export default function ProductDetailsPage(props) {
  const productDetails = getProductDetails(Number(props.params.productId));
  console.log(productDetails);
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>{productDetails?.title}</h1>
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
            <button> Add to junk cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
