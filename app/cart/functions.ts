import { Cart } from '../../util/types';

export function cartSum(cart: Cart) {
  return cart.reduce((accumulator, item) => {
    return (accumulator += item.price * item.quantity);
  }, 0);
}
