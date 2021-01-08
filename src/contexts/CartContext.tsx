import React, { createContext, useState } from 'react';

export interface ProductOnCart{
  id: string
  name?: string
  amount: number
  unitaryValue: number
  unitaryDiscount?: number
  amountTotal: number
}

export interface ICartContext{
  cart: ProductOnCart[]
  amountCart: number
  addCart(prod: ProductOnCart): void // eslint-disable-line
  removeCart(id: string): void // eslint-disable-line
  clearCart(): void
}

const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<ProductOnCart[]>([]);
  const [amountCart, setAmountCart] = useState<number>(0);

  function addCart(prod: ProductOnCart) {
    const listProducts: ProductOnCart[] = cart;
    listProducts.push(prod);

    setCart(listProducts);
    if (cart.length > 0) {
      setAmountCart(cart.map((p) => p.amountTotal).reduce((s, n) => s + n));
    }
  }

  function removeCart(id: string) {
    let listProducts: ProductOnCart[] = cart;
    listProducts = listProducts.filter((p) => p.id !== id);

    setCart(listProducts);

    if (listProducts.length > 0) {
      setAmountCart(listProducts.map((p) => p.amountTotal).reduce((s, n) => s + n));
    } else {
      setAmountCart(0);
    }
  }

  function clearCart() {
    setCart([]);
    setAmountCart(0);
  }

  return (
    <CartContext.Provider value={{
      cart,
      amountCart,
      addCart,
      removeCart,
      clearCart,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
