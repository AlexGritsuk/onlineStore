import React, { useEffect, useState } from "react";
import {
  getCompare,
  getCountCompare,
  handleDeleteCompare,
} from "../../../store/compare";
import { useSelector } from "react-redux";
import "./tabs.css";
import {
  getCompareAirPods,
  getCountCompareAirPods,
  handleDeleteCompareAirPods,
} from "../../../store/compareAirPods";
import {
  getCompareMacBooks,
  getCountCompareMacBooks,
  handleDeleteCompareMacBooks,
} from "../../../store/compareMacBooks";
import CompareCards from "../../../page/comparisonList/compareCards";
import CompareParametrsIpnones from "../../../page/comparisonList/compareParametrsIphones";
import CompareParametrsAirPods from "../../../page/comparisonList/compareParametrsAirPods";
import CompareParametrsMacBooks from "../../../page/comparisonList/compareParametrsMacBooks";

const Tabs = () => {
  const compareIphones = useSelector(getCompare());
  const compareAirPods = useSelector(getCompareAirPods());
  const compareMacBooks = useSelector(getCompareMacBooks());
  const countIphone = useSelector(getCountCompare());
  const countAirPods = useSelector(getCountCompareAirPods());
  const countMacBooks = useSelector(getCountCompareMacBooks());

  const [toggleState, setToggleState] = useState(
    isCount(countIphone, countAirPods, countMacBooks)
  );

  function isCount(countIphone, countAirPods, countMacBooks) {
    if (countIphone == 0 && countMacBooks == 0) return 2;
    if (countIphone == 0 && countAirPods == 0) return 3;
    if (countAirPods == 0 && countMacBooks == 0) return 1;
    if (countIphone == 0) return 2;
    if (countAirPods == 0) return 3;
    if (countMacBooks == 0) return 1;
    else return 1;
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="tabs">
        <div
          className={countIphone > 0 ? "active-tab" : "tab"}
          onClick={() => toggleTab(1)}
        >
          Iphones
          <span> {countIphone}</span>
        </div>
        <div
          className={countAirPods > 0 ? "active-tab" : "tab"}
          onClick={() => toggleTab(2)}
        >
          AirPods
          <span> {countAirPods}</span>
        </div>
        <div
          className={countMacBooks > 0 ? "active-tab" : "tab"}
          onClick={() => toggleTab(3)}
        >
          MacBooks
          <span> {countMacBooks}</span>
        </div>
      </div>

      <div>
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <div>
            <CompareCards
              compareProducts={compareIphones}
              deleteCompare={handleDeleteCompare}
            />
            <CompareParametrsIpnones compareProducts={compareIphones} />
          </div>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <div>
            <CompareCards
              compareProducts={compareAirPods}
              deleteCompare={handleDeleteCompareAirPods}
            />
            <CompareParametrsAirPods compareProducts={compareAirPods} />
          </div>
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <div>
            <CompareCards
              compareProducts={compareMacBooks}
              deleteCompare={handleDeleteCompareMacBooks}
            />
            <CompareParametrsMacBooks compareProducts={compareMacBooks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
