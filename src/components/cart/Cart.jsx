import "./Cart.scss";
import { ReactComponent as CartIcon } from "../../assets/shop/shopping-bag.svg";


const Cart = () => {
  return (
    <div className="cart-icon-container">
      <CartIcon className="cart-icon" />
      <span className="items-count">0</span>

    </div>
  );
};

export default Cart;
