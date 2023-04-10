import "./Shop-main.scss";
import { useContext } from "react";
import { productsContext } from "../../context/products.context";
import ProductCard from "../Product-Card/Product-Card";
import Cart from "../cart/Cart";
import CartDropdown from "../cart-dropdown/CartDropdown";

const Shop = () => {
  const { products } = useContext(productsContext);

  return (
    <>
      <div className="shop-head-container">
        <span>All Available Products</span>
        <Cart />
      </div>
      <CartDropdown />
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};
export default Shop;
