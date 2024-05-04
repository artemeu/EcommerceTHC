import { createContext, useEffect, useState } from "react";
import {
  showCartClearedNotification,
  showDuplicateNotification,
  showSuccessNotification,
} from "../components/Helpers/asyncMonck";

// Creamos el contexto del carrito
export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0,
});

// Definimos el proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  // Estado del carrito usando useState, inicializado con los datos del localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Efecto para guardar el carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Función para agregar un producto al carrito
  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      const updatedCart = [...cart, { ...item, quantity }];
      setCart(updatedCart);
      showSuccessNotification(item);
    } else {
      showDuplicateNotification(item);
    }
  };

  // Función para eliminar un producto del carrito
  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
  };

  // Función para vaciar completamente el carrito
  const clearCart = () => {
    setCart([]);
    showCartClearedNotification();
  };

  // Función para verificar si un producto está en el carrito
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  // Función para calcular la cantidad total de productos en el carrito
  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Función para calcular el precio total de todos los productos en el carrito
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculamos la cantidad y el precio total del carrito
  const totalQuantity = calculateTotalQuantity();
  const total = calculateTotalPrice();

  // Proporcionamos el contexto del carrito a través del proveedor del contexto
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
