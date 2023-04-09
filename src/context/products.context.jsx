import { createContext, useEffect, useState } from "react";
import PRODUCT from "../shop.json";
//actual value you want to access

export const productsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCT);
  const value = { products, setProducts };

  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
