import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const useCart = () => {
  const context = useContext(CartContext);

  const {
    cart, amountCart, addCart, removeCart, clearCart,
  } = context;

  return {
    cart, amountCart, addCart, removeCart, clearCart,
  };
};
