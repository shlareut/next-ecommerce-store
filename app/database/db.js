import dotenv from 'dotenv';
import postgres from 'postgres';

dotenv.config();

export const sql = postgres();

/// Test animals

export async function getDbProducts() {
  const products = await sql`
    SELECT
      *
    FROM
      products
  `;
  return products;
}

export async function getDbProductDetails(productId) {
  const [productDetails] = await sql`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${productId}
  `;
  return productDetails;
}
