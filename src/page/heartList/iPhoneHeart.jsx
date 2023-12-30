import React from "react";
import style from "./iPhoneHeart.module.css";
import root from "../../style/root__style.module.css";
import BtnCart from "../../components/common/btnCart/btnCart";
import BtnCompare from "../../components/common/btnCompare/btnCompare";
import BtnDelete from "../../components/common/btnDelete/btnDelete";

const IphoneHeart = ({
  cartIphones,
  compareIphones,
  onDelete,
  onAddCart,
  onDeleteHeart,
  onAddCompare,
  onDeleteCompare,
  isHave,
  ...iphone
}) => {
  
  return (
    <div className={style.IphoneHeart__wrapper}>
      <div className={style.IphoneHeart}>
        <div>
          <img
            className={root.img + " " + style.IphoneHeart__img}
            src={iphone.img}
            alt="image"
          />
        </div>

        <div style={{ width: "260px" }}>
          <div className={style.IphoneHeart__name}>
            <div>{iphone.name.name}</div>
            <div>{iphone.memories.memory}</div>
          </div>
          <div>{iphone.visualAppearance.name}</div>
          <div className={style.IphoneHeart__btns}>
            <BtnCompare
              products={compareIphones}
              id={iphone._id}
              currentProduct={iphone}
              onAddCompare={onAddCompare}
              onDeleteCompare={onDeleteCompare}
            />
            <BtnDelete id={iphone._id} onDel={onDeleteHeart} />
          </div>
        </div>

        <div>
          <div className={style.IphoneHeart__price}>{iphone.price} ₽</div>
          <BtnCart
            products={cartIphones}
            id={iphone._id}
            currentProduct={iphone}
            onDelete={onDelete}
            onAddCart={onAddCart}
          />
        </div>
      </div>
    </div>
  );
};

export default IphoneHeart;
