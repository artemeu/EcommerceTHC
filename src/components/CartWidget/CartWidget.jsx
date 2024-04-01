import Cart from "../../assets/cart.svg";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={Cart} alt="Carrito" />
      <span>20</span>
    </div>
  );
};
