import React from "react";
import { isHave } from "../../../../utils/isHave";
import { IoIosGitCompare } from "react-icons/io";
import style from "./btnCompare.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { handleAddCompare, handleDeleteCompare } from "../../../../store/compare";
import { handleAddCompareAirPods, handleDeleteCompareAirPods } from "../../../../store/compareAirPods";

const BtnCompare = ({
  productIphone,
  productAirPods,
  id,
  currentProduct,  
}) => {
  const dispatch = useDispatch();  

  const handleIdentifyProduct = (product) => {
      if(product.hasOwnProperty("Specifications")) {
       return handleAddCompare(product)
      } else {
       return handleAddCompareAirPods(product)
      }
  }

  const handleIdentifyId = (id) => {
    if(id[0] === "5") {
      return handleDeleteCompareAirPods(id)
    }
    if (id[0] === "3") {
      return handleDeleteCompare(id)
    }
  }

  return (
    <div>
      {!isHave(productAirPods, id) && !isHave(productIphone, id) ? (
        <button
          onClick={() => dispatch(handleIdentifyProduct(currentProduct))}
          className={style.btnCompare__delete}
        >
          <IoIosGitCompare style={{ width: "20px", height: "20px" }} />
          <span>Сравнить</span>
        </button>
      ) : (
        <button
          onClick={() => dispatch(handleIdentifyId(id))}
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
  productIphone: PropTypes.array.isRequired,
  productAirPods: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  currentProduct: PropTypes.object.isRequired, 
};

export default BtnCompare;
