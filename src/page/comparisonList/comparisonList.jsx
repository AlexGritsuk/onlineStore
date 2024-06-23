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
      <div className={compareProducts.length < 2 ? style.comparisonList__flex  : style.comparisonList__noflex}>
        <div className={style.comparisonList}>
          {compareProducts.map((compareIphone) => (
            <ProductCompare key={compareIphone._id} {...compareIphone} />
          ))}
        </div>
        <div className={compareProducts.length < 2 ? style.comparisonList__addCompare : style.disactive}>
          <AddCompareProduct />
        </div>
      </div>
    );
  }
  return <CompareEmpty />;
};

export default ComparisonList; 
