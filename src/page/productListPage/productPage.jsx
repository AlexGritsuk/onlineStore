import React from "react";
import root from "../../style/root__style.module.css";
import style from "./productListPage.module.css";
import BtnCart from "../../components/common/buttons/btnCart/btnCart";
import PropTypes from "prop-types";
import BtnCompare from "../../components/common/buttons/btnCompare/btnCompare";
import SimpleCarousel from "../../components/common/simpleCarousel/simpleCarousel";
import ProductPageName from "./productPageName";
import BtnBack from "../../components/common/buttons/btnBack/btnBack";
import BtnHeart from "../../components/common/buttons/btnHeart/btnHeart";

const ProductPage = ({ product, push }) => {
  return (
    <div className={root.container}>
      <div className={style.productListPage__wrapper}>
        <ProductPageName product={product} />
        <div className={style.productListPage__head}>
          <div className={style.productListPage__pict}>
            <div className={style.productListPage__pict_img}>
              <SimpleCarousel images={product.img} />
            </div>
          </div>

          <div className={style.productListPage__desc}>
            <h3 style={{ marginBottom: "15px" }}>Описание</h3>
            <div style={{ lineHeight: "1.2" }}>{product?.describe}</div>
          </div>

          <div className={style.productListPage__info}>
            <div className={style.productListPage__info_item}>
              <div>{product.price} ₽</div>
              <BtnCart id={product._id} currentProduct={product} />
            </div>

            <div className={style.productListPage__info_item}>Комплектация</div>
            <div className={style.productListPage__info_btn}>
              <div>
                <BtnCompare id={product._id} currentProduct={product} />
              </div>
              <div>
                <BtnHeart id={product._id} currentProduct={product} />
              </div>
            </div>
          </div>
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
