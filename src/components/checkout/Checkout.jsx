import "./Checkout.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import CheckoutItems from "../Checkout-items/Checkout-Items";
import PaymentForm from "../payment-form/Payment-Form";

const Checkout = () => {
  const { cartItems, totalCartCost } = useContext(CartContext);

  return (
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
        <PaymentForm />
      </div>
    </div>
  );
};

export default Checkout;
