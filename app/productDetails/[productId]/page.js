import Image from 'next/image';
// import { getProductDetails } from '../../database/database';
import { getDbProductDetails } from '../../database/db';
import AddProductButton from './AddProductButton';
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
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.firstRow}>
          {/* Drone fails when using <Image></Image> tag. */}
          {/* <Image
            className={styles.backgroundImage}
            alt={dbProductDetails?.title}
            src={dbProductDetails?.image}
            width={100}
            height={100}
          /> */}
          <img
            className={styles.backgroundImage}
            alt={dbProductDetails?.title}
            src={dbProductDetails?.image}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.secondRow}>
          <div className={styles.firstCol}>
            {/* Drone fails when using <Image></Image> tag. */}
            {/* <Image
              data-test-id="product-image"
              className={styles.image}
              alt={dbProductDetails?.title}
              src={dbProductDetails?.image}
              width={100}
              height={100}
            /> */}
            <img
              data-test-id="product-image"
              className={styles.image}
              alt={dbProductDetails?.title}
              src={dbProductDetails?.image}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.secondCol}>
            <ul className={styles.secondColList}>
              {dbProductDetails?.isdeal ? <li>🔥 Hot junk •</li> : ''}
              <li>
                <span className={styles.condition}>
                  {dbProductDetails?.condition}
                </span>{' '}
                <span>{dbProductDetails?.category}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.thirdRow}>
          <h1>{dbProductDetails?.title}</h1>
        </div>
        <div className={styles.fourthRow}>{dbProductDetails?.details}</div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.floatBox}>
          <div className={styles.floatBoxContent}>
            <p className={styles.price}>
              <span data-test-id="product-price">
                {Math.round(dbProductDetails?.price)}
              </span>
              {dbProductDetails?.currency}{' '}
              <span className={styles.piece}>piece</span>
            </p>
            <AddProductButton product={dbProductDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
