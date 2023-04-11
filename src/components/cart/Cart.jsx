import "./Cart.scss";
import { ReactComponent as CartIcon } from "../../assets/shop/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    // console.log(isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <CartIcon className="cart-icon" />
      <span className="items-count">{cartCount}</span>
    </div>
  );
};

export default Cart;
