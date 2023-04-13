import "./Product-Card.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import ShopButton from "../shop-button/Shop-Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
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
        clickEvent={addProductToCart}
        text="add to cart"
      />
    </div>
  );
};

export default ProductCard;
