import React from "react";
import PropTypes from "prop-types";
import { isHave } from "../../../../utils/isHave";
import style from "./btnOnCard.module.css";

const BtnOnCard = ({
  products,
  id,
  currentProduct,
  onAdd,
  onDelete,
  beforeLogo,
  afterLogo,
}) => {
  return (
    <div className={style.btnOnCard__wrapper}>
      {!isHave(products, id) ? (
        <button
          onClick={() => {
            onAdd(currentProduct);
          }}
          className={style.btnOnCard}
        >
          {beforeLogo}
        </button>
      ) : (
        <button
          onClick={() => {
            onDelete(id);
          }}
          className={style.btnOnCard_in}
        >
          {afterLogo}
        </button>
      )}
    </div>
  );
};

BtnOnCard.propTypes = {
  products: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  currentProduct: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BtnOnCard;
