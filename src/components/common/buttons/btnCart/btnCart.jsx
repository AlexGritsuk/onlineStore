import React from "react";
import { isHave } from "../../../../utils/isHave";
import { PiShoppingCartBold } from "react-icons/pi";
import style from "./btnCart.module.css";
import PropTypes from "prop-types";

const BtnCart = ({ products, id, currentProduct, onDelete, onAddCart }) => {
  return (
    <div>
      {!isHave(products, id) ? (
        <button
          onClick={() => onAddCart(currentProduct)}
          className={style.btn + " " + style.btnCart}
        >
          <PiShoppingCartBold style={{ width: "20px", height: "20px" }} /> В
          корзину
        </button>
      ) : (
        <button
          onClick={() => onDelete(id)}
          className={style.btn + " " + style.btnCart + " " + style.bntCart__in}
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
  onDelete: PropTypes.func.isRequired,
  onAddCart: PropTypes.func.isRequired,
};

export default BtnCart;
