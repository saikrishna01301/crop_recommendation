import "./CartDropdown.scss";
import CartItem from "../cart-items/Cart-Item";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>

      <button className="btn">checkout</button>
    </div>
  );
};

export default CartDropdown;
