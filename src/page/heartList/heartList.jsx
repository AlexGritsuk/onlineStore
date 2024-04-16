import React from "react";
import HeartEmpty from "./heartEmpty";
import ProductHeart from "./ProductHeart";
import { useCompare } from "../../hooks/useCompare";
import { useHeart } from "../../hooks/useHeart";
import { useSelector } from "react-redux";
import { getCart, gethandleAddCartProducts, gethandleDeleteCartProducts } from "../../store/cart";

const HeartList = () => {
  const { compareIphones, handleAddCompareIphone, handleDeleteCompareIphone } =
    useCompare();  

    const cartProducts = useSelector(getCart());
    const handleAddCartProducts = useSelector(gethandleAddCartProducts);
    const handleDeleteCartProducts = useSelector(gethandleDeleteCartProducts)

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
