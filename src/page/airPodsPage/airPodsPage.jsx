import React, { useState, useEffect } from "react";
import ProductsGrid from "../../components/common/productsGrid/productsGrid";
import GroupList from "../../components/common/groupList/groupList";
import root from "../../style/root__style.module.css";
import style from "../iphonesPage/iphonePage.module.css";
import API from "../../api";
import Loading from "../../components/common/loading/loading";
import { useSelector } from "react-redux";
import {
  getAirPods,
  getAirPodsLoadingStatus,
  getColorAirPods,
  getColorAirPodsLoadingStatus,
  getSeriesAirPods,
  getSeriesAirPodsLoadingStatus,
} from "../../store/airPods";
import { getCart, getCountCart } from "../../store/cart";
import { getCountHeart, getHeart } from "../../store/heart";
import { getCompare, getCountCompare } from "../../store/compare";

const AirPodsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [filters, setFilters] = useState(false);

  const product = useSelector(getAirPods());
  const isLoading = useSelector(getAirPodsLoadingStatus());
  const seriesAirPods = useSelector(getSeriesAirPods());
  const isLoadingSeriesAirPods = useSelector(getSeriesAirPodsLoadingStatus());
  const colorAirPods = useSelector(getColorAirPods());
  const isLoadingColor = useSelector(getColorAirPodsLoadingStatus());

  

  useEffect(() => {
    API.airPods.fetchAll().then((data) => setCurrentItems(data));
  }, []);

  const handleChooseCategory = (category) => {
    setCurrentPage(1);
    let productFilter = product.filter((el) => el.name === category);
    setCurrentItems(productFilter);
    setSelectedItem(category);
  };

  const handleChooseCategoryColor = (category) => {
    setCurrentPage(1);
    let productFilter = product.filter(
      (el) => el.visualAppearance === category
    );

    setCurrentItems(productFilter);
    setSelectedItem(category);
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

  const cartProducts = useSelector(getCart());
  const countCart = useSelector(getCountCart());

  const heartProducts = useSelector(getHeart());
  const countHeart = useSelector(getCountHeart());

  const compareProducts = useSelector(getCompare());
  const countCompare = useSelector(getCountCompare());

  const linkName = "Airpods";

  const handleClearFilter = () => {
    setCurrentItems(product);
    setSelectedItem(undefined);
  };

  const handleFilterOn = () => {
    setFilters((filters) => (filters = !filters));
  };

  return (
    <div className={root.container}>
      <div className={style.iphonePage}>
        <div className={style.iphonePage__accordion}>
          <div className={style.iphonePage__filter}>
            <button onClick={() => handleFilterOn()}>Фильтр</button>
          </div>
          <div className={style.iphonePage__groupList_container}>
            <div
              className={
                filters
                  ? style.iphonePage__groupList
                  : style.iphonePage__groupList + " " + style.active
              }
            >
              {!isLoading && !isLoadingColor && !isLoadingSeriesAirPods && (
                <GroupList
                  chooseCategory={handleChooseCategory}
                  chooseCategoryColor={handleChooseCategoryColor}
                  items={seriesAirPods}
                  itemsColor={colorAirPods}
                  groupName={linkName}
                  selectedItem={selectedItem}
                  clearFilter={handleClearFilter}
                />
              )}
            </div>
          </div>
        </div>
        <div className={style.iphonePage__iphoneGrid}>
          {currentItems ? (
            <ProductsGrid
              productsCart={cartProducts}
              productsHeart={heartProducts}
              productsCompare={compareProducts}
              countCart={countCart}
              countHeart={countHeart}
              countCompare={countCompare}
              products={currentItems}
              linkName={linkName}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default AirPodsPage;
