import React, { useEffect } from "react";
import IphoneCart from "./ProductCart";
import BasketEmpty from "./basketEmpty";
import { useSelector } from "react-redux";
import { getCart } from "../../store/cart";
import { getHeart } from "../../store/heart";

const BasketList = () => {
 
  const cartProducts = useSelector(getCart());   
  const heartProducts = useSelector(getHeart())

  if (cartProducts.length > 0) {
    return (
      <div>
        <div>
          {cartProducts.map((product) => {
            return (
              <IphoneCart
                key={product._id}
                {...product}
                heartProducts={heartProducts}           
                
              />
            );
          })}
        </div>
      </div>
    );
  }
  return <BasketEmpty />;
};

export default BasketList;
