import React from "react";
import style from "./productListPage.module.css";

const ProductPageName = ({ product }) => {
  return (
    <div className={style.productListPage__name}>
      <h3>
        <span> {product.name.name}</span>
        <span> {product.visualAppearance.name}</span>
        <span> {product.memories?.memory}</span>
      </h3>
    </div>
  );
};

export default ProductPageName;
