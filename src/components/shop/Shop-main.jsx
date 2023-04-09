import "./Shop-main.scss";
import { useContext } from "react";
import { productsContext } from "../../context/products.context";

const Shop = () => {
  const { products } = useContext(productsContext);

  return (
    <div>
      {products.map(({ id, name }) => {
        return (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default Shop;
