import React, { useEffect, useState } from "react";
import API from "../../api";
import MainSlider from "../../components/common/mainSlider/mainSlider";

const MainPage = () => {
  const [mainImageSlider, setMainImageSlider] = useState();

  useEffect(() => {
    API.mainImg.fetchAll().then((data) => setMainImageSlider(data));
  }, []);

  return (
    <div style={{ width: "100%", padding: "25px" }}>
      {mainImageSlider && <MainSlider images={mainImageSlider.mainSlider} />}
    </div>
  );
};

export default MainPage; 
