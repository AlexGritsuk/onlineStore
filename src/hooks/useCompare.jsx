import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {isHave} from "../utils/isHave";

const CompareContext = React.createContext();

export const useCompare = () => {
  return useContext(CompareContext);
};

export const CompareProvider = ({ children }) => {
  const [compareProducts, setCompareProducts] = useState([]);  

  useEffect(() => {
    const compareIphones = JSON.parse(localStorage.getItem("compareIphones"));
    if (compareIphones) {
      setCompareProducts(compareIphones);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("compareIphones", JSON.stringify(compareProducts));
    }, 0);
  }, [compareProducts]);

  const handleAddCompareIphone = (iphoneID) => {
    setCompareProducts([...compareProducts, iphoneID]);
  };

  const handleDeleteCompareIphone = (iphoneID) => {
    const newcompareIphones = compareProducts.filter(
      (compareIphone) => compareIphone._id !== iphoneID
    );
    setCompareProducts(newcompareIphones);
  };

  let countItemCompare = compareProducts.length;

  return (
    <CompareContext.Provider
      value={{
        compareIphones: compareProducts,
        countItemCompare,
        handleAddCompareIphone,
        handleDeleteCompareIphone,
        isHave,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};
