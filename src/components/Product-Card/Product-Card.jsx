import "./Product-Card.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img className="image" alt={name} src={imageUrl} />
      <div className="footer">
        <span className="name ">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button className="btn">add to cart</button>
    </div>
  );
};

export default ProductCard;
