import React from "react";
import root from "../../src/style/root__style.module.css";
import style from "../style/comparison.module.css";
import HeartList from "../page/heartList/heartList";
import { useSelector } from "react-redux";
import { getCountHeart } from "../store/heart";


const Heart = () => {
  const countHeart = useSelector(getCountHeart())
  return (
    <div className={root.container}>
    <div className={style.comparison}>
      <div className={style.comparison__head}>
        <h1>Избранное</h1>
        <h2>
        {countHeart}
        </h2>
      </div>
      <div>
      <HeartList />
      </div>
    </div>
  </div>
  );
};

export default Heart;
