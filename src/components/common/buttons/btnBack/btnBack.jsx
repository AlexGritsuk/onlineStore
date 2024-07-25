import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import "./btnBack.css";

const BtnBack = ({ push }) => {
  const history = useHistory();
  const handleBack = () => {
    history.push(`/${push}`);
  };
  return (
    <button className="btnBack" onClick={() => handleBack()}>
      <div className="btnArrow">
        <IoArrowBackCircleOutline style={{ width: "20px", height: "20px" }} />
      </div>
      <div> Вернуться назад</div>
    </button>
  );
};

BtnBack.propTypes = {
  push: PropTypes.string.isRequired,
};

export default BtnBack;
