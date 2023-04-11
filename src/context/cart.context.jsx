import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const cartItemExist = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });
  if (cartItemExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //adding product to cart item with quantity
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  console.log(cartItems);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  //   const addItemToCart = (productToAdd) => {
  //     const newCartItems = addCartItem(cartItems, productToAdd);
  //     updateNewCartItemsReducer(newCartItems);
  //   };
  //   const removeItemFromCart = (cartItemToRemove) => {
  //     const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  //     updateNewCartItemsReducer(newCartItems);
  //   };
  //   const clearItemFromCart = (cartItemToClear) => {
  //     const newCartItems = clearCartItem(cartItems, cartItemToClear);
  //     updateNewCartItemsReducer(newCartItems);
  //   };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
