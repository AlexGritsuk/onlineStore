import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainSlider.css";
import PropTypes from "prop-types";

const MainSlider = ({ images }) => {
  const history = useHistory();
  const [mouseMoved, setMouseMoved] = useState(false);

  const handleClick = () => {
    setMouseMoved(true);
    if (mouseMoved) history.push("/Iphones");
  };

  

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

  const onLinkMouseDown = (e) => {
    e.preventDefault();
  };
  return (
    <Slider {...settings}>
      {images.map((image) => {
        return (
          <button
            key={image}                    
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div className="mainSlider">
              <img src={image} style={{ width: "100%" }} />
            </div>
          </button>
        );
      })}
    </Slider>
  );
};

MainSlider.propTypes = {
  images: PropTypes.array,
};

export default MainSlider;
