import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "50%"}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }


const SimpleCarousel = ({ images }) => {
  //   const settings = {
  //     dots: true,
  //       infinite: true,
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       autoplay: true,
  //       autoplaySpeed: 2000,
  //       pauseOnHover: true
  //   };

  

  const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };


  return (
    <Slider {...settings}>
      {images.map((img) => {        
        return (
          <div key={img}>
            <img src={img} style={{margin: "0 auto"}}/>
          </div>
        );
      })}
    </Slider>
  );
};

export default SimpleCarousel;
