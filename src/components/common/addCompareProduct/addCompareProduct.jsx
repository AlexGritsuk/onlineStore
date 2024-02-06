import React from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import style from "./addCompareProduct.module.css";

const AddCompareProduct = () => {
  return (
    <div className={style.addCompareProduct}>
      <div>
        <Link to="/Iphones">
            <button className={style.addCompareProduct_btn}>
              <span>
                <IoAddCircleOutline />
              </span>
              <div>Добавить товар к сравнению</div>
            </button>
        </Link>
      </div>
    </div>
  );
};

export default AddCompareProduct;
