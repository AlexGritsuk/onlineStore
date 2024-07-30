import React from "react";
import root from "../../style/root__style.module.css";
import style from "./productListPage.module.css";
import PropTypes from "prop-types";
import ProductPageName from "./productPageName";
import BtnBack from "../../components/common/buttons/btnBack/btnBack";
import ProductPageInfo from "./productPageInfo";
import ProductPageDescription from "./productPageDescription";
import ProductPagePicture from "./productPagePicture";

const ProductPage = ({ product, push }) => {
  return (
    <div className={root.container}>
      <div className={style.productListPage__wrapper}>
        <ProductPageName product={product} />
        <div className={style.productListPage__head}>
          <ProductPagePicture product={product} />
          <ProductPageDescription product={product} />
          <ProductPageInfo product={product} />
        </div>
        <BtnBack push={push} />
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  product: PropTypes.object.isRequired,
  push: PropTypes.string.isRequired,
};

export default ProductPage;
