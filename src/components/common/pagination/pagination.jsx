import React from "react";
import style from "./pagination.module.css";
import { pagesArray } from "../../../utils/paginate";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ currentPage, onPageChange, onNext, onPrev, pages }) => {
  console.log(pages);
  if (pages.length === 1) {
    return null;
  }
  if (pages.length === 0) {
    return (
      <h1 style={{ marginTop: "25px" }}>
        Поробуйте другой запрос, данного товара нет в каталоге
      </h1>
    );
  }
  return (
    <nav>
      <ul className={style.pagination__ul}>
        <li className={style.pagination__prev} onClick={() => onPrev(pages)}>
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

        <li className={style.pagination__right} onClick={() => onNext(pages)}>
          <a>next</a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default Pagination;
