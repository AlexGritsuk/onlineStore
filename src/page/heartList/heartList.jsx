import React from "react";
import { useIphone } from "../../hooks/useIphone";
import HeartEmpty from "./heartEmpty";
import IphoneHeart from "./iPhoneHeart";
import { useCompare } from "../../hooks/useCompare";

const HeartList = () => {
  const {
    heartIphones,
    cartIphones,
    handleDeleteIphoneHeart,
    handleDeleteIphoneCart, 
    handleAddIphoneHeart,
    handleAddIphoneCart,
    isHave,
  } = useIphone();

  const { compareIphones, handleAddCompareIphone, handleDeleteCompareIphone } =
    useCompare();

  if (heartIphones.length > 0) {
    return (
      <div>
        <div>
          {heartIphones.map((iphone) => {
            return (
              <IphoneHeart
                key={iphone._id}
                {...iphone}
                heartIphones={heartIphones}
                cartIphones={cartIphones}
                compareIphones={compareIphones}
                onAddCart={handleAddIphoneCart}
                onDelete={handleDeleteIphoneCart}
                onAddHeart={handleAddIphoneHeart}
                onDeleteHeart={handleDeleteIphoneHeart}
                isHave={isHave}
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
