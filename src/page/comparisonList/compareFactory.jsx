import React from "react";
import style from "./comparisonList.module.css";

const CompareFactory = ({ factory }) => {
  return <div className={style.compareFactory}>{factory}</div>;
};

export default CompareFactory;
