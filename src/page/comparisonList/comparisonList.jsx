import React from "react";
import { useCompare } from "../../hooks/useCompare";
import CompareEmpty from "./compareEmpty";
import style from "./comparisonList.module.css";
import ProductCompare from "./productCompare";

const ComparisonList = () => {
  const { compareIphones } = useCompare();
  console.log(compareIphones);
  if (compareIphones.length > 0) {
    return (
      <div className={style.comparisonList}>
        {compareIphones.map((compareIphone) => (
          <ProductCompare key={compareIphone._id} {...compareIphone} />
        ))}
      </div>
    );
  }
  return <CompareEmpty />;
};

export default ComparisonList;
