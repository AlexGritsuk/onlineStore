import React from "react";
import style from "./comparisonList.module.css";
import CompareFactory from "./compareFactory";

const CompareParametrsItem = ({ columns, compareProducts }) => {
  console.log(Object.values(columns));
  return (
    <>
      {Object.values(columns).map((column) => (
        <div className={style.comparisonList__factory}>
          <h3>{column.head}</h3>
          <div className={style.comparisonList__factory_item}>
            <h5>{column.subHeadOne}</h5>
            <div className={style.comparisonList__factory_element}>
              
            </div>

            <h5>{column.subHeadTwo}</h5>
            <div className={style.comparisonList__factory_element}></div>

            <h5>{column.subHeadTree}</h5>
            <div className={style.comparisonList__factory_element}></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CompareParametrsItem;

// {compareProducts.map((compareIphone) => (
//     <CompareFactory
//       key={compareIphone._id}
//       factory={compareIphone.Specifications.factoryData.made}
//     />
//   ))}
