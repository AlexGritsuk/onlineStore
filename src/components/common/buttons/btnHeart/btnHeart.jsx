import React from "react";
import { isHave } from "../../../../utils/isHave";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import style from "./btnHeart.module.css";

const BtnHeart = ({
  products,
  id,
  onAddHeart,
  currentProduct,
  onDeleteHeart,
}) => {
  return (
    <div className={style.btnHeart}>
      {!isHave(products, id) ? (
        <button
          className={style.btnHeart__delete}
          onClick={() => onAddHeart(currentProduct)}
        >
          <FaRegHeart style={{ width: "20px", height: "20px" }} />
          <span>В избранное</span>
        </button>
      ) : (
        <button
          className={style.btnHeart__delete_in}
          onClick={() => onDeleteHeart(id)}
        >
          <FaRegHeart style={{ width: "20px", height: "20px" }} />
          <span>В избранном</span>
        </button>
      )}
    </div>
  );
};

BtnHeart.propTypes = {
  products: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  currentProduct: PropTypes.object.isRequired,
  onAddHeart: PropTypes.func.isRequired,
  onDeleteHeart: PropTypes.func.isRequired,
};

export default BtnHeart;
