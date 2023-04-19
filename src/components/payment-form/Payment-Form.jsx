import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { userContext } from "../../context/user.context";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import "./Payment-Form.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { totalCartCost } = useContext(CartContext);
  const { currentUser } = useContext(userContext);
  const amount = totalCartCost;
  // const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    // setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    console.log(response);

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }
  };
  return (
    <div className="payment-form--container">
      <form className="form-container " onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement className="payment-form" />
        <button className="payment-btn">PAY NOW</button>
      </form>
    </div>
  );
};

export default PaymentForm;
