import React from "react";
import root from "../style/root__style.module.css";
import ComparisonList from "../page/comparisonList/comparisonList";
import { useCompare } from "../hooks/useCompare";

const Comparison = () => {
  const { countItemCompare } = useCompare();

  return (
    <div className={root.container}>
      <div style={{ display: "flex" }}>
        <h1>Сравнение товаров</h1>
        <h2 style={{ marginLeft: "8px", color: "#8e8e93" }}>
          {countItemCompare}
        </h2>
      </div>
      <ComparisonList />
    </div>
  );
};

export default Comparison;
