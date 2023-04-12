import "./CartDropdown.scss";
import CartItem from "../cart-items/Cart-Item";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>

      <button className="btn" onClick={checkoutHandler}>
        Checkout
      </button>
    </div>
  );
};

export default CartDropdown;
