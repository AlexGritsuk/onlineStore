import React from "react";
import root from "../style/root__style.module.css";
import style from "../style/comparison.module.css";
import ComparisonList from "../page/comparisonList/comparisonList";
import { useSelector } from "react-redux";
import { getCountCompare } from "../store/compare";
import { getCountCompareAirPods } from "../store/compareAirPods";

const Comparison = () => {
  const countCompareIphone = useSelector(getCountCompare());
  const countCompareAirPods = useSelector(getCountCompareAirPods());
  const countCompare = countCompareIphone + countCompareAirPods;
  return (
    <div className={root.container}>
      <div className={style.comparison}>
        <div className={style.comparison__head}>
          <h1>Сравнение товаров</h1>
          <h2>
            {countCompare}
          </h2>
        </div>
        <div>
          <ComparisonList />
        </div>
      </div>
    </div>
  );
};

export default Comparison;
