import React from "react";
import HeartEmpty from "./heartEmpty";
import ProductHeart from "./ProductHeart";
import { useCompare } from "../../hooks/useCompare";
import { useCart } from "../../hooks/useCart";
import { useHeart } from "../../hooks/useHeart";

const HeartList = () => {
  const { compareIphones, handleAddCompareIphone, handleDeleteCompareIphone } =
    useCompare();

  const { cartProducts, handleAddCartProducts, handleDeleteCartProducts } =
    useCart();

  const { heartProducts, handleAddHeartProducts, handleDeleteHeartProducts } =
    useHeart();

  if (heartProducts.length > 0) {
    return (
      <div>
        <div>
          {heartProducts.map((product) => {
            return (
              <ProductHeart
                key={product._id}
                {...product}
                cartProducts={cartProducts}
                compareIphones={compareIphones}
                onAddCart={handleAddCartProducts}
                onDeleteCart={handleDeleteCartProducts}
                onAddHeart={handleAddHeartProducts}
                onDeleteHeart={handleDeleteHeartProducts}
                onAddCompare={handleAddCompareIphone}
                onDeleteCompare={handleDeleteCompareIphone}
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
