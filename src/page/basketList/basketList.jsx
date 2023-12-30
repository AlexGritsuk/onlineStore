import React from "react";
import { useIphone } from "../../hooks/useIphone";
import IphoneCart from "./iphoneCart";
import BasketEmpty from "./basketEmpty";

const BasketList = () => {
  const {
    cartIphones,
    heartIphones,
    handleDeleteIphoneCart,
    handleAddIphoneHeart,
    handleDeleteIphoneHeart,
    isHave
  } = useIphone();

  if (cartIphones.length > 0) {
    return (
      <div>
        <div>
          {cartIphones.map((iphone) => {
            return (
              <IphoneCart
                key={iphone._id}
                {...iphone}
                heartIphones={heartIphones}
                onDelete={handleDeleteIphoneCart}
                onAddHeart={handleAddIphoneHeart}
                onDeleteHeart={handleDeleteIphoneHeart}
                isHave = {isHave}
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
