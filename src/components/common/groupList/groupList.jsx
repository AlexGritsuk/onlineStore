import React from "react";
import style from "./groupList.module.css";
import PropTypes from "prop-types";

const GroupList = ({
  chooseCategory,
  items,
  valueProperty,
  contentPtoperty,
}) => {
  return (
    <div className={style.groupList}>
      {Object.keys(items).map((item) => (
        <div
          key={items[item][valueProperty]}
          className={style.groupList__item}
          onClick={() => chooseCategory(items[item][contentPtoperty])}
        >
          {items[item][contentPtoperty]}
        </div>
      ))}
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
};

export default GroupList;
