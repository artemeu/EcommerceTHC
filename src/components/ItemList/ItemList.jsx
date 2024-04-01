import "./ItemList.css";
import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <div className="list">
      {products.map((prod) => (
        <div key={prod.id} className="list-item">
          <Item {...prod} />
        </div>
      ))}
    </div>
  );
};
