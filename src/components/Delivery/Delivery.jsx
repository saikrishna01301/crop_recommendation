import "./Delivery.scss";
import { useState, useContext } from "react";
import { userContext } from "../../context/user.context";

const Delivery = () => {
  return (
    <div className="deliver-container">
      <form className="deliver-form-container">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" name="fullName" required />

        <label htmlFor="phone">Phone:</label>
        <input type="phone" name="phone" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required />

        <label htmlFor="pincode">Pin-code:</label>
        <input type="number" name="pincode" required />

        <label htmlFor="address">Address:</label>
        <textarea name="address" required />

        <button type="submit">Proceed To Deliver</button>
      </form>
    </div>
  );
};

export default Delivery;
