import React from "react";
import style from "./iphoneCart.module.css";
import root from "../../style/root__style.module.css";
import { FaRegSquarePlus } from "react-icons/fa6";
import { LuMinusSquare } from "react-icons/lu";
import BtnDelete from "../../components/common/buttons/btnDelete/btnDelete";
import BtnHeart from "../../components/common/buttons/btnHeart/btnHeart";

const ProductCart = ({
  onDelete,
  onAddHeart,
  onDeleteHeart,
  heartProducts,
  ...product
}) => {
  return (
    <div className={style.iphoneCart__wrapper}>
      <div className={style.iphoneCart}>
        <div style={{ margin: "20px" }}>
          <img
            className={root.img + " " + style.iphoneCart__img}
            src={product.img[0]}
            alt="Картинка"
          />
        </div>

        <div className={style.iphoneCart__item}>{product.name.name}</div>

        <div className={style.iphoneCart__item}>
          <div>
            <LuMinusSquare /> 1 <FaRegSquarePlus />
          </div>

          <div style={{ ["marginTop"]: "30px" }}>
            <BtnDelete id={product._id} onDel={onDelete} />
            <BtnHeart
              products={heartProducts}
              id={product._id}
              onAddHeart={onAddHeart}
              currentProduct={product}
              onDeleteHeart={onDeleteHeart}
            />
          </div>
        </div>

        <div
          style={{ ["marginRight"]: "20px" }}
          className={style.iphoneCart__item}
        >
          {product.price} ₽
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
