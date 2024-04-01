import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { formatPrice } from "../Helpers/asyncMonck";

export const ItemDetail = ({
  id,
  title,
  img,
  category,
  description,
  price,
  stock,
}) => {
  return (
    <article className="item-detail-container">
      <header className="item-detail-header">
        <h2 className="item-detail-title">{title}</h2>
      </header>
      <div className="item-detail-image-container">
        <img src={img} alt={title} className="item-image" />
      </div>
      <div className="item-detail-info-container">
        <p className="item-detail-category">Categoria: {category}</p>
        <p className="item-detail-info">Descripcion: {description}</p>
        <p className="item-detail-price">Precio: {formatPrice(price)}</p>
      </div>
      <footer className="item-detail-footer">
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(count) => console.log("Cantidad agregada", count)}
        />
      </footer>
    </article>
  );
};
