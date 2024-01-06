import React from "react";
import PropTypes from "prop-types";
import style from "./iphoneCard.module.css";
import root from "../../style/root__style.module.css";
import { useIphone } from "../../hooks/useIphone";
import { useCompare } from "../../hooks/useCompare";
import { PiShoppingCartFill } from "react-icons/pi";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { IoGitCompare } from "react-icons/io5";

import BtnOnCard from "../../components/common/btnOnCard/btnOnCard";

const IphoneCard = ({ catalog, ...iphone }) => {
  const {
    handleAddIphoneCart,
    handleDeleteIphoneCart,
    cartIphones,
    handleAddIphoneHeart,
    handleDeleteIphoneHeart,
    heartIphones,
  } = useIphone();  

  const { compareIphones, handleAddCompareIphone, handleDeleteCompareIphone } =
    useCompare();

  const btnCard = {
    cart: {
      products: cartIphones,
      id: iphone._id,
      currentProduct: iphone,
      onAdd: handleAddIphoneCart,
      onDelete: handleDeleteIphoneCart,
      beforeLogo: <PiShoppingCartFill />,
      afterLogo: <PiShoppingCartBold />,
    },
    heart: {
      products: heartIphones,
      id: iphone._id,
      currentProduct: iphone,
      onAdd: handleAddIphoneHeart,
      onDelete: handleDeleteIphoneHeart,
      beforeLogo: <FaHeart />,
      afterLogo: <FaRegHeart />,
    },
    compare: {
      products: compareIphones,
      id: iphone._id,
      currentProduct: iphone,
      onAdd: handleAddCompareIphone,
      onDelete: handleDeleteCompareIphone,
      beforeLogo: <IoGitCompare />,
      afterLogo: <IoIosGitCompare />,
    },
  };

  return (
    <div className={catalog ? style.iphoneCard__grid : style.iphoneCard__line}>
      <img
        className={root.img + " " + style.iphoneCard__img}
        src={iphone.img}
        alt="iphone"
      />

      <div className={style.iphoneCard__name}>
        <div>{iphone.name.name}</div>
        <div>{iphone.visualAppearance.name}</div>
      </div>

      <div
        className={
          catalog ? style.iphoneCard__grid_price : style.iphoneCard__line_price
        }
      >
        <div className={style.iphoneCard__price}>{iphone.price} ₽</div>

        <div className={style.iphoneCard__buttons}>
          <BtnOnCard {...btnCard.cart} />
          <BtnOnCard {...btnCard.heart} />
          <BtnOnCard {...btnCard.compare} />
        </div>
      </div>
    </div>
  );
};

IphoneCard.propTypes = {
  catalog: PropTypes.bool.isRequired,
  iphone: PropTypes.object,
};

export default IphoneCard;
