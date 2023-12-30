import React from "react";
import { FaRegHeart } from "react-icons/fa";

const HeartEmpty = () => {
  return (
    <div>
      <h1>В избранном пока ничего нет</h1>
      <h3>
        Добавляйте товары в Избранное с помощью <FaRegHeart />
      </h3>
    </div>
  );
};

export default HeartEmpty;
