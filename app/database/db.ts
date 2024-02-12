import dotenv from 'dotenv';
import postgres from 'postgres';

dotenv.config();

export const sql = postgres();

type Product = {
  id: number;
  ispublished: boolean;
  image: string;
  title: string;
  category: string;
  condition: string;
  price: number;
  currency: string;
  isdeal: boolean;
  details: string;
};

export async function getDbProducts() {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;
  return products;
}

export async function getDbProductDetails(productId: number) {
  const [productDetails] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${productId}
  `;
  return productDetails;
}
