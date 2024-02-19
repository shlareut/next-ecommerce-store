export type CookieItem = {
  id: number;
  quantity: number;
};

export type CookieCart = CookieItem[];

export type CartItem = {
  id: number;
  ispublished: boolean;
  category: string;
  condition: string;
  image: string;
  title: string;
  currency: string;
  isdeal: boolean;
  details: string;
  price: number;
  quantity: number;
};

export type Product = {
  [x: string]: any;
  id: number;
  ispublished: boolean;
  category: string;
  condition: string;
  image: string;
  title: string;
  currency: string;
  isdeal: boolean;
  details: string;
  price: number;
};

export type ProductList = Product[];

export type Cart = CartItem[];
