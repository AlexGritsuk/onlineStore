import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api";
import MainSlider from "../../components/common/mainSlider/mainSlider";
import style from "./mainPage.module.css";

const MainPage = () => {
  const [mainImageSlider, setMainImageSlider] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    API.catalogImg.fetchAll().then((data) => setImage(data));
  }, []);

  useEffect(() => {
    API.mainImg.fetchAll().then((data) => setMainImageSlider(data));
  }, []);

  return (
    <div>
      <div className={style.mainPage_slider}>
        {mainImageSlider && <MainSlider images={mainImageSlider.mainSlider} />}
      </div>
      <div className={style.mainPage_catalog}>
        {image && (
          <ul className={style.mainPage_grid}>
            <Link to="/Iphones">
              <li className={style.mainPage_li}>
                <img className={style.mainPage_img} src={image.catalogMain[0]} alt="" />
                {/* <span>iPhones</span> */}
              </li>
            </Link>
            <Link to="/Airpods">
              <li className={style.mainPage_li}>
                <img className={style.mainPage_img} src={image.catalogMain[1]} alt="" />
                {/* <span>AirPods</span> */}
              </li>
            </Link>
            <Link to="/MacBooks">
              <li className={style.mainPage_li}>
                <img className={style.mainPage_img} src={image.catalogMain[2]} alt="" />
                {/* <span>MacBooks</span> */}
              </li>
            </Link>
            <Link to="/Airpods">
              <li className={style.mainPage_li}>
                <img className={style.mainPage_img} src={image.catalogMain[3]} alt="" />
                {/* <span>Apple Watch</span> */}
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MainPage;
