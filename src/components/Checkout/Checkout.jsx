import "./Checkout.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Spinner from "react-bootstrap/Spinner";
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  getDocs,
  writeBatch,
  query,
  where,
} from "firebase/firestore";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { db } from "../../services/firebase/firebaseConfig";

export const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "items");
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdedd = await addDoc(orderRef, objOrder);

        setOrderId(orderAdedd.id);
        clearCart();
      } else {
        console.error("Hay productos que estan fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      {loading && (
        <div className="checkout-message">
          <Spinner animation="border" variant="primary" />
          <h2>¡Procesando orden!</h2>
          <p>Por favor, espere un momento...</p>
        </div>
      )}
      {orderId && (
        <div className="checkout-message">
          <h2>¡Orden generada con éxito!</h2>
          <p>Su ID de orden es: {orderId}</p>
        </div>
      )}
      {!loading && !orderId && <CheckoutForm onConfirm={createOrder} />}
    </div>
  );
};
