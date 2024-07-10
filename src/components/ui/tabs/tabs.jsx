import React from "react";
import Tab from "./tab";
import style from "./tabs.module.css"
import { getCountCompare } from "../../../store/compare";
import { useSelector } from "react-redux";

const Tabs = ({
  tabs = [],
  renderTabContent,
  tab,
  setTab,  
}) => {

  const countIphone = useSelector(getCountCompare());
console.log(countIphone);
  return (
    <div>
      <div className={style.tabs}>
        {tabs.map((item, index)=>{
            return (
                <div>
                  <Tab key={index} item={item} tab={tab} setTab={setTab}/>
                </div>
            )
        })}
      </div>
      <div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Tabs;
