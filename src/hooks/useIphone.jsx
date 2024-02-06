import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import API from "../api";
import { useState } from "react";

const IphonesContext = React.createContext();

export const useIphone = () => {
  return useContext(IphonesContext);
};

export const IphoneProvider = ({ children }) => {
  const [iphones, setIphones] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const getIphones = async () => {
      try {
        const iphones = await API.iphones.fetchAll();
        setIphones(iphones);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    getIphones();
  }, []);

  return (
    <IphonesContext.Provider value={{ iphones }}>
      {children}
    </IphonesContext.Provider>
  );
};
