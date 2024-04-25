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
    <div> 
      {!isHave(products, id) ? (
        <button
          onClick={() => dispatch(gethandleAddCartProducts(currentProduct))}
          className={style.btn + " " + style.btnCart}
        >
          <PiShoppingCartBold style={{ width: "20px", height: "20px" }} /> В
          корзину
        </button>
      ) : (
        <button
          onClick={() => dispatch(gethandleDeleteCartProducts(id))}
          className={style.btnCart + " " + style.btnCart__in}
        >
          <PiShoppingCartBold style={{ width: "20px", height: "20px" }} /> В
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
