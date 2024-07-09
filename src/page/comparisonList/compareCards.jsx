import React from "react";
import AddCompareProduct from "../../components/common/addCompareProduct/addCompareProduct";
import style from "./comparisonList.module.css";
import ProductCompare from "./productCompare";


const CompareCards = ({compareProducts, deleteCompare}) => {
  return (
    <div
      className={
        compareProducts.length < 2
          ? style.comparisonList__flex
          : style.comparisonList__noflex
      }
    >
      <div className={style.comparisonList}>
        {compareProducts.map((compare) => (
          <ProductCompare key={compare._id} {...compare} deleteCompare={deleteCompare}/>
        ))}
      </div>
      <div
        className={
          compareProducts.length < 2
            ? style.comparisonList__addCompare
            : style.disactive
        }
      >
        <AddCompareProduct />
      </div>
    </div>
  );
};

export default CompareCards;
