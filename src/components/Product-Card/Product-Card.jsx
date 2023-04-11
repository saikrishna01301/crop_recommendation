import "./Product-Card.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img className="image" alt={name} src={imageUrl} />
      <div className="footer">
        <span className="name ">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button className="btn" onClick={addProductToCart}>
        add to cart
      </button>
    </div>
  );
};

export default ProductCard;
