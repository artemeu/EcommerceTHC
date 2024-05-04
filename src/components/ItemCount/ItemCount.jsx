import "./ItemCount.css";
import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="counter">
      <div className="controls">
        <button className="decrementButton" onClick={handleDecrement}>
          -
        </button>
        <h3 className="number">{count}</h3>
        <button className="incrementButton" onClick={handleIncrement}>
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
