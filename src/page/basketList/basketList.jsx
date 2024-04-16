import React from "react";
import IphoneCart from "./ProductCart";
import BasketEmpty from "./basketEmpty";

import { useHeart } from "../../hooks/useHeart";
import { useSelector } from "react-redux";
import { getCart, gethandleDeleteCartProducts } from "../../store/cart";

const BasketList = () => {
 
  const cartProducts = useSelector(getCart());
  const handleDeleteCartProducts = useSelector(gethandleDeleteCartProducts)
  const { heartProducts, handleAddHeartProducts, handleDeleteHeartProducts } =
    useHeart();

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
                onDelete={handleDeleteCartProducts}
                onAddHeart={handleAddHeartProducts}
                onDeleteHeart={handleDeleteHeartProducts}
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
