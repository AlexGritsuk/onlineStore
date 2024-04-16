import React, { useContext, useEffect, useState } from "react";

const HeartContext = React.createContext();

export const useHeart = () => {
  return useContext(HeartContext); 
};

export const HeartProvider = ({ children }) => {
  const [heartProducts, setHeartProducts] = useState([]);

  useEffect(() => {
    const heartProducts = JSON.parse(localStorage.getItem("heartProducts"));
    if (heartProducts) {
      setHeartProducts(heartProducts);
    }
  }, []);
 
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("heartProducts", JSON.stringify(heartProducts));
    }, 0);
  }, [heartProducts]);

  const handleAddHeartProducts = (product) => {
    setHeartProducts([...heartProducts, product]);
  };

  const handleDeleteHeartProducts = (id) => {
    const newHeartProducts = heartProducts.filter(
      (HeartProducts) => HeartProducts._id !== id
    );
    setHeartProducts(newHeartProducts);
  };

  let countHeart = heartProducts.length;

  return (
    <HeartContext.Provider
      value={{
        heartProducts,
        countHeart,
        handleAddHeartProducts,
        handleDeleteHeartProducts,
      }}
    >
      {children}
    </HeartContext.Provider>
  );
};
