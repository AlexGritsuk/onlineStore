import React from "react";
import PropTypes from "prop-types";
import { isHave } from "../../../../utils/isHave";
import style from "./btnOnCard.module.css";
import { useDispatch } from "react-redux";
import {
  handleAddCompare,
  handleDeleteCompare,
} from "../../../../store/compare";

const BtnOnCardCompare = ({
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
            dispatch(handleAddCompare(currentProduct));
          }}
          className={style.btnOnCard}
        >
          {beforeLogo}
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(handleDeleteCompare(id));
          }}
          className={style.btnOnCard_in}
        >
          {afterLogo}
        </button>
      )}
    </div>
  );
};

BtnOnCardCompare.propTypes = {
  products: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  currentProduct: PropTypes.object.isRequired,  
};

export default BtnOnCardCompare;
