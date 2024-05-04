import "./CartWidget.css";
import Cart from "../../assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="cart-widget">
        <img src={Cart} alt="Carrito" />
        <span>{totalQuantity}</span>
      </div>
    </Link>
  );
};
