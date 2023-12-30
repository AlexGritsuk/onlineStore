import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import style from "./btnDelete.module.css";

const BtnDelete = ({ id, onDel }) => {    
  return (
    <button onClick={() => onDel(id)} className={style.btnDelete}>
      <MdDeleteOutline style={{ width: "20px", height: "20px" }} />
      <span>Удалить</span>
    </button>
  );
};

export default BtnDelete;
