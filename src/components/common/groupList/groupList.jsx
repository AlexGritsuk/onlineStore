import React from "react";
import style from "./groupList.module.css";
import PropTypes from "prop-types";

const GroupList = ({
  chooseCategory,
  chooseCategoryColor,
  items,
  valueProperty,
  contentPtoperty,
  itemsColor,
  groupName,
  selectedItem,
  clearFilter,
}) => {
  return (
    <div>
      <div className={style.groupList}>
        <h3>Модель {groupName}</h3>
        {Object.keys(items).map((item) => (
          <div
            key={items[item][valueProperty]}
            className={
              selectedItem === items[item][contentPtoperty]
                ? style.groupList__item__active
                : style.groupList__item
            }
            onClick={() => chooseCategory(items[item][contentPtoperty])}
          >
            {items[item][contentPtoperty]}
          </div>
        ))}
      </div>
      <div className={style.groupList}>
        <h3>Цвет</h3>
        {Object.keys(itemsColor).map((item) => (
          <div
            key={itemsColor[item][valueProperty]}
            className={
              selectedItem === itemsColor[item][contentPtoperty]
                ? style.groupList__item__active
                : style.groupList__item
            }
            onClick={() =>
              chooseCategoryColor(itemsColor[item][contentPtoperty])
            }
          >
            {itemsColor[item][contentPtoperty]}
          </div>
        ))}
      </div>
      <div className={style.groupList__btn}>
        <button onClick={() => clearFilter()}>Очистить</button>
      </div>
    </div>
  );
};

GroupList.defaultProps = {
  valueProperty: "_id",
  contentPtoperty: "name",
};

GroupList.propTypes = {
  items: PropTypes.object.isRequired,
  chooseCategory: PropTypes.func.isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentPtoperty: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
  clearFilter: PropTypes.func.isRequired,
};

export default GroupList;
