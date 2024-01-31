import 'server-only';

const productList = [
  {
    id: 1,
    isPublished: true,
    category: 'Bicycles',
    condition: 'wrecked',
    image: `/images/1.jpeg`,
    title: 'Rusty Bicycle',
    price: 10.0,
    currency: 'EUR',
    isDeal: true,
    details: {
      description:
        'Dive headfirst into the gritty world of discarded relics with our latest article, "From Junk to Jewel: Embracing the Rusty Chic Revolution." Explore the unconventional allure of rusty old junk bicycles and the surprisingly stylish transformations they can undergo.',
    },
  },
  {
    id: 2,
    isPublished: true,
    category: 'Publications',
    condition:
      'wrecked, dismantled, partially dismantled, inoperative, abandoned, discarded, scrapped',
    image: `/images/2.jpeg`,
    title: 'Old Newspapers',
    price: 7.0,
    currency: 'EUR',
    isDeal: true,
    details: { description: 'json' },
  },
];

export function getProductList() {
  return productList;
}

export function getProductDetails(productId) {
  return productList.find((product) => {
    return productId === product.id;
  });
}
