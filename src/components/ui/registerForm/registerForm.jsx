import React, { useEffect, useState } from "react";
import TextField from "../../common/form/textField";
import style from "../loginForm/loginForm.module.css";
import useForm from "../../../hooks/useForm";

const RegisterForm = () => {
  const {
    emailHandler,
    passwordHandler,
    handleBlur,
    handleSubmit,
    emailError,
    passwordError,
    formValid,
    email,
    password,
    emailDirty,
    passwordDirty,
  } = useForm();
  
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.loginForm__item}>
        <TextField
          type={"email"}
          placeholder={"e-mail"}
          name="email"
          value={email}
          onChange={emailHandler}
          onBlur={handleBlur}
        />
        {emailDirty && emailError && (
          <div className={style.loginForm__error}>{emailError}</div>
        )}
      </div>
      <div className={style.loginForm__item}>
        <TextField
          type={"password"}
          placeholder={"Пароль"}
          name="password"
          value={password}
          onChange={passwordHandler}
          onBlur={handleBlur}
        />
        {passwordDirty && passwordError && (
          <div className={style.loginForm__error}>{passwordError}</div>
        )}
      </div>
      <button disabled={!formValid} className={style.loginForm__btn} type="submit">
        Регистрация
      </button>
    </form>
  );
};

export default RegisterForm;
