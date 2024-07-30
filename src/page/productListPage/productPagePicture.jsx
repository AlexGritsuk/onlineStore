import React from "react";
import style from "./productListPage.module.css";
import PropTypes from "prop-types";
import SimpleCarousel from "../../components/common/simpleCarousel/simpleCarousel";

const ProductPagePicture = ({product}) => {
  return (
    <div className={style.productListPage__pict}>
      <div className={style.productListPage__pict_img}>
        <SimpleCarousel images={product.img} />
      </div>
    </div>
  );
};

ProductPagePicture.propTypes = {
    product: PropTypes.object.isRequired,
    push: PropTypes.string.isRequired,
  };

export default ProductPagePicture;
