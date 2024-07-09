import React from "react";
import Tab from "./tab";
import style from "./tabs.module.css"

const Tabs = ({
  tabs = [],
  renderTabContent,
  tab,
  setTab,  
}) => {
  return (
    <div>
      <div className={style.tabs}>
        {tabs.map((item, index)=>{
            return (
                <Tab key={index} item={item} tab={tab} setTab={setTab}/>
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
