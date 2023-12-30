import React from "react";
import { isHave } from "../../../utils/isHave";
import { IoIosGitCompare } from "react-icons/io";
import style from "./btnCompare.module.css";
import PropTypes from "prop-types";

const BtnCompare = ({
  products,
  id,
  currentProduct,
  onAddCompare,
  onDeleteCompare,
}) => {
  return (
    <div>
      {!isHave(products, id, currentProduct) ? (
        <button
          onClick={() => onAddCompare(currentProduct)}
          className={style.btnCompare__delete}
        >
          <IoIosGitCompare style={{ width: "20px", height: "20px" }} />
          <span>Сравнить</span>
        </button>
      ) : (
        <button
          onClick={() => onDeleteCompare(id)}
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
  onDeleteCompare: PropTypes.func.isRequired,
  onAddCompare: PropTypes.func.isRequired,
};

export default BtnCompare;
