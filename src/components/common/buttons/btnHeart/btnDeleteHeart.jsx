import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import style from "../btnDelete/btnDelete.module.css";
import { useDispatch } from "react-redux";
import { handleDeleteHeart } from "../../../../store/heart";

const BtnDeleteHeart = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(handleDeleteHeart(id))}
      className={style.btnDelete}
    >
      <MdDeleteOutline style={{ width: "20px", height: "20px" }} />
      <span>Удалить</span>
    </button>
  );
};

export default BtnDeleteHeart;
