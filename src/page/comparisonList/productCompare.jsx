import React from "react";
import style from "./iphoneCompare.module.css";

const ProductCompare = ({ ...compareIphone }) => {
  return (
    <div className={style.iphoneCompare__wrapper}>
      <div className={style.iphoneCompare}> 
        <div className={style.iphoneCompare__img}>
          <img  src={compareIphone.img[0]} alt="" />
        </div>

        <div className={style.iphoneCompare__description}>
          <div className={style.iphoneCompare__description__item}>
            <div>{compareIphone.name.name}</div>
            {/* <div>{compareIphone.memories.memory}</div> */}
          </div>
          <div className={style.iphoneCompare__description__item}>
            {compareIphone.visualAppearance.name}
          </div>
        </div>

        <div>{compareIphone.price}</div>
      </div>
    </div>
  );
};

export default ProductCompare;
