import React, { useEffect, useState } from "react";
import API from "../../api";
import root from "../../style/root__style.module.css";
import style from "../iphonesPage/iphonePage.module.css";
import GroupList from "../../components/common/groupList/groupList";
import ProductsGrid from "../../components/common/productsGrid/productsGrid";
import Loading from "../../components/common/loading/loading";
import { useSelector } from "react-redux";
import {
  getColorMacBooks,
  getColorMacBooksLoadingStatus,
  getMacBooks,
  getMacBooksLoadingStatus,
  getSeriesMacBooks,
  getSeriesMacBooksLoadingStatus,
} from "../../store/macBooks";
import { getCart, getCountCart } from "../../store/cart";
import { getCountHeart, getHeart } from "../../store/heart";
import { getCompare, getCountCompare } from "../../store/compare";

const MacBooksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [filters, setFilters] = useState(false);

  const product = useSelector(getMacBooks());
  const isLoading = useSelector(getMacBooksLoadingStatus());

  const seriesMacBooks = useSelector(getSeriesMacBooks());
  const isLoadingSeriesMacBooks = useSelector(getSeriesMacBooksLoadingStatus());

  const colorMacBooks = useSelector(getColorMacBooks());
  const isLoadingColorMacBooks = useSelector(getColorMacBooksLoadingStatus());

  const cartProducts = useSelector(getCart());
  const countCart = useSelector(getCountCart());

  useEffect(() => {
    API.macBooks.fetchAll().then((data) => setCurrentItems(data));
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

  const heartProducts = useSelector(getHeart());
  const countHeart = useSelector(getCountHeart());

  const compareProducts = useSelector(getCompare());
  const countCompare = useSelector(getCountCompare());

  const linkName = "macBooks";

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
              {!isLoading &&
                !isLoadingSeriesMacBooks &&
                !isLoadingColorMacBooks && (
                  <GroupList
                    chooseCategory={handleChooseCategory}
                    chooseCategoryColor={handleChooseCategoryColor}
                    items={seriesMacBooks}
                    itemsColor={colorMacBooks}
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

export default MacBooksPage;
