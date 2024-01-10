import React from "react";
import ProductsGrid from "../../components/common/productsGrid/productsGrid";
import GroupList from "../../components/common/groupList/groupList";
import { useHeart } from "../../hooks/useHeart";
import { useCompare } from "../../hooks/useCompare";
import { useCart } from "../../hooks/useCart";

import root from "../../style/root__style.module.css";
import style from "./airPodsPage.module.css";
import { useAirPods } from "../../hooks/useAirPods";
import { useEffect } from "react";
import { useState } from "react";
import API from "../../api";

const AirPodsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [seriesAirPods, setSeriesAirPods] = useState();
  const [currentItems, setCurrentItems] = useState();
  const [product, setProduct] = useState()

  useEffect(() => {
    API.seriesAirPods.fetchAll().then((data) => setSeriesAirPods(data));
  }, []);

  useEffect(() => {
    API.airPods.fetchAll().then((data) => setCurrentItems(data));
  }, []);

  useEffect(() => {
    API.airPods.fetchAll().then((data) => setProduct(data));
  }, []);

  const handleChooseCategory = (category) => {
    setCurrentPage(1);
    setCurrentItems(product.filter((el) => el.name.name === category));
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleNext = (pages) => {
    setCurrentPage((prev) => {
      if (prev >= pages.length) {
        return (prev = 1);
      }
      return prev + 1;
    });
  };

  const handlePrev = (pages) => {
    setCurrentPage((prev) => {
      if (prev < 2) {
        return (prev = pages.length);
      }
      return prev - 1;
    });
  };


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
  const linkName = "Airpods";

  return (
    <div className={root.container}>
      <div className={style.airPodsPage}>
        <div className={style.airPodsPage__groupList}>
        {seriesAirPods && (
            <GroupList
              chooseCategory={handleChooseCategory}
              items={seriesAirPods}
            />
          )}
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
            products={currentItems}
            linkName={linkName}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AirPodsPage;
