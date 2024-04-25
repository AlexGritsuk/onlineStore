import React, { useEffect, useState } from "react";
import style from "./iphonePage.module.css";
import root from "../../style/root__style.module.css";
import GroupList from "../../components/common/groupList/groupList";
import ProductsGrid from "../../components/common/productsGrid/productsGrid";
import API from "../../api";
import Loading from "../../components/common/loading/loading";
import { useSelector } from "react-redux";
import {
  getColorIphones,
  getColorIphonesLoadingStatus,
  getIphones,
  getIphonesLoadingStatus,
  getSeriesIphones,
  getSeriesIphonesLoadingStatus,
} from "../../store/iphones";
import { getCart, getCountCart } from "../../store/cart";
import { getHeart, getCountHeart } from "../../store/heart";
import { getCompare, getCountCompare } from "../../store/compare";

const IphonesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState();
  const [selectedItem, setSelectedItem] = useState();

  const product = useSelector(getIphones());
  const isLoading = useSelector(getIphonesLoadingStatus());

  const seriesIphone = useSelector(getSeriesIphones());
  const isLoadingSeriesIphone = useSelector(getSeriesIphonesLoadingStatus());

  const colorIphone = useSelector(getColorIphones());
  const isLoadingColorIphone = useSelector(getColorIphonesLoadingStatus());

  useEffect(() => {
    API.iphones.fetchAll().then((data) => setCurrentItems(data));
  }, []);

 

  const cartProducts = useSelector(getCart());
  const countCart = useSelector(getCountCart()); 
  
  const heartProducts = useSelector(getHeart())
  const countHeart = useSelector(getCountHeart());
  
  const compareProducts = useSelector(getCompare());
  const countCompare = useSelector(getCountCompare())
 

  const linkName = "Iphones";

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

  const handleClearFilter = () => {
    setCurrentItems(product);
    setSelectedItem(undefined);
  };

  let groupName = "iPhone";
  return (
    <div className={root.container}>
      <div className={style.iphonePage}>
        <div className={style.iphonePage__groupList}>
          {!isLoading && !isLoadingSeriesIphone && !isLoadingColorIphone && (
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

export default IphonesPage;
