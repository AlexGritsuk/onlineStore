import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import PropTypes from "prop-types";
import style from "./sortMenu.module.css";

const SortMenu = ({ onSort, name, sort, currentSort }) => {
  const handleSort = (item) => {
    if (currentSort.iter === item) {
      onSort({
        ...currentSort,
        order: currentSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ iter: item, order: "asc" });
    }
  };

  const renderSortArrow = (currentSort, sort) => {
    if (currentSort.iter === sort) {
      if (currentSort.order === "asc") {
        return <TiArrowSortedDown />;
      } else {
        return <TiArrowSortedUp />;
      }
    }
    return null;
  };

  return (
    <div className={style.sortMenu}>
      <button className={style.sortMenu__btn} onClick={() => handleSort(sort)}>
        <span className={style.sortMenu__title}>{name}</span>
        <span className={style.sortMenu__arrow}>
          {renderSortArrow(currentSort, sort)}
        </span>
      </button>
    </div>
  );
};

SortMenu.propTypes = {
  onSort: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  currentSort: PropTypes.object.isRequired,
};

export default SortMenu;
