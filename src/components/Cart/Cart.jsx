import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import { formatPrice } from "../Helpers/asyncMonck";

export const Cart = () => {
  const { cart, clearCart, totalQuantity, total, removeItem } =
    useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  if (totalQuantity === 0) {
    return (
      <div className="cart-empty">
        <h1 className="items-message">No hay items en el carrito</h1>
        <Link to="/" className="cart-option">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Carrito de Compras</h1>
      </div>
      <div className="cart-items">
        {cart.map((p) => (
          <CartItem key={p.id} {...p} onRemove={handleRemoveItem} />
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: {formatPrice(total)}</h3>
      </div>
      <div className="cart-button-container">
        <button onClick={() => clearCart()} className="clear-cart-button">
          Limpiar carrito
        </button>
        <Link to="/checkout" className="checkout-button">
          Checkout
        </Link>
      </div>
    </div>
  );
};
