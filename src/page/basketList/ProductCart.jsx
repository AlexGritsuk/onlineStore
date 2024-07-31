import React from "react";
import style from "./iphoneCart.module.css";
import root from "../../style/root__style.module.css";
import BtnDelete from "../../components/common/buttons/btnDelete/btnDelete";
import BtnHeart from "../../components/common/buttons/btnHeart/btnHeart";

const ProductCart = ({...product }) => {
  return (
    <div className={style.iphoneCart__wrapper}>
      <div className={style.iphoneCart}>
        <div className={style.iphoneCart__imges}>
          <img
            className={root.img + " " + style.iphoneCart__img}
            src={product.img[0]} 
            alt="Картинка"
          />
        </div>

        <div className={style.iphoneCart__name}>{product.name.name}</div>

        <div>
          <div className={style.iphoneCart__item}>           
            <div style={{ ["marginTop"]: "30px" }}>          
              <BtnDelete id={product._id} />
              <div style={{ marginTop: "20px" }}>
                <BtnHeart                  
                  id={product._id}
                  currentProduct={product}
                />
              </div>
          
            </div>
          </div>
          
          <div className={style.iphoneCart__price}>{product.price}₽</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
