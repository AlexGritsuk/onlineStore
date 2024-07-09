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
import SortMenu from "../../ui/sortMenu/sortMenu";
import _ from "lodash";
import SearchMenu from "../../ui/searchMenu/searchMenu";

const ProductsGrid = ({
  productsCart,
  productsHeart,
  productsCompare,
  linkName,
  products,
  handleNext,
  handlePrev,
  handlePageChange,
  currentPage,
  addCompare,
  deleteCompare,
}) => {
  const [sortBy, setSortBy] = useState({ iter: "price", order: "asc" });
  const [catalog, setCatalog] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const pageSize = 6;

  const handleCatalogGrid = () => {
    setCatalog((catalog) => (catalog = true));
  };

  const handleCatalogLine = () => {
    setCatalog((catalog) => (catalog = false));
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value);
  };

  let prod = searchQuery
    ? products.filter(
        (prod) =>
          prod.name.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      )
    : products;

  const count = prod.length;
  const sortedUsers = _.orderBy(prod, [sortBy.iter], [sortBy.order]);
  const userCrop = paginate(sortedUsers, currentPage, pageSize);
  const pagesCount = Math.ceil(count / pageSize);

  let pages = pagesArray(pagesCount);
  return (
    <div className={style.product}>
      <div className={style.products__sortMenu}>
        <div className={style.products__sortMenu_item}>
          <SortMenu
            onSort={handleSort}
            currentSort={sortBy}
            name={"Цена"}
            sort={"price"}
          />
        </div>
        <div className={style.products__sortMenu_item}>
          <SortMenu
            onSort={handleSort}
            currentSort={sortBy}
            name={"Рейтинг"}
            sort={"rating"}
          />
        </div>
        <div className={style.products__sortMenu_item}>
          <SearchMenu
            type={"text"}
            name={"searchQuery"}
            placeholder={"Поиск"}
            onChange={handleSearchQuery}
            value={searchQuery}
          />
        </div>
        <div className={style.products__sortMenu_item}>
          <ul className={style.products__catalog}>
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
        </div>
      </div>      
      <div className={catalog ? style.products__grid : style.products__line}>
        {userCrop.map((products) => (
          <ProductCard
            key={products._id}
            catalog={catalog}
            cartProduct={productsCart}
            heartProduct={productsHeart}
            compareProduct={productsCompare}
            linkName={linkName}
            {...products}
            addCompare={addCompare}
            deleteCompare={deleteCompare}
          />
        ))}
      </div>
      <div className={style.products__pagin}>
        <Pagination
          pages={pages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </div>
  );
};

export default ProductsGrid;
