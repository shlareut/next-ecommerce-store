export async function up(sql) {
  await sql`
    CREATE TABLE products (
      id serial PRIMARY key,
      ispublished boolean NOT NULL,
      image varchar(30) NOT NULL,
      title varchar(30) NOT NULL,
      category varchar(30) NOT NULL,
      condition varchar(30) NOT NULL,
      price decimal NOT NULL,
      currency varchar(3) NOT NULL,
      isdeal boolean NOT NULL,
      details TEXT NOT NULL
    )
  `;
}

export async function down(sql) {
  await sql`DROP TABLE products`;
}
