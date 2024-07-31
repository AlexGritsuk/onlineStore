import React from "react";
import { FaRegHeart } from "react-icons/fa";
import style from "./heartEmpty.module.css"

const HeartEmpty = () => {
  return (
    <div className={style.heartEmpty}>
      <h2>В избранном пока ничего нет</h2>
      <h3>
        Добавляйте товары в Избранное с помощью <FaRegHeart />
      </h3>
    </div>
  );
};

export default HeartEmpty;
