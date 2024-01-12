import React, { useEffect, useState } from "react";
import style from "./iphonePage.module.css";
import root from "../../style/root__style.module.css";
import GroupList from "../../components/common/groupList/groupList";
import ProductsGrid from "../../components/common/productsGrid/productsGrid";
import { useCart } from "../../hooks/useCart";
import { useHeart } from "../../hooks/useHeart";
import { useCompare } from "../../hooks/useCompare";
import API from "../../api";

const IphonesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [seriesIphone, setSeriesIphone] = useState();
  const [currentItems, setCurrentItems] = useState();
  const [product, setProduct] = useState();
  const [colorIphone, setColorIphone] = useState();
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    API.seriesIphone.fetchAll().then((data) => setSeriesIphone(data));
  }, []);

  useEffect(() => {
    API.iphones.fetchAll().then((data) => setCurrentItems(data));
  }, []);

  useEffect(() => {
    API.iphones.fetchAll().then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    API.visualAppearance.fetchAll().then((data) => setColorIphone(data));
  }, []);

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

  const linkName = "Iphones";

  const handleChooseCategory = (category) => {
    setCurrentPage(1);
    let productFilter = product.filter((el) => el.name.name === category);
    setCurrentItems(productFilter);
    setSelectedItem(productFilter.map((el) => el.name.name)[0]);
  };

  const handleChooseCategoryColor = (category) => {
    setCurrentPage(1);
    let productFilter = product.filter(
      (el) => el.visualAppearance.name === category
    );
    setCurrentItems(productFilter);
    setSelectedItem(productFilter.map((el) => el.visualAppearance.name)[0]);
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

  const handleClearFilter = () => {
    setCurrentItems(product);
  };

  let groupName = "iPhone";

  return (
    <div className={root.container}>
      <div className={style.iphonePage}>
        <div className={style.iphonePage__groupList}>
          {seriesIphone && (
            <GroupList
              chooseCategory={handleChooseCategory}
              chooseCategoryColor={handleChooseCategoryColor}
              items={seriesIphone}
              itemsColor={colorIphone}
              groupName={groupName}
              selectedItem={selectedItem}
              clearFilter={handleClearFilter}
            />
          )}
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

export default IphonesPage;
