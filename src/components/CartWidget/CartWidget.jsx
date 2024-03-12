import Cart from "../../assets/cart.svg";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={Cart} alt="Carrito" />
      <span>10</span>
    </div>
  );
};

export default CartWidget;
