import React from "react";
import PropTypes from "prop-types";
import { isHave } from "../../../../utils/isHave";
import style from "./btnOnCard.module.css";
import { useDispatch } from "react-redux";
import { gethandleAddCartProducts, gethandleDeleteCartProducts } from "../../../../store/cart";

const BtnOnCardCart = ({
  products,
  id,
  currentProduct,    
  beforeLogo,
  afterLogo,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={style.btnOnCard__wrapper}>
      {!isHave(products, id) ? (
        <button
          onClick={() => { 
            dispatch(gethandleAddCartProducts(currentProduct))
          }}
          className={style.btnOnCard}
        >
          {beforeLogo}
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(gethandleDeleteCartProducts(id))
          }}
          className={style.btnOnCard_in}
        >
          {afterLogo}
        </button>
      )}
    </div>
  );
};

BtnOnCardCart.propTypes = {
  products: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  currentProduct: PropTypes.object.isRequired,   
};

export default BtnOnCardCart;
