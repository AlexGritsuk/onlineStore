import React from "react";
import style from "./countItem.module.css";

const CountItem = ({ count }) => {
  return <div className={style.countItem_absolute}>{count}</div>;
};

export default CountItem;
