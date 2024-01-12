import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import PropTypes from "prop-types";
import style from "./sortMenu.module.css";

const SortMenu = ({ onSort, name, sort, arrow }) => {
  return (
    <div className={style.sortMenu}>
      <button className={style.sortMenu__btn} onClick={() => onSort(sort)}>
        <span className={style.sortMenu__title}>{name}</span>
        <span className={style.sortMenu__arrow}>
          <IoMdArrowDropdown />
        </span>
      </button>
    </div>
  );
};

SortMenu.propTypes = {
  onSort: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

export default SortMenu;
