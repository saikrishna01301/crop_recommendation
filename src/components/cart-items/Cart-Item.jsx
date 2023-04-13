import "./Cart-Item.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="cart-item-container">
      <img className="cart-item-img" src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <h3 className="name">{name}</h3>
        <span className="price">
          {quantity} x &#8377;{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
