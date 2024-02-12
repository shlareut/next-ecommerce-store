import dotenv from 'dotenv';
import postgres from 'postgres';

dotenv.config();

export const sql = postgres();

type Product = {
  id: number | null;
  ispublished: boolean | null;
  image: string | null;
  title: string | null;
  category: string | null;
  condition: string | null;
  price: number | null;
  currency: string | null;
  isdeal: boolean | null;
  details: string | null;
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
