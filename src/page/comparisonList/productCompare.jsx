import React from "react";
import style from "./productCompare.module.css";
import BtnCart from "../../components/common/buttons/btnCart/btnCart";
import BtnDeleteCompare from "../../components/common/buttons/btnCompare/btnDeleteCompare";

const ProductCompare = ({ deleteCompare, ...compare }) => {  

  return (
    <div className={style.productCompare__wrapper}>
      <div className={style.productCompare}>
        <div className={style.productCompare__info}>
          <div className={style.productCompare__imges}>
            <img
              className={style.productCompare__img}
              src={compare.img[0]}
              alt=""
            />
          </div>

          <div className={style.productCompare__description}>
            <div>
              {compare.name.name}
              <span> {compare.memories?.memory}</span>
            </div>
            <div>{compare.visualAppearance.name}</div>
            <div>{compare.price} ₽</div>
          </div>
        </div>

        <div className={style.productCompare__btns}>
          <div className={style.productCompare__btn_cart}>
            <BtnCart              
              id={compare._id}
              currentProduct={compare}
            />
          </div>
          <div className={style.productCompare__btn_compare}>
            <BtnDeleteCompare id={compare._id} deleteCompare={deleteCompare} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCompare;
