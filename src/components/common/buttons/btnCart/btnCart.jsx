import React from "react";
import { isHave } from "../../../../utils/isHave";
import { PiShoppingCartBold } from "react-icons/pi";
import style from "./btnCart.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { gethandleAddCartProducts, gethandleDeleteCartProducts } from "../../../../store/cart"; 

const BtnCart = ({ products, id, currentProduct }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.btnCart__wrapper}> 
      {!isHave(products, id) ? (
        <button
          onClick={() => dispatch(gethandleAddCartProducts(currentProduct))}
          className={style.btn + " " + style.btnCart}
        >
          <PiShoppingCartBold className={style.btnCart__icon} /> В
          корзину
        </button>
      ) : (
        <button
          onClick={() => dispatch(gethandleDeleteCartProducts(id))}
          className={style.btnCart + " " + style.btnCart__in}
        >
          <PiShoppingCartBold className={style.btnCart__icon} /> В
          корзине
        </button>
      )}
    </div>
  );
};

BtnCart.propTypes = {
  products: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  currentProduct: PropTypes.object.isRequired,  
};

export default BtnCart;
