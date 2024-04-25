import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import style from "./btnDelete.module.css";
import { useDispatch } from "react-redux";
import { gethandleDeleteCartProducts } from "../../../../store/cart";

const BtnDelete = ({ id }) => {    
  const dispatch = useDispatch()  
  return (
    <button onClick={() => dispatch(gethandleDeleteCartProducts(id))} className={style.btnDelete}>
      <MdDeleteOutline style={{ width: "20px", height: "20px" }} />
      <span>Удалить</span>
    </button>
  );
};

export default BtnDelete;
