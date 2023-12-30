import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RegisterForm from "../components/ui/registerForm/registerForm";
import LoginForm from "../components/ui/loginForm/loginForm";
import style from "../style/login.module.css";
import { DiApple } from "react-icons/di";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );

  const FormTypeRegister = () => {
    setFormType((prevState) => {
      return (prevState = "register");
    });
  };

  const FormTypeLogin = () => {
    setFormType((prevState) => {
      return (prevState = "login");
    });
  };

  return (
    <div className={style.login}>
      <div className={style.login__inner}>
        <div className={style.login__logo}>
          <h3>Welcome</h3>
          <DiApple style={{height: "2em", width: "2em"}}/>
        </div>
        <div className={style.login__item}>
          <div className={style.login__link}>
            <a role="button" onClick={FormTypeLogin}>
              Вход
            </a>
            <a role="button" onClick={FormTypeRegister}>
              Регистрация
            </a>
          </div>
          {formType === "register" ? (
            <div>
              <RegisterForm />
            </div>
          ) : (
            <div>
              <LoginForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
