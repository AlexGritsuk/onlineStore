import React from "react";
import style from "./footer.module.css";
import FooterList from "./footerList";

const Footer = () => {
  return (
    <div className={style.footer}>
      <FooterList />
    </div>
  );
};

export default Footer;
