import React from "react";
import style from "./productListPage.module.css";
import BtnCart from "../../components/common/buttons/btnCart/btnCart";
import BtnCompare from "../../components/common/buttons/btnCompare/btnCompare";
import BtnHeart from "../../components/common/buttons/btnHeart/btnHeart";

const ProductPageInfo = ({ product }) => {
  return (
    <div className={style.productListPage__info}>
      <div className={style.productListPage__info_item}>
        <div className={style.productListPage__price}>{product.price} ₽</div>
        <BtnCart id={product._id} currentProduct={product} />
      </div>

      {/* <div className={style.productListPage__info_item}>Комплектация</div> */}
      <div className={style.productListPage__info_btn}>
        <div className={style.productListPage__info_btn_compare}>
          <BtnCompare id={product._id} currentProduct={product} />
        </div>
        <div>
          <BtnHeart id={product._id} currentProduct={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPageInfo;
