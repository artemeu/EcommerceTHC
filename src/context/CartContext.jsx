import { createContext, useEffect, useState } from "react";
import {
  showDuplicateNotification,
  showSuccessNotification,
} from "../components/Helpers/asyncMonck";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      const updatedCart = [...cart, { ...item, quantity }];
      setCart(updatedCart);
      showSuccessNotification(item);
    } else {
      showDuplicateNotification(item);
    }
  };

  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalQuantity = calculateTotalQuantity();
  const total = calculateTotalPrice();

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
