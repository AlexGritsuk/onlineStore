import React, { useEffect, useState } from "react";
import style from "./iphonePage.module.css";
import root from "../../style/root__style.module.css";
import GroupList from "../../components/common/groupList/groupList";
import IphoneGrid from "../iphoneGrid/iphoneGrid";
import { useIphone } from "../../hooks/useIphone";

const IphonesPage = () => {

  const { iphones } = useIphone();


  return (
    <div className={root.container}>
      <div className={style.iphonePage}>
        <div className={style.iphonePage__groupList}>
          <GroupList />
        </div>
        <div className={style.iphonePage__iphoneGrid}>
          <IphoneGrid />
        </div>
      </div>
    </div>
  );
};

export default IphonesPage;
