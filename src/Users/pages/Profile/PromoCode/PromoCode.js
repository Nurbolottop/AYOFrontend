import React from "react";
import "./PromoCode.scss";
import Application from "../../../../components/Application/Application";
const PromoCode = () => {
  return (
    <div className="promoCode">
      <h2 className="data__title">Ввести промокод</h2>
      <form className="promoCode__form">
        <div className="promoCode__form-col">
          <label className="promoCode__form-fail">Не верный промокод</label>
          <label className="promoCode__form-fail">
            Срок действия промокода истёк
          </label>
          <label className="promoCode__form-passed">
            Промокод действиелен{" "}
          </label>
        </div>
        <input
          type="text"
          className="promoCode__form-input"
          placeholder="Промокод"
        />
        <div className="promoCode__form-btns">
          <button className="promoCode__form-cancel">Отмена</button>
          <button className="promoCode__form-ok">Ок</button>
        </div>
      </form>
      <button className="data__save">Сохранить</button>
      <Application />
    </div>
  );
};

export default PromoCode;
