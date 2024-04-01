import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { getProductById } from "../Helpers/asyncMonck";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <main className="detail-conteiner">
      <ItemDetail {...product} />
    </main>
  );
};
