import React, { useEffect, useState } from "react";
import CompareEmpty from "./compareEmpty";
import { useSelector } from "react-redux";
import { getCompare, getCountCompare } from "../../store/compare";
import CompareCards from "./compareCards";
import CompareParametrsIpnones from "./compareParametrsIphones";
import Tabs from "../../components/ui/tabs/tabs";
import {
  getCompareAirPods,
  getCountCompareAirPods,
} from "../../store/compareAirPods";
import { handleDeleteCompareAirPods } from "../../store/compareAirPods";
import { handleDeleteCompare } from "../../store/compare";
import CompareParametrsAirPods from "./compareParametrsAirPods";
import {
  getCompareMacBooks,
  getCountCompareMacBooks,
  handleDeleteCompareMacBooks,
} from "../../store/compareMacBooks";

const initialList = [
  { id: 0, label: "iPhones", value: "section1" },
  { id: 1, label: "AirPods", value: "section2" },
  { id: 2, label: "MacBooks", value: "section3" },
];

const ComparisonList = () => {
  const compareIphones = useSelector(getCompare());
  const compareAirPods = useSelector(getCompareAirPods());
  const compareMacBooks = useSelector(getCompareMacBooks());
  const countIphone = useSelector(getCountCompare());
  const countAirPods = useSelector(getCountCompareAirPods());
  const countMacBooks = useSelector(getCountCompareMacBooks());

  if (countIphone > 0 || countAirPods > 0 || countMacBooks > 0) {
    return (
      <>
        <Tabs />
      </>
    );
  }
  return <CompareEmpty />;
};

export default ComparisonList;
