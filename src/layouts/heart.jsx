import React from "react";
import root from "../../src/style/root__style.module.css";
import HeartList from "../page/heartList/heartList";
import style from "../../src/style/heart.module.css";
import { useSelector } from "react-redux";
import { getCountHeart } from "../store/heart";


const Heart = () => {
  const countHeart = useSelector(getCountHeart())
  return (
    <div className={root.container}>
      <div style={{ display: "flex" }}>
        <h1>Избранное</h1>
        <h2 style={{ marginLeft: "8px", color: "#8e8e93" }}>{countHeart}</h2>
      </div>
      <div className={style.heart}>
        <HeartList />
      </div>
    </div>
  );
};

export default Heart;
