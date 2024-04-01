import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <div className="controls">
        <button className="decrementButton" onClick={decrement}>
          -
        </button>
        <h3 className="number">{count}</h3>
        <button className="incrementButton" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="addToCartButton"
          onClick={() => onAdd(count)}
          disabled={!stock}
        >
          Agregar producto
        </button>
      </div>
    </div>
  );
};
