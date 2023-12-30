import React from "react";
import style from "./textField.module.css";
import PropTypes from "prop-types";

const TextField = ({ name, type, placeholder, value, onChange, onBlur }) => {
  return (
    <>
      <input
        className={style.textField__input}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default TextField;
