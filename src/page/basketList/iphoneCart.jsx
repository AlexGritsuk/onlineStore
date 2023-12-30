import React from "react";
import style from "./iphoneCart.module.css";
import root from "../../style/root__style.module.css";
import { FaRegSquarePlus } from "react-icons/fa6";
import { LuMinusSquare } from "react-icons/lu";
import BtnDelete from "../../components/common/btnDelete/btnDelete";
import BtnHeart from "../../components/common/btnHeart/btnHeart";

const IphoneCart = ({
  onDelete,
  onAddHeart,
  onDeleteHeart,
  isHave,
  heartIphones,
  ...iphone
}) => {
  return (
    <div className={style.iphoneCart__wrapper}>
      <div className={style.iphoneCart}>
        <div style={{ margin: "20px" }}>
          <img
            className={root.img + " " + style.iphoneCart__img}
            src={iphone.img}
            alt="Картинка"
          />
        </div>

        <div className={style.iphoneCart__item}>{iphone.name.name}</div>

        <div className={style.iphoneCart__item}>
          <div>
            <LuMinusSquare /> 1 <FaRegSquarePlus />
          </div>

          <div style={{ ["marginTop"]: "30px" }}>
            <BtnDelete id={iphone._id} onDel={onDelete} />
            <BtnHeart
              products={heartIphones}
              id={iphone._id}
              onAddHeart={onAddHeart}
              currentProduct={iphone}
              onDeleteHeart={onDeleteHeart}
            />
          </div>
        </div>

        <div
          style={{ ["marginRight"]: "20px" }}
          className={style.iphoneCart__item}
        >
          {iphone.price} ₽
        </div>
      </div>
    </div>
  );
};

export default IphoneCart;
