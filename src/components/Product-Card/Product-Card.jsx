import "./Product-Card.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";
import ShopButton from "../shop-button/Shop-Button";

//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const notify = () => {
    toast("Item is added");
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img className="image" alt={name} src={imageUrl} />

      {/* <div className="footer"></div> */}
      {/* <div></div> */}
      <span className="name">{name}</span>
      <div className="price-container">
        <span className="pro-price">&#8377;{price}</span>
        <span className="innerText">Including GST</span>
      </div>

      <ShopButton
        className="button-shop"
        clickEvent={notify}
        text="add to cart"
      />
    </div>
  );
};

export default ProductCard;
