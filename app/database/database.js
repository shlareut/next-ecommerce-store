import 'server-only';

const productList = [
  {
    id: 1,
    isPublished: true,
    category: 'vehicles',
    condition: 'wrecked',
    image: `/images/1.jpeg`,
    title: 'Rusty bicycle',
    price: 10.0,
    currency: '€',
    isDeal: false,
    details: {
      description:
        'Dive headfirst into the gritty world of discarded relics with our latest article, "From Junk to Jewel: Embracing the Rusty Chic Revolution." Explore the unconventional allure of rusty old junk bicycles and the surprisingly stylish transformations they can undergo.',
    },
  },
  {
    id: 2,
    isPublished: true,
    category: 'publications',
    condition: 'abandoned',
    image: `/images/2.jpeg`,
    title: 'Old newspapers',
    price: 7.0,
    currency: '€',
    isDeal: false,
    details: { description: 'json' },
  },
  {
    id: 3,
    isPublished: true,
    category: 'furniture',
    condition: 'scrapped',
    image: `/images/3.jpeg`,
    title: 'Two-seat sofa',
    price: 25.0,
    currency: '€',
    isDeal: true,
    details: { description: 'json' },
  },
  {
    id: 4,
    isPublished: true,
    category: 'goods',
    condition: 'discarded',
    image: `/images/4.jpeg`,
    title: 'Surprise bag',
    price: 5.0,
    currency: '€',
    isDeal: false,
    details: { description: 'json' },
  },
  {
    id: 5,
    isPublished: true,
    category: 'clothing',
    condition: 'discarded',
    image: `/images/5.jpeg`,
    title: 'Old dirty shoes',
    price: 8.0,
    currency: '€',
    isDeal: false,
    details: { description: 'json' },
  },
  {
    id: 6,
    isPublished: true,
    category: 'vehicles',
    condition: 'wrecked',
    image: `/images/6.jpeg`,
    title: 'Lightly used car',
    price: 178.0,
    currency: '€',
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
