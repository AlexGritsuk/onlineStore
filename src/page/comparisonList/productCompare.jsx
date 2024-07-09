import React from "react";
import style from "./productCompare.module.css";
import BtnCart from "../../components/common/buttons/btnCart/btnCart";
import { useSelector } from "react-redux";
import { getCart } from "../../store/cart";
import BtnDeleteCompare from "../../components/common/buttons/btnCompare/btnDeleteCompare";

const ProductCompare = ({ deleteCompare, ...compare }) => {
  const cartProducts = useSelector(getCart());

  return (
    <div className={style.productCompare__wrapper}>
      <div className={style.productCompare}>
        <div className={style.productCompare__img}>
          <img src={compare.img[0]} alt="" />
        </div>

        <div className={style.productCompare__description}>
          <div className={style.productCompare__description__item}>
            <div>{compare.name.name}</div>
            <div style={{ marginLeft: "10px" }}>
              {compare.memories?.memory}
            </div>
          </div>
          <div className={style.productCompare__description__item}>
            {compare.visualAppearance.name}
          </div>
        </div>

        <div>{compare.price} ₽</div>

        <div style={{ marginTop: "15px" }}>
          <div>
            <BtnCart
              products={cartProducts}
              id={compare._id}
              currentProduct={compare}
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <BtnDeleteCompare
              id={compare._id}
              deleteCompare={deleteCompare}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCompare;
