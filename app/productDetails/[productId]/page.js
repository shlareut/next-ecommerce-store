import Image from 'next/image';
import Link from 'next/link';
import { getProductDetails } from '../../database/database';

export const metadata = {
  title: 'Junk details',
  description: 'All about junk.',
};

export default function ProductDetailsPage(props) {
  const productDetails = getProductDetails(Number(props.params.productId));
  console.log(productDetails);
  return (
    <>
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
      <div>
        <Image
          alt={productDetails?.title}
          src={productDetails?.image}
          width={300}
          height={300}
        />
      </div>
    </>
  );
}
