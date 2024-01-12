import React from "react";
import ProductCard from "../productCard/productCard";
import { useState } from "react";
import { pagesArray, paginate } from "../../../utils/paginate";
import Pagination from "../pagination/pagination";
import style from "./productGrid.module.css";
import { IoGrid } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { PiListLight } from "react-icons/pi";
import { PiListFill } from "react-icons/pi";
import Loading from "../loading/loading";
import SortMenu from "../../ui/sortMenu/sortMenu";
import _ from "lodash";

const ProductsGrid = ({
  productsCart,
  onAddCart,
  onDeleteCart,
  productsHeart,
  onAddHeart,
  onDeleteHeart,
  productsCompare,
  onAddCompare,
  onDeleteCompare,
  linkName,
  products,
  handleNext,
  handlePrev,
  handlePageChange,
  currentPage,
}) => {
  const [sortBy, setSortBy] = useState({ iter: "price", order: "asc" });

  const [catalog, setCatalog] = useState(true);
  const pageSize = 6;

  const handleCatalogGrid = () => {
    setCatalog((catalog) => (catalog = true));
  };

  const handleCatalogLine = () => {
    setCatalog((catalog) => (catalog = false));
  };

  const handleSort = (item) => {
    if (sortBy.iter === item) {
      setSortBy((prevState) => ({
        ...prevState,
        order: prevState.order === "asc" ? "desc" : "asc",
      }));
    } else {
      setSortBy({ iter: item, order: "asc" });
    }
  };

  if (products) {
    const count = products.length;
    const sortedUsers = _.orderBy(products, [sortBy.iter], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);
    const pagesCount = Math.ceil(count / pageSize);
    // if (pagesCount === 1) return null;
    let pages = pagesArray(pagesCount);
    return (
      <div>
        <div className={style.productsGrid__sortMenu}>
          <div>
            <SortMenu
              onSort={handleSort}
              name={"По цене"}
              sort={"price"}
              arrow={sortBy.order}
            />
          </div>
          <div style={{ marginLeft: "15px" }}>
            <SortMenu
              onSort={handleSort}
              name={"По популярности"}
              sort={"rating"}
              arrow={sortBy.order}
            />
          </div>
        </div>
        <ul className={style.productsGrid__catalog}>
          <li>
            <a onClick={() => handleCatalogGrid()} role="button">
              {catalog ? <IoGrid /> : <IoGridOutline />}
            </a>
          </li>
          <li>
            <a onClick={() => handleCatalogLine()} role="button">
              {catalog ? <PiListLight /> : <PiListFill />}
            </a>
          </li>
        </ul>
        <div className={catalog ? style.productsGrid__item : ""}>
          {userCrop.map((products) => (
            <ProductCard
              key={products._id}
              catalog={catalog}
              cartProduct={productsCart}
              onAddCart={onAddCart}
              onDeleteCart={onDeleteCart}
              heartProduct={productsHeart}
              onAddHeart={onAddHeart}
              onDeleteHeart={onDeleteHeart}
              compareProduct={productsCompare}
              onAddCompare={onAddCompare}
              onDeleteCompare={onDeleteCompare}
              linkName={linkName}
              {...products}
            />
          ))}
        </div>
        <div className={style.productsGrid__pagin}>
          <Pagination
            pages={pages}
            onPageChange={handlePageChange}
            currentPage={currentPage}
            onNext={handleNext}
            onPrev={handlePrev}
            pagesCount={pagesCount}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.productsGrid__loading}>
        <Loading />
      </div>
    );
  }
};

export default ProductsGrid;
