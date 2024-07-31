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

  const toggleFromType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <div className={style.login}>
      <div className={style.login__inner}>
        <div className={style.login__logo} style={{ marginTop: "15px" }}>
          <h4>Welcome to AppleStore</h4>
          <DiApple style={{ height: "2em", width: "2em", marginTop: "15px" }} />
        </div>
        <div className={style.login__item} style={{ marginTop: "15px" }}>
          <div className={style.login__link}>
            <a role="button" onClick={toggleFromType}>
              Вход
            </a>
            <a role="button" onClick={toggleFromType}>
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
