import React from "react";
import style from "./tabs.module.css";
import { getCountCompare } from "../../../store/compare";
import { getCountCompareAirPods } from "../../../store/compareAirPods";
import { useSelector } from "react-redux";

const Tab = ({ item, tab, setTab }) => {
  const countIphone = useSelector(getCountCompare());
  const countAirPods = useSelector(getCountCompareAirPods());
  const isVear = item.label;

  function renderTags(isVear) {
    switch (isVear) {
      case "iPhones":
        return (
          <div>
            iPhones <span>{countIphone}</span>
          </div>
        );
        break;
      case "AirPods":
        return (
          <div>
            AirPods <span>{countAirPods}</span>
          </div>
        );
      default:
        return <div>kk</div>;
        break;
    }
  }

  return (
    <div className={style.tab} onClick={() => setTab(item.value)}>
      {renderTags(isVear)}
    </div>
  );
};

export default Tab;
