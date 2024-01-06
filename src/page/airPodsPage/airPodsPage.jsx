import React from "react";
import ProductsGrid from "../../components/common/productsGrid/productsGrid";
import GroupList from "../../components/common/groupList/groupList";
import { useHeart } from "../../hooks/useHeart";
import { useCompare } from "../../hooks/useCompare";
import { useCart } from "../../hooks/useCart";

import root from "../../style/root__style.module.css";
import style from "./airPodsPage.module.css";
import { useAirPods } from "../../hooks/useAirPods";

const AirPodsPage = () => {
  const {
    cartProducts,
    countCart,
    handleAddCartProducts,
    handleDeleteCartProducts,
  } = useCart();

  const {
    heartProducts,
    countHeart,
    handleAddHeartProducts,
    handleDeleteHeartProducts,
  } = useHeart();

  const {
    compareIphones,
    countItemCompare,
    handleAddCompareIphone,
    handleDeleteCompareIphone,
  } = useCompare();

  const { airPods } = useAirPods();
  
  return (
    <div className={root.container}>
      <div className={style.airPodsPage}>
        <div className={style.airPodsPage__groupList}>
          <GroupList />
        </div>
        <div className={style.airPodsPage__airPodsGrid}>
          <ProductsGrid
            productsCart={cartProducts}
            onAddCart={handleAddCartProducts}
            onDeleteCart={handleDeleteCartProducts}
            productsHeart={heartProducts}
            onAddHeart={handleAddHeartProducts}
            onDeleteHeart={handleDeleteHeartProducts}
            productsCompare={compareIphones}
            onAddCompare={handleAddCompareIphone}
            onDeleteCompare={handleDeleteCompareIphone}
            countCart={countCart}
            countHeart={countHeart}
            countItemCompare={countItemCompare}
            products={airPods}
          />
        </div>
      </div>
    </div>
  );
};

export default AirPodsPage;
