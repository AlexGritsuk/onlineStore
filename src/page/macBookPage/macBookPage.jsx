import React, { useEffect, useState } from "react";
import API from "../../api";
import { useCart } from "../../hooks/useCart";
import { useHeart } from "../../hooks/useHeart";
import { useCompare } from "../../hooks/useCompare";
import root from "../../style/root__style.module.css";
import style from "./macBookPage.module.css";
import GroupList from "../../components/common/groupList/groupList";
import ProductsGrid from "../../components/common/productsGrid/productsGrid";
import Loading from "../../components/common/loading/loading";
import { useSelector } from "react-redux";
import { getMacBooks, getMacBooksLoadingStatus } from "../../store/macBooks";

const MacBooksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [seriesMacBooks, setSeriesMacBooks] = useState();
  const [currentItems, setCurrentItems] = useState();

  const [colorMacBooks, setColorMacBooks] = useState();
  const [selectedItem, setSelectedItem] = useState();

  const product = useSelector(getMacBooks());
  const isLoading = useSelector(getMacBooksLoadingStatus());

  useEffect(() => {
    API.seriesMacBooks.fetchAll().then((data) => setSeriesMacBooks(data));
  }, []);

  useEffect(() => {
    API.macBooks.fetchAll().then((data) => setCurrentItems(data));
  }, []);

  useEffect(() => {
    API.visualAppearanceMacBook
      .fetchAll()
      .then((data) => setColorMacBooks(data));
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

  const linkName = "macBooks";

  const handleClearFilter = () => {
    setCurrentItems(product);
    setSelectedItem(undefined);
  };

  return (
    <div className={root.container}>
      <div className={style.macBookPage}>
        <div className={style.macBookPage__groupList}>
          {!isLoading && seriesMacBooks && colorMacBooks && (
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
        <div className={style.macBookPage__macBookGrid}>
          {currentItems ? (
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
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default MacBooksPage;
