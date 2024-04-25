import React from "react";
import CompareEmpty from "./compareEmpty";
import style from "./comparisonList.module.css";
import ProductCompare from "./productCompare";
import AddCompareProduct from "../../components/common/addCompareProduct/addCompareProduct";
import { useSelector } from "react-redux";
import { getCompare } from "../../store/compare";

const ComparisonList = () => {  
  const compareProducts = useSelector(getCompare()) 
  if (compareProducts.length > 0) {
    return (
      <div className={style.comparisonList__wrapper}>
        <div className={style.comparisonList}>
          {compareProducts.map((compareIphone) => (
            <ProductCompare key={compareIphone._id} {...compareIphone} />
          ))}
        </div>
        <div style={{ padding: "30px" }}>
          {compareProducts.length < 2 ? <AddCompareProduct /> : ""}
        </div>
      </div>
    );
  }
  return <CompareEmpty />;
};

export default ComparisonList;
