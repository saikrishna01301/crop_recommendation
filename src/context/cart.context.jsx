import { createContext, useState, useEffect } from "react";

///add item to cart
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
//remove item to cart
const removeCartItem = (cartItems, cartItemToRemove) => {
  const cartItemExist = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (cartItemExist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
//clear cart item in checkout
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

//actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  totalCartCost: 0,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCartCost, setTotalCartCost] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  //   // // total cost of cart items
  useEffect(() => {
    const newCartCost = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalCartCost(newCartCost);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    totalCartCost,
  };

  //   const addItemToCart = (productToAdd) => {
  //     const newCartItems = addCartItem(cartItems, productToAdd);
  //     updateNewCartItemsReducer(newCartItems);
  //   };

  //   const clearItemFromCart = (cartItemToClear) => {
  //     const newCartItems = clearCartItem(cartItems, cartItemToClear);
  //     updateNewCartItemsReducer(newCartItems);
  //   };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
