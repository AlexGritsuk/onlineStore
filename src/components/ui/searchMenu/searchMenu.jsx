import React from "react";
import style from "./searchMenu.module.css";
import PropTypes from 'prop-types';

const SearchMenu = ({ type, name, placeholder, onChange, value }) => {
  return (
    <input
      className={style.textFieldInput}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

SearchMenu.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

export default SearchMenu;
