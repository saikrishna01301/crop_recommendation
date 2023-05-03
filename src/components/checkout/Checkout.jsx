import "./Checkout.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import CheckoutItems from "../Checkout-items/Checkout-Items";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/user.context";

const Checkout = () => {
  const { cartItems, totalCartCost } = useContext(CartContext);
  const { currentUser } = useContext(userContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    currentUser ? navigate("/delivery") : alert("Please Sign-In");
  };

  return (
    <>
      <div className="checkout-item-container">
        <div className="checkout-container">
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItems key={cartItem.id} cartItem={cartItem} />
          ))}
          <span className="total">Total: &#8377;{totalCartCost}</span>
          <button
            type="button"
            className="checkout__btn"
            onClick={onClickHandler}
          >
            Proceed To Deliver
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
