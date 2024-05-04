import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { formatPrice } from "../Helpers/asyncMonck";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ id, title, img, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      title,
      price,
      stock,
    };
    addItem(item, quantity);
  };

  return (
    <article className="item-detail-container">
      <header className="item-detail-header">
        <h2 className="item-detail-title">{title}</h2>
      </header>
      <div className="item-detail-image-container">
        <img src={img} alt={title} className="item-image" />
      </div>
      <div className="item-detail-info-container">
        <p className="item-detail-info">Descripcion: {description}</p>
        <p className="item-detail-price">Precio: {formatPrice(price)}</p>
      </div>
      <footer className="item-detail-footer">
        {quantityAdded > 0 ? (
          <Link to={"/cart"} className="item-confirm-button">
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};
