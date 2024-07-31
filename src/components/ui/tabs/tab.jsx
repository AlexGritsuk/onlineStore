import React from "react";
import style from "./tabs.module.css";
import { getCountCompare } from "../../../store/compare";
import { getCountCompareAirPods } from "../../../store/compareAirPods";
import { useSelector } from "react-redux";
import { getCountCompareMacBooks } from "../../../store/compareMacBooks";

const Tab = ({ item, tab, setTab }) => {
  const countIphone = useSelector(getCountCompare());
  const countAirPods = useSelector(getCountCompareAirPods());
  const countMacBooks = useSelector(getCountCompareMacBooks());
  let isVear = item.label;

  function renderTags2(isVear) {
    if (countIphone !== 0 && isVear == "iPhones") {
      return (
        <div>
          iPhones <span>{countIphone}</span>
        </div>
      );
    }
    if (countAirPods !== 0 && isVear == "AirPods") {
      return (
        <div>
          AirPods <span>{countAirPods}</span>
        </div>
      );
    }
    if (countMacBooks !== 0 && isVear == "MacBooks") {
      return (
        <div>
          MacBooks <span>{countMacBooks}</span>
        </div>
      );
    }
    return <div style={{opacity: 0}}>kk</div>;
  }

  function renderTags(isVear) {
    switch (isVear) {
      case "iPhones":
        return (
          <div>
            iPhones <span>{countIphone}</span>
          </div>
        );
      case "AirPods":
        return (
          <div>
            AirPods <span>{countAirPods}</span>
          </div>
        );
      case "MacBooks":
        return (
          <div>
            MacBooks <span>{countMacBooks}</span>
          </div>
        );
      default:
        return <div>kk</div>;
    }
  }

  return (
    <div className={style.tab} onClick={() => setTab(item.value)}>
      {renderTags2(isVear)}
    </div>
  );
};

export default Tab;
