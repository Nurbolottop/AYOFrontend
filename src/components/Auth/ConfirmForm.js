import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { eventHandler } from "../../utils/eventHandlers";

const ConfirmForm = ({ email, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: email,
    confirmation_code: "",
  });
  const [error, setError] = useState(null);

  const onChange = eventHandler(setState);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      await onSubmit(state);
      navigate("/qr");
    } catch (err) {
      setError(err.detail || "Произошла неожиданная ошибка.");
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="confirm__content">
      <h2 className="login__form-title">Код подтверждения</h2>
      <p className="confirm__content-text">
        Пожалуйста, проверьте свою почту <span>{email}</span>. <br /> Мы
        отправили вам код с подтверждением
      </p>
      <input
        type="text"
        className="login__form-input"
        onChange={onChange}
        name="confirmation_code"
        value={state.confirmation_code}
      />
      {error && (
        <p className="error-message">Неверный код подтверждения или email.</p>
      )}{" "}
      <button className="login__form-submit">Отлично</button>
    </form>
  );
};

export default ConfirmForm;
