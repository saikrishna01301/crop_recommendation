import "./Delivery.scss";
import { useState } from "react";
// import { userContext } from "../../context/user.context";

import PaymentOverlay from "../payment-overlay/Payment-overlay";

const defaultDeliveryValues = {
  fullName: "",
  phone: "",
  defaultEmail: "",
  pincode: "",
  address: "",
};

const Delivery = () => {
  const [overlayHidden, setOverlayHidden] = useState(false);
  const [deliveryFormValues, setDeliveryFormValues] = useState(
    defaultDeliveryValues
  );
  // const { currentUser } = useContext(userContext);
  // const { displayName, email } = currentUser;
  const { fullName, phone, defaultEmail, pincode, address } =
    deliveryFormValues;

  const onDeliverFormChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDeliveryFormValues({ ...deliveryFormValues, [name]: value });
  };

  const proceedToPayHandler = (e) => {
    e.preventDefault();
    // console.log(deliveryFormValues);
    // if (currentUser)
    //   setDeliveryFormValues({
    //     ...deliveryFormValues,
    //     [fullName]: currentUser.displayName,
    //     [defaultEmail]: currentUser.email,
    //   });
    setOverlayHidden(!overlayHidden);
    setDeliveryFormValues(defaultDeliveryValues);
  };

  return (
    <div className="deliver-container">
      <form className="deliver-form-container" onSubmit={proceedToPayHandler}>
        <label className="delivery__label" htmlFor="fullName">
          Full Name:
        </label>
        {/* {!currentUser ? (
          <input
            className="delivery__input"
            type="text"
            name="fullName"
            value={fullName}
            onChange={onDeliverFormChangeHandler}
            required
          />
        ) : (
          <input
            className="delivery__input"
            type="text"
            name="fullName"
            defaultValue={currentUser.displayName}
            required
          />
        )} */}
        <input
          className="delivery__input"
          type="text"
          name="fullName"
          value={fullName}
          onChange={onDeliverFormChangeHandler}
          required
        />

        <label className="delivery__label" htmlFor="phone">
          Phone:
        </label>
        <input
          className="delivery__input"
          type="phone"
          name="phone"
          value={phone}
          onChange={onDeliverFormChangeHandler}
          required
        />

        <label className="delivery__label" htmlFor="email">
          Email:
        </label>
        {/* {!currentUser ? (
          <input
            className="delivery__input"
            type="email"
            value={defaultEmail}
            name="defaultEmail"
            onChange={onDeliverFormChangeHandler}
            required
          />
        ) : (
          <input
            className="delivery__input"
            type="email"
            defaultValue={currentUser.email}
            name="email"
            required
          />
        )} */}
        <input
          className="delivery__input"
          type="email"
          value={defaultEmail}
          name="defaultEmail"
          onChange={onDeliverFormChangeHandler}
          required
        />

        <label className="delivery__label" htmlFor="pincode">
          Pin-code:
        </label>
        <input
          className="delivery__input"
          type="number"
          name="pincode"
          value={pincode}
          onChange={onDeliverFormChangeHandler}
          required
        />

        <label className="delivery__label" htmlFor="address">
          Address:
        </label>
        <textarea
          className="delivery__textarea"
          name="address"
          value={address}
          onChange={onDeliverFormChangeHandler}
          required
        />

        <button type="submit" className="delivery__btn">
          Proceed To Deliver
        </button>
      </form>
      {overlayHidden ? (
        <PaymentOverlay setOverlayHidden={setOverlayHidden} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Delivery;
