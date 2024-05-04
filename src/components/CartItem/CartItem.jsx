import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { formatPrice, showEliminatedNotification } from "../Helpers/asyncMonck";

export const CartItem = ({ id, title, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = () => {
    removeItem(id);
    showEliminatedNotification(title);
  };

  return (
    <div className="cart-item">
      <div>
        <h3>{title}</h3>
        <p>Precio: {formatPrice(price)}</p>
        <p>Cantidad: {quantity}</p>
      </div>
      <button onClick={handleRemove}>Eliminar</button>
    </div>
  );
};
