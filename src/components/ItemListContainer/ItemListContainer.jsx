import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  const title = categoryId
    ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`
    : "Productos";

  useEffect(() => {
    setLoading(true);

    const collecctionRef = categoryId
      ? query(collection(db, "items"), where("category", "==", categoryId))
      : collection(db, "items");

    getDocs(collecctionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <main className="list-container">
      <h1>{title}</h1>
      {loading ? (
        <div className="loading-message">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </main>
  );
};
