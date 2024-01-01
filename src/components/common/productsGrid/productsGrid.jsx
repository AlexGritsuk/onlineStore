import React from "react";
import ProductCard from "../productCard/productCard";
import { useState } from "react";
import { paginate } from "../../../utils/paginate";
import Pagination from "../pagination/pagination";
import style from "./productGrid.module.css";
import { IoGrid } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { PiListLight } from "react-icons/pi";
import { PiListFill } from "react-icons/pi";
import Loading from "../loading/loading";
import { useAirPods } from "../../../hooks/useAirPods";

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
  products,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [catalog, setCatalog] = useState(true);
const {airPods} = useAirPods()
  const pageSize = 6;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleNext = () => {
    setCurrentPage((prev) => {
      if (prev > 6) {
        return (prev = 1);
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentPage((prev) => {
      if (prev < 2) {
        return (prev = 7);
      }
      return prev - 1;
    });
  };
  const handleCatalogGrid = () => {
    setCatalog((catalog) => (catalog = true));
  };

  const handleCatalogLine = () => {
    setCatalog((catalog) => (catalog = false));
  };
  
  if (airPods) {
    const count = airPods.length;
    const userCrop = paginate(airPods, currentPage, pageSize);
    
    return (
      <div>
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
          {userCrop.map((airPods) => (
            <ProductCard
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
              {...airPods}
            />
          ))}
        </div>
        <div className={style.productsGrid__pagin}>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
            onNext={handleNext}
            onPrev={handlePrev}
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
