import React from "react";
import style from "./productHeart.module.css";
import root from "../../style/root__style.module.css";
import BtnCart from "../../components/common/buttons/btnCart/btnCart";
import BtnCompare from "../../components/common/buttons/btnCompare/btnCompare";
import BtnDeleteHeart from "../../components/common/buttons/btnHeart/btnDeleteHeart";
import { useSelector } from "react-redux";
import { getCart } from "../../store/cart";
import { getCompare } from "../../store/compare";
import { getCompareAirPods } from "../../store/compareAirPods";


const ProductHeart = ({    
  ...product
}) => { 
  
  const cartProducts = useSelector(getCart());
  const compareProducts = useSelector(getCompare());  
  const compareProductAirPods = useSelector(getCompareAirPods());  

  // console.log(compareProducts);
  return (

    <div className={style.productHeart__wrapper}>
      <div className={style.productHeart}> 
        <div className={style.productHeart__image}>
          <img
            className={root.img + " " + style.productHeart__img}
            src={product.img[0]}
            alt="image"
          />
        </div>

        <div className={style.productHeart__other}>

          <div className={style.productHeart__info1}>
            <div className={style.productHeart__name}>
              <div>{product.name.name}</div>
              <div>{product.memories?.memory}</div>
            </div>
            <div>{product.visualAppearance.name}</div>
            <div className={style.productHeart__btns}>
              <BtnCompare 
                productIphone={compareProducts}
                productAirPods={compareProductAirPods}
                id={product._id}
                currentProduct={product}              
              />
              <BtnDeleteHeart id={product._id} />
            </div>
          </div>
          
          <div className={style.productHeart__info2}>
            <div className={style.productHeart__price}>{product.price} <span>₽</span></div>
            <div className={style.productHeart__btnCart}>
            <BtnCart
              products={cartProducts}
              id={product._id}
              currentProduct={product}            
            />
            </div>            
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductHeart;
