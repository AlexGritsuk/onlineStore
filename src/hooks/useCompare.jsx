import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {isHave} from "../utils/isHave"

const CompareContext = React.createContext();

export const useCompare = () => {
  return useContext(CompareContext);
};

export const CompareProvider = ({ children }) => {
  const [compareIphones, setCompareIphones] = useState([]);  

  useEffect(() => {
    const compareIphones = JSON.parse(localStorage.getItem("compareIphones"));
    if (compareIphones) {
      setCompareIphones(compareIphones);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("compareIphones", JSON.stringify(compareIphones));
    }, 0);
  }, [compareIphones]);

  const handleAddCompareIphone = (iphoneID) => {
    setCompareIphones([...compareIphones, iphoneID]);
  };

  const handleDeleteCompareIphone = (iphoneID) => {
    const newcompareIphones = compareIphones.filter(
      (compareIphone) => compareIphone._id !== iphoneID
    );
    setCompareIphones(newcompareIphones);
  };

  let countItemCompare = compareIphones.length;

  return (
    <CompareContext.Provider
      value={{
        compareIphones,
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
