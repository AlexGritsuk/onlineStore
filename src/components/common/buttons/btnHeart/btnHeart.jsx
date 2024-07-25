import React from "react";
import { isHave } from "../../../../utils/isHave";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import style from "./btnHeart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getHeart, handleAddHeart, handleDeleteHeart } from "../../../../store/heart";

const BtnHeart = ({ id, currentProduct }) => {
  const products = useSelector(getHeart());

  const dispatch = useDispatch();
  return (
    <div className={style.btnHeart}>
      {!isHave(products, id) ? (
        <button
          className={style.btnHeart__delete}
          onClick={() => dispatch(handleAddHeart(currentProduct))}
        >
          <FaRegHeart style={{ width: "20px", height: "20px" }} />
          <span>В избранное</span>
        </button>
      ) : (
        <button
          className={style.btnHeart__delete_in}
          onClick={() => dispatch(handleDeleteHeart(id))}
        >
          <FaRegHeart style={{ width: "20px", height: "20px" }} />
          <span>В избранном</span>
        </button>
      )}
    </div>
  );
};

BtnHeart.propTypes = {  
  id: PropTypes.string.isRequired,
  currentProduct: PropTypes.object.isRequired,  
};

export default BtnHeart;
