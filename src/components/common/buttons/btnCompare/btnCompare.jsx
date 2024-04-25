import React from "react";
import { isHave } from "../../../../utils/isHave";
import { IoIosGitCompare } from "react-icons/io";
import style from "./btnCompare.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { handleAddCompare, handleDeleteCompare } from "../../../../store/compare";

const BtnCompare = ({
  products,
  id,
  currentProduct,  
}) => {
  const dispatch = useDispatch()
  return (
    <div>
      {!isHave(products, id, currentProduct) ? (
        <button
          onClick={() => dispatch(handleAddCompare(currentProduct))}
          className={style.btnCompare__delete}
        >
          <IoIosGitCompare style={{ width: "20px", height: "20px" }} />
          <span>Сравнить</span>
        </button>
      ) : (
        <button
          onClick={() => dispatch(handleDeleteCompare(id))}
          className={style.btnCompare__delete_in}
        >
          <IoIosGitCompare style={{ width: "20px", height: "20px" }} />
          <span>Сравнить</span>
        </button>
      )}
    </div>
  );
};

BtnCompare.propTypes = {
  products: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  currentProduct: PropTypes.object.isRequired, 
};

export default BtnCompare;
