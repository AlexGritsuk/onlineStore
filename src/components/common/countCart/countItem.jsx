import React from "react";
import style from "./countItem.module.css";
import { useSelector } from "react-redux";
import { getCountCart } from "../../../store/cart";

const CountItem = ({ count }) => { 
  return <div className={style.countItem_absolute}>{count}</div>; 
};

export default CountItem;
