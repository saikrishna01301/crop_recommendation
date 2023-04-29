import "./payment-overlay.scss";
import PaymentForm from "../payment-form/Payment-Form";

const PaymentOverlay = ({ setOverlayHidden }) => {
  const closeOverlay = () => setOverlayHidden(false);
  return (
    <>
      <div className="modal">
        <button className="close-modal" onClick={closeOverlay}>
          &times;
        </button>
        <PaymentForm setOverlayHidden={setOverlayHidden} />
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default PaymentOverlay;
