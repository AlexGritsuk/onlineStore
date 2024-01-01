import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import API from "../api";
import { useState } from "react";
import {isHave} from "../utils/isHave"

const IphonesContext = React.createContext();

export const useIphone = () => {
  return useContext(IphonesContext);
};

export const IphoneProvider = ({ children }) => {
  const [cartIphones, setCartIphones] = useState([]);
  const [heartIphones, setHeartIphones] = useState([]);
  const [iphones, setIphones] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const heartIphones = JSON.parse(localStorage.getItem("heartIphones"));
    if (heartIphones) {
      setHeartIphones(heartIphones);
    }
  }, []);

  useEffect(() => {
    const cartIphones = JSON.parse(localStorage.getItem("cartIphones"));
    if (cartIphones) {
      setCartIphones(cartIphones);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("heartIphones", JSON.stringify(heartIphones));
    }, 0);
  }, [heartIphones]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("cartIphones", JSON.stringify(cartIphones));
    }, 1);
  }, [cartIphones]);

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

  

  const handleAddIphoneCart = (iphoneID) => {
    setCartIphones([...cartIphones, iphoneID]);
  };

  const handleDeleteIphoneCart = (iphoneID) => {
    const newCartIphone = cartIphones.filter(
      (cartIphone) => cartIphone._id !== iphoneID
    );
    setCartIphones(newCartIphone);
  };

  const handleAddIphoneHeart = (iphoneID) => {
    setHeartIphones([...heartIphones, iphoneID]);
  };

  const handleDeleteIphoneHeart = (iphoneID) => {
    const newHeartIphone = heartIphones.filter(
      (heartIphone) => heartIphone._id !== iphoneID
    );
    setHeartIphones(newHeartIphone);
  };

  let countItemCart = cartIphones.length;
  let countItemHeart = heartIphones.length;
  

  

  return (
    <IphonesContext.Provider
      value={{
        iphones,
        countItemCart,
        countItemHeart,
        handleAddIphoneCart,
        cartIphones,
        handleDeleteIphoneCart,
        heartIphones,
        handleAddIphoneHeart,
        handleDeleteIphoneHeart,
        isHave,
      }}
    >
      {children}
    </IphonesContext.Provider>
  );
};
