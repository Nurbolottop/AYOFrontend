import React from "react";

const OrganizationConfirm = () => {
  return (
    <section className="confirm">
      <div className="container">
        <div className="confirm__content">
          <h2 className="login__form-title">Вход в компанию</h2>
          <input
            type="text"
            className="login__form-input"
            name="confirmation_code"
            placeholder="Электронная почта"
          />
          <button className="login__form-submit orMt">Войти</button>
        </div>
      </div>
    </section>
  );
};

export default OrganizationConfirm;
