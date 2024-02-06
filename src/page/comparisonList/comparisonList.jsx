import React from "react";
import { useCompare } from "../../hooks/useCompare";
import CompareEmpty from "./compareEmpty";
import style from "./comparisonList.module.css";
import ProductCompare from "./productCompare";
import AddCompareProduct from "../../components/common/addCompareProduct/addCompareProduct";

const ComparisonList = () => {
  const { compareIphones } = useCompare();
  console.log(compareIphones);
  if (compareIphones.length > 0) {
    return (
      <div className={style.comparisonList__wrapper}>
        <div className={style.comparisonList}>
          {compareIphones.map((compareIphone) => (
            <ProductCompare key={compareIphone._id} {...compareIphone} />
          ))}
        </div>
        <div style={{ padding: "30px" }}>
          {compareIphones.length < 2 ? <AddCompareProduct /> : ""}
        </div>
      </div>
    );
  }
  return <CompareEmpty />;
};

export default ComparisonList;
