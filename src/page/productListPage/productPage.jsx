import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import root from "../../style/root__style.module.css";
import style from "./productListPage.module.css";
import BtnCart from "../../components/common/buttons/btnCart/btnCart";
import PropTypes from "prop-types";
import BtnCompare from "../../components/common/buttons/btnCompare/btnCompare";
import BtnHeart from "../../components/common/buttons/btnHeart/btnHeart";
import { useCompare } from "../../hooks/useCompare";
import { useHeart } from "../../hooks/useHeart";
import SimpleCarousel from "../../components/common/simpleCarousel/simpleCarousel";
import { useSelector } from "react-redux";
import { getCart, gethandleAddCartProducts, gethandleDeleteCartProducts } from "../../store/cart";

const ProductPage = ({ product, push }) => { 
  const history = useHistory()
  

    const cartProducts = useSelector(getCart());
    const handleAddCartProducts = useSelector(gethandleAddCartProducts);
    const handleDeleteCartProducts = useSelector(gethandleDeleteCartProducts);



  const { compareIphones, handleAddCompareIphone, handleDeleteCompareIphone } =
    useCompare();

  const { heartProducts, handleAddHeartProducts, handleDeleteHeartProducts } =
    useHeart();

  const handleBack = () => {
    history.push(`/${push}`);
  };

  return (
    <div className={root.container}>
      <div>
        <h3>
          {" "}
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
                onAddCart={handleAddCartProducts}
                onDelete={handleDeleteCartProducts}
              />
            </div>
          </div>

          <div className={style.productListPage__info_item}>Комплектация</div>
          <div className={style.productListPage__info_btn}>
            <div>
              <BtnCompare
                products={compareIphones}
                id={product._id}
                currentProduct={product}
                onAddCompare={handleAddCompareIphone}
                onDeleteCompare={handleDeleteCompareIphone}
              />
            </div>
            <div>
              <BtnHeart
                products={heartProducts}
                id={product._id}
                currentProduct={product}
                onAddHeart={handleAddHeartProducts}
                onDeleteHeart={handleDeleteHeartProducts}
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => handleBack()}>Вернуться назад</button>
    </div>
  );
};

ProductPage.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductPage;
