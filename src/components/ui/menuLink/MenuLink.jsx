import React from "react";
import style from "./menuLink.module.css";

const MenuLink = ({ items }) => {
  return (
    <div className={style.menuLink}>
      <div className={style.menuLink__icons}>{items.icon}</div>
      <div>{items.name}</div>
    </div>
  );
};

export default MenuLink;
