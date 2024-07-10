import React from "react";
import { isHave } from "../../../../utils/isHave";
import { IoIosGitCompare } from "react-icons/io";
import style from "./btnCompare.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { handleAddCompare, handleDeleteCompare } from "../../../../store/compare";
import { handleAddCompareAirPods, handleDeleteCompareAirPods } from "../../../../store/compareAirPods";
import { handleAddCompareMacBooks, handleDeleteCompareMacBooks } from "../../../../store/compareMacBooks";

const BtnCompare = ({
  productIphone,
  productAirPods,
  productMacBooks,
  id,
  currentProduct,  
}) => {
  const dispatch = useDispatch();  

  const handleIdentifyProduct = (product) => {
      if(product.hasOwnProperty("Specifications")) {
       return handleAddCompare(product)
      }
      if(product.hasOwnProperty("specificationsMacBooks")) {
        return handleAddCompareMacBooks(product)
       }
      if(product.hasOwnProperty("specificationsAirPods")) {
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
    if (id[0] === "1") {
      return handleDeleteCompareMacBooks(id)
    }
  } 

  return (
    <div>
      {!isHave(productAirPods, id) && !isHave(productIphone, id) && !isHave(productMacBooks, id) ? (
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
