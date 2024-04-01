import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../Helpers/asyncMonck";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const title = categoryId
    ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`
    : "Productos";

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <main className="list-container">
      <h1>{title}</h1>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </main>
  );
};
