import { Link } from "react-router-dom";
import "./Item.css";
import { formatPrice } from "../Helpers/asyncMonck";

export const Item = ({ id, title, img, price, stock }) => {
  return (
    <article className="item-container">
      <header className="item-header">
        <h2 className="item-title">{title}</h2>
      </header>
      <div className="item-image-container">
        <img src={img} alt={title} className="item-image" />
      </div>
      <div className="item-info-container">
        <p className="item-price">Precio: {formatPrice(price)}</p>
        <p className="item-stock">Stock disponible: {stock}</p>
      </div>
      <footer className="item-footer">
        <div className="item-button-container">
          <Link to={`/item/${id}`} className="item-button">
            Ver detalle
          </Link>
        </div>
      </footer>
    </article>
  );
};
