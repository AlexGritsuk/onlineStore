import React from "react";
import style from "./tabs.module.css"

const Tab = ({ item, tab, setTab }) => {
  return <div className={style.tab} onClick={()=>setTab(item.value)}>{item.label}</div>;
};

export default Tab;
