import React, { useContext, useEffect, useState } from "react";
import {isHave} from "../utils/isHave";

const CartContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext); 
}; 

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if (cartProducts) {
      setCartProducts(cartProducts);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }, 1);
  }, [cartProducts]);

  const handleAddCartProducts = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const handleDeleteCartProducts = (id) => {
    const newCartProducts = cartProducts.filter(
      (CartProduct) => CartProduct._id !== id
    );
    setCartProducts(newCartProducts);
  };

  let countCart = cartProducts.length;

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        countCart,
        handleAddCartProducts,
        handleDeleteCartProducts,
        isHave,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
