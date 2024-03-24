import { getCart } from 'lib/shopify';
import { cookies } from 'next/headers';
import CartModal from './modal';

export default async function Cart() {
  const cartId = cookies().get('cartId')?.value;
  let cart;

  async function getCartAction(cartId: string) {
    'use server';
    if (cartId) {
      const cart = await getCart(cartId);
      if (cart) {
        return cart;
      }
      return null;
    }
    return null;
  }

  if (cartId) {
    cart = await getCartAction(cartId);
  }

  return <CartModal cart={cart} cartId={cartId as string} getCart={getCartAction} />;
}
