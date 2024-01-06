import React, { useContext, useEffect, useState } from "react";
import API from "../api";

const AirPodsContext = React.createContext();

export const useAirPods = () => {
  return useContext(AirPodsContext);
};

export const AirPodsProvider = ({ children }) => {
  const [airPods, setAirPods] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAirPods = async () => {
      try {
        const airPods = await API.airPods.fetchAll();
        setAirPods(airPods);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    getAirPods();
  }, []);

  

  return (
    <AirPodsContext.Provider value={{airPods}}>
      {children}
    </AirPodsContext.Provider>
  );
};
