import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import root from "../../style/root__style.module.css";
import style from "./productListPage.module.css";
import BtnCart from "../../components/common/buttons/btnCart/btnCart";
import PropTypes from "prop-types";
import BtnCompare from "../../components/common/buttons/btnCompare/btnCompare";
import BtnHeart from "../../components/common/buttons/btnHeart/btnHeart";
import SimpleCarousel from "../../components/common/simpleCarousel/simpleCarousel";
import { useSelector } from "react-redux";
import { getCart } from "../../store/cart";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { getHeart } from "../../store/heart";
import { getCompare } from "../../store/compare";

const ProductPage = ({ product, push }) => {
  const history = useHistory();

  const cartProducts = useSelector(getCart());
  const heartProducts = useSelector(getHeart());
  const compareProducts = useSelector(getCompare());

  const handleBack = () => {
    history.push(`/${push}`);
  };

  return (
    <div className={root.container}>
      <div>
        <h3>
          {product.name.name} <span>{product.visualAppearance.name}</span>
        </h3>
      </div>
      <div className={style.productListPage__head}>
        <div className={style.productListPage__pict}>
          <div className={style.productListPage__pict_img}>
            <SimpleCarousel images={product.img} />
          </div>
        </div>
        <div className={style.productListPage__desc}></div>
        <div className={style.productListPage__info}>
          <div className={style.productListPage__info_item}>
            <div>{product.price} ₽</div>
            <div>
              <BtnCart
                products={cartProducts}
                id={product._id}
                currentProduct={product}
              />
            </div>
          </div>

          <div className={style.productListPage__info_item}>Комплектация</div>
          <div className={style.productListPage__info_btn}>
            <div>
              <BtnCompare
                products={compareProducts}
                id={product._id}
                currentProduct={product}
              />
            </div>
            <div>
              <BtnHeart
                products={heartProducts}
                id={product._id}
                currentProduct={product}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className={style.productListPage__btnBack}
        onClick={() => handleBack()}
      >
        <div style={{ margin: "5px" }}>
          <IoArrowBackCircleOutline style={{ width: "25px", height: "25px" }} />
        </div>
        <div> Вернуться назад</div>
      </button>
    </div>
  );
};

ProductPage.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductPage;
