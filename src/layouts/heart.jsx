import React from "react";
import root from "../../src/style/root__style.module.css";
import HeartList from "../page/heartList/heartList";
import style from "../../src/style/heart.module.css";
import { useIphone } from "../hooks/useIphone";

const Heart = () => {
  const { countItemHeart } = useIphone();
  return (
    <div className={root.container}>
      <div style={{ display: "flex" }}>
        <h1>Избранное</h1>
        <h2 style={{ marginLeft: "8px", color: "#8e8e93" }}>{countItemHeart}</h2>
      </div>
      <div className={style.heart}>
        <HeartList />
      </div>
    </div>
  );
};

export default Heart;
