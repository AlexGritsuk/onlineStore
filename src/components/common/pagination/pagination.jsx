import React from "react";
import style from "./pagination.module.css";
import root from "../../../style/root__style.module.css";
import { pagesArray } from "../../../utils/paginate";

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onNext,
  onPrev,
  pages
}) => {
  

  return (
    <nav>
      <ul className={style.pagination__ul}>
        <li className={style.pagination__prev} onClick={() => onPrev()}>
          <a>prev</a>
        </li>

        {pages.map((page) => (
          <li
            key={"page " + page}
            onClick={() => onPageChange(page)}
            className={page === currentPage ? style.active : ""}
          >
            <a>{page}</a>
          </li>
        ))}

        <li className={style.pagination__right} onClick={() => onNext()}>
          <a>next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
