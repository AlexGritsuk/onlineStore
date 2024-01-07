import React from "react";
import style from "./productCompare.module.css";

const ProductCompare = ({ ...compareIphone }) => {
  return (
    <div className={style.productCompare__wrapper}>
      <div className={style.productCompare}> 
        <div className={style.productCompare__img}>
          <img  src={compareIphone.img[0]} alt="" />
        </div>

        <div className={style.productCompare__description}>
          <div className={style.productCompare__description__item}>
            <div>{compareIphone.name.name}</div>
            {/* <div>{compareIphone.memories.memory}</div> */}
          </div>
          <div className={style.productCompare__description__item}>
            {compareIphone.visualAppearance.name}
          </div>
        </div>

        <div>{compareIphone.price}</div>
      </div>
    </div>
  );
};

export default ProductCompare;
