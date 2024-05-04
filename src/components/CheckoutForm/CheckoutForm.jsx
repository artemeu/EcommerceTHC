import "./CheckoutForm.css";
import { useState } from "react";

export const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="checkout-form-container">
      <form onSubmit={handleConfirm} className="checkout-form">
        <label className="checkout-form-label">
          Nombre
          <input
            type="text"
            className="checkout-form-input"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="checkout-form-label">
          Teléfono
          <input
            type="tel"
            className="checkout-form-input"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="checkout-form-label">
          Email
          <input
            type="email"
            className="checkout-form-input"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <button type="submit" className="checkout-form-button">
          Crear Orden
        </button>
      </form>
    </div>
  );
};
