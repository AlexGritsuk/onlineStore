import React, { useState, useEffect, useContext } from "react";
import API from "../api";

const MacBooksContext = React.createContext(); 

export const useMacBooks = () => {
  return useContext(MacBooksContext);
};

export const MacBooksProvider = ({ children }) => {
  const [macBooks, setMacBooks] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAirPods = async () => {
      try {
        const macBooks = await API.macBooks.fetchAll();
        setMacBooks(macBooks);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    getAirPods();
  }, []);

  return (
    <MacBooksContext.Provider value={{ macBooks }}>
      {children}
    </MacBooksContext.Provider>
  );
};
