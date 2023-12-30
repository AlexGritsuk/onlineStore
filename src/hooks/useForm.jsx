import { useEffect, useState } from "react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = ({ target }) => {
    setEmail(target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(target.value).toLowerCase())) {
      setEmailError("Некорректный емейл");
      if (!target.value) {
        setEmailError("Email не может быть пустым");
      }
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = ({ target }) => {
    setPassword(target.value);
    if (target.value.length < 8) {
      setPasswordError("Пароль должен содержать не менее 8 символов");
      if (!target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const handleBlur = ({ target }) => {
    switch (target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email: email, password: password });
  };

  return {
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
  };
};

export default useForm;
