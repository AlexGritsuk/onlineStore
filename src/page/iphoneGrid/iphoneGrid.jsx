import React, { useState } from "react";
import IphoneCard from "../iphoneCard/iphoneCard";
import style from "./iphoneGrid.module.css";
import Pagination from "../../components/common/pagination/pagination";
import { paginate } from "../../utils/paginate";
import { useIphone } from "../../hooks/useIphone";
import Loading from "../../components/common/loading/loading";
import { PiListFill } from "react-icons/pi";
import { IoGridOutline } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";
import { PiListLight } from "react-icons/pi";

const IphoneGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [catalog, setCatalog] = useState(true);
  const { iphones } = useIphone();
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

  if (iphones) {
  console.log(iphones);

    const count = iphones.length;
    const userCrop = paginate(iphones, currentPage, pageSize);

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
            <IphoneCard key={iphone._id} catalog={catalog} {...iphone} />
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

export default IphoneGrid;
