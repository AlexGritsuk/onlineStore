import React, { useState } from "react";
import CompareEmpty from "./compareEmpty";
import { useSelector } from "react-redux";
import { getCompare, getCountCompare } from "../../store/compare";
import CompareCards from "./compareCards";
import CompareParametrsIpnones from "./compareParametrsIphones";
import Tabs from "../../components/ui/tabs/tabs";
import { getCompareAirPods, getCountCompareAirPods } from "../../store/compareAirPods";
import { handleDeleteCompareAirPods } from "../../store/compareAirPods";
import { handleDeleteCompare } from "../../store/compare";

const ComparisonList = () => {
  const compareIphones = useSelector(getCompare());
  const compareAirPods = useSelector(getCompareAirPods());
  const countIphone = useSelector(getCountCompare());
  const countAirPods = useSelector(getCountCompareAirPods());

  

  const [tab, setTab] = useState("section1");

  const tabs = [
    { label: "iPhones", value: "section1" },
    { label: "AirPods", value: "section2" },
    { label: "MacBooks", value: "section3" },
    { label: "Apple watch", value: "section4" },
  ];

  function renderTabContent() {
    switch (tab) {
      case "section1": {
        return (
          <div>
            <CompareCards
              compareProducts={compareIphones}
              deleteCompare={handleDeleteCompare}
            />
            <CompareParametrsIpnones compareProducts={compareIphones} />
          </div>
        );
      }
      case "section2": {
        return (
          <div>
            <CompareCards
              compareProducts={compareAirPods}
              deleteCompare={handleDeleteCompareAirPods}
            />
          </div>
        );
      }
      case "section3": {
        return <div>Здесь будут макбуки</div>;
      }
      case "section4": {
        return <div>Здесь будут эплвочи</div>;
      }

      default: {
        return <div>Пусто</div>;
      }
    }
  }

  if (countIphone > 0 || countAirPods > 0) {
    return (
      <>
        <Tabs
          tabs={tabs}
          renderTabContent={renderTabContent}
          tab={tab}
          setTab={setTab}
        />
      </>
    );
  }
  return <CompareEmpty />;
};

export default ComparisonList;
