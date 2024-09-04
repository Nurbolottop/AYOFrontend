import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../../img/icons/facebook.svg";
import google from "../../img/icons/google.svg";
import telegram from "../../img/icons/telegram.svg";
import { eventHandler } from "../../utils/eventHandlers";
const LoginForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { 0: state, 1: setState } = useState({
    email: "",
  });
  const [error, setError] = useState(null);
  const onChange = eventHandler(setState);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      await onSubmit(state);
      localStorage.setItem("email", state.email);
      navigate("/confirm");
    } catch (err) {
      setError(err.detail || "Произошла неожиданная ошибка.");
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="login__form">
      <h2 className="login__form-title">Вход</h2>
      {error && <label className="login__form-label">Не верная эл.почта</label>}
      <input
        type="email"
        className="login__form-input"
        placeholder="Электронная почта"
        name="email"
        onChange={onChange}
      />{" "}
      <div className="login__form-column-grid">
        <Link to={"/register"} className="login__form-submit">
          Создать аккаунт
        </Link>
        <Link to={"/request"} className="login__form-submit"> 
          Войти в свою компанию
        </Link>
      </div>
      <button className="login__form-enter">
        Войти с помощью{" "}
        <span>
          <img src={google} alt="" />
        </span>
      </button>
      <button className="login__form-enter">
        Войти с помощью{" "}
        <span>
          <img src={facebook} alt="" />
        </span>
      </button>
      <button className="login__form-enter">
        Войти с помощью{" "}
        <span>
          <img src={telegram} alt="" />
        </span>
      </button>
      <button className="login__form-submit" type="submit">
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
