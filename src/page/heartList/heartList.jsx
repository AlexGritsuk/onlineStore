import React from "react";
import HeartEmpty from "./heartEmpty";
import ProductHeart from "./ProductHeart";
import {  useSelector } from "react-redux";
import { getHeart } from "../../store/heart";


const HeartList = () => {
    const heartProducts = useSelector(getHeart());
  if (heartProducts.length > 0) {
    return (
      <div>
        <div>
          {heartProducts.map((product) => {
            return (
              <ProductHeart
                key={product._id}
                {...product}
              />
            );
          })}
        </div> 
      </div>
    );
  }
  return <HeartEmpty />;
};

export default HeartList;
