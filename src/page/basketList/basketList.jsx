import React from "react";
import IphoneCart from "./ProductCart";
import BasketEmpty from "./basketEmpty";
import { useCart } from "../../hooks/useCart";
import { useHeart } from "../../hooks/useHeart";

const BasketList = () => {
  const { cartProducts, handleDeleteCartProducts } = useCart();
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
