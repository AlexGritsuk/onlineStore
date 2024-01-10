import React from "react";
import { Link } from "react-router-dom";
import style from "./productCard.module.css";
import root from "../../../style/root__style.module.css";
import { PiShoppingCartFill } from "react-icons/pi";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { IoGitCompare } from "react-icons/io5";
import BtnOnCard from "../buttons/btnOnCard/btnOnCard";

const ProductCard = ({
  catalog,
  onAddCart,
  onDeleteCart,
  cartProduct,
  onAddHeart,
  onDeleteHeart,
  heartProduct,
  onAddCompare,
  onDeleteCompare,
  compareProduct,
  linkName,
  ...product
}) => {
  const btnCard = {
    cart: {
      products: cartProduct,
      id: product._id,
      currentProduct: product,
      onAdd: onAddCart,
      onDelete: onDeleteCart,
      beforeLogo: <PiShoppingCartFill />,
      afterLogo: <PiShoppingCartBold />,
    },
    heart: {
      products: heartProduct,
      id: product._id,
      currentProduct: product,
      onAdd: onAddHeart,
      onDelete: onDeleteHeart,
      beforeLogo: <FaHeart />,
      afterLogo: <FaRegHeart />,
    },
    compare: {
      products: compareProduct,
      id: product._id,
      currentProduct: product,
      onAdd: onAddCompare,
      onDelete: onDeleteCompare,
      beforeLogo: <IoGitCompare />,
      afterLogo: <IoIosGitCompare />,
    },
  };

  return (
    <div className={style.card}>
      <Link
        to={`/${linkName}/${product._id}`}
        className={style.productCard__link}
      >
        <div
          className={
            catalog ? style.productCard__grid : style.productCard__line
          }
        >
          <img
            className={root.img + " " + style.productCard__img}
            src={product.img[0]}
            alt="product"
          />

          <div className={style.productCard__name}>
            <div style={{display: "flex", padding: "5px"}}>              
              <div>{product.name.name}</div>
              <div style={{marginLeft: "4px"}}>{product.memories?.memory}</div>
            </div>
            <div>{product.visualAppearance.name}</div>
          </div>

          <div
            className={
              catalog
                ? style.productCard__grid_price
                : style.productCard__line_price
            }
          >
            <div className={style.productCard__price}>{product.price} ₽</div>
          </div>
        </div>
      </Link>
      <div
        className={
          catalog
            ? style.productCard__buttons_grid
            : style.productCard__buttons_line
        }
      >
        <BtnOnCard {...btnCard.cart} />
        <BtnOnCard {...btnCard.heart} />
        <BtnOnCard {...btnCard.compare} />
      </div>
    </div>
  );
};

export default ProductCard;
