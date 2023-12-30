import React from "react";
import { IoIosGitCompare } from "react-icons/io";
import style from "./compareEmpty.module.css";

const CompareEmpty = () => {
  return (
    <div className={style.compareEmpty}>
      <h3 style={{ marginRight: "15px" }}>
        Добавляйте товары для сравнения с помощью
      </h3>

      <h3>
        <IoIosGitCompare style={{ width: "30px", height: "30px" }} />
      </h3>
    </div>
  );
};

export default CompareEmpty;
