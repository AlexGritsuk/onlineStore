import React from "react";
import ProductCard from "../productCard/productCard";
import { useState } from "react";

const ProductsGrid = ({ products, onAddCart, onDeleteCart, isHave }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [catalog, setCatalog] = useState(true);

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

  if (products) {
    const count = products.length;
    const userCrop = paginate(products, currentPage, pageSize);

    return (
      <div>
        <ul className={style.iphoneGrid__catalog}>
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
        <div className={catalog ? style.iphoneGrid__item : ""}>
          {userCrop.map((iphone) => (
            <ProductCard
              catalog={catalog}
              onAddCart={onAddCart}
              onDeleteCart={onDeleteCart}
            />
          ))}
        </div>
        <div className={style.iphoneGrid__pagin}>
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
      <div className={style.iphoneGrid__loading}>
        <Loading />
      </div>
    );
  }
};

export default ProductsGrid;
