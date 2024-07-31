import React from "react";
import style from "./productListPage.module.css";
import PropTypes from "prop-types";

const ProductPageDescription = ({ product }) => {
  return (
    <div className={style.productListPage__desc}>
      <h3 style={{ marginBottom: "15px" }}>Описание</h3>
      <div style={{ lineHeight: "1.2" }}>{product?.describe}</div>
    </div>
  );
};

ProductPageDescription.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductPageDescription;
