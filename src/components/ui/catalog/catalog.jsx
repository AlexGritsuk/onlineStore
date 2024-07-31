import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../api";
import style from "./catalog.module.css"
import PropTypes from 'prop-types';

const Catalog = ({ isOpen, menuRef }) => {
  const [catalogImage, setCatalogImage] = useState();

  useEffect(() => {
    API.catalogImg.fetchAll().then((data) => setCatalogImage(data));
  }, []);

  return (
    <nav
      className={style.catalog + " " + (isOpen ? style.active : "")}
      ref={menuRef}
    >
      {catalogImage && (
        <ul className={style.catalog__list}>
          <Link to="/Iphones">
            <li className={style.catalog__item}>
              <img src={catalogImage.catalog[0]} alt="" />
              <span>iPhones</span>
            </li>
          </Link>
          <Link to="/Airpods">
            <li className={style.catalog__item}>
              <img src={catalogImage.catalog[1]} alt="" />
              <span>AirPods</span>
            </li>
          </Link>
          <Link to="/MacBooks">
            <li className={style.catalog__item}>
              <img src={catalogImage.catalog[2]} alt="" />
              <span>MacBooks</span>
            </li>
          </Link>
          <Link to="/Airpods">
            <li className={style.catalog__item}>
              <img src={catalogImage.catalog[3]} alt="" />
              <span>Apple Watch</span>
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

Catalog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    menuRef: PropTypes.object.isRequired,
  };

export default Catalog;
