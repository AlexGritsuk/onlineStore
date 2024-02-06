import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainSlider.css";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MainSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      {images.map((image) => {
        return (
          <Link to={"/Iphones"}>
            <div key={image} className="mainSlider">
              <img src={image} style={{ width: "100%" }} />
            </div>
          </Link>
        );
      })}
    </Slider>
  );
};

MainSlider.propTypes = {
  images: PropTypes.array,
};

export default MainSlider;
