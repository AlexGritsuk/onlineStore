import React, { useEffect, useState } from "react";
import style from "./iphonePage.module.css";
import root from "../../style/root__style.module.css";
import GroupList from "../../components/common/groupList/groupList";
import { useIphone } from "../../hooks/useIphone";
import ProductsGrid from "../../components/common/productsGrid/productsGrid";
import { useCart } from "../../hooks/useCart";
import { useHeart } from "../../hooks/useHeart";
import { useCompare } from "../../hooks/useCompare";

const IphonesPage = () => {
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

  const { iphones } = useIphone();
  const linkName = "Iphones";

  return (
    <div className={root.container}>
      <div className={style.iphonePage}>
        <div className={style.iphonePage__groupList}>
          <GroupList />
        </div>
        <div className={style.iphonePage__iphoneGrid}>
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
            products={iphones}
            linkName={linkName}
          />
        </div>
      </div>
    </div>
  );
};

export default IphonesPage;
