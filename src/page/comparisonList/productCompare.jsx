import React from "react";
import style from "./productCompare.module.css";
import BtnCart from "../../components/common/buttons/btnCart/btnCart";
import { useSelector } from "react-redux";
import { getCart } from "../../store/cart";
import BtnDeleteCompare from "../../components/common/buttons/btnCompare/btnDeleteCompare";

const ProductCompare = ({ ...compareIphone }) => {  
    const cartProducts = useSelector(getCart());

  return (
    <div className={style.productCompare__wrapper}>
      <div className={style.productCompare}>
        <div className={style.productCompare__img}>
          <img src={compareIphone.img[0]} alt="" />
        </div>

        <div className={style.productCompare__description}>
          <div className={style.productCompare__description__item}>
            <div>{compareIphone.name.name}</div>
            <div style={{ marginLeft: "10px" }}>
              {compareIphone.memories?.memory}
            </div>
          </div>
          <div className={style.productCompare__description__item}>
            {compareIphone.visualAppearance.name}
          </div>
        </div>

        <div>{compareIphone.price} ₽</div>

        <div style={{ marginTop: "15px" }}>
          <div>
            <BtnCart
              products={cartProducts}
              id={compareIphone._id}
              currentProduct={compareIphone}              
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <BtnDeleteCompare
              id={compareIphone._id}              
            />
          </div>
        </div>
      </div>      
    </div>
  );
};

export default ProductCompare;
