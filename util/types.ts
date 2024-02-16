export type CookieItem = {
  id: number;
  quantity: number;
};

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

export type Cart = CartItem[];
