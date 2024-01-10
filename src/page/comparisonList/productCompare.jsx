import React from "react";
import style from "./productCompare.module.css";
import BtnCart from "../../components/common/buttons/btnCart/btnCart";
import BtnDelete from "../../components/common/buttons/btnDelete/btnDelete";
import { useCart } from "../../hooks/useCart";
import { useCompare } from "../../hooks/useCompare";

const ProductCompare = ({ ...compareIphone }) => {
  const { cartProducts, handleAddCartProducts, handleDeleteCartProducts } =
    useCart();

  const { handleDeleteCompareIphone } = useCompare();

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
              onDelete={handleDeleteCartProducts}
              onAddCart={handleAddCartProducts}
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <BtnDelete
              id={compareIphone._id}
              onDel={handleDeleteCompareIphone}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCompare;
