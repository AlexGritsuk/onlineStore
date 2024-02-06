import React from "react";
import style from "./productHeart.module.css";
import root from "../../style/root__style.module.css";
import BtnCart from "../../components/common/buttons/btnCart/btnCart";
import BtnCompare from "../../components/common/buttons/btnCompare/btnCompare";
import BtnDelete from "../../components/common/buttons/btnDelete/btnDelete";

const ProductHeart = ({
  cartProducts,
  compareIphones,
  onDeleteCart,
  onAddCart,
  onDeleteHeart,
  onAddCompare,
  onDeleteCompare,
  ...product
}) => {
  return (
    <div className={style.productHeart__wrapper}>
      <div className={style.productHeart}>
        <div>
          <img
            className={root.img + " " + style.productHeart__img}
            src={product.img[0]}
            alt="image"
          />
        </div>

        <div style={{ width: "260px" }}>
          <div className={style.productHeart__name}>
            <div>{product.name.name}</div>
            <div>{product.memories?.memory}</div>
          </div>
          <div>{product.visualAppearance.name}</div>
          <div className={style.productHeart__btns}>
            <BtnCompare 
              products={compareIphones}
              id={product._id}
              currentProduct={product}
              onAddCompare={onAddCompare}
              onDeleteCompare={onDeleteCompare}
            />
            <BtnDelete id={product._id} onDel={onDeleteHeart} />
          </div>
        </div>

        <div>
          <div className={style.productHeart__price}>{product.price} ₽</div>
          <BtnCart
            products={cartProducts}
            id={product._id}
            currentProduct={product}
            onDelete={onDeleteCart}
            onAddCart={onAddCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductHeart;
