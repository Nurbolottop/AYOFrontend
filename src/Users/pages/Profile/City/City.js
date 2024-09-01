import React from "react";
import search from "../../../../img/ion_search-outline.png";
import edit from "../../../../img/Icons.svg";

import "./City.scss";
import Application from "../../../../components/Application/Application";
const City = () => {
  return (
    <div className="city">
      <h2 className="data__title">Мой город</h2>
      <form className="city__form">
        <div className="city__form-input">
          <>
            <input type="text" placeholder="Введите страну" />
            <button>
              <img src={search} alt="" />
            </button>
          </>
        </div>
        <br />
        <div className="city__form-input">
          <>
            <p>Кыргызстан / Ош</p>
            <button>
              <img src={edit} alt="" />
            </button>
          </>
        </div>
      </form>
      <div className="city__results">
        <p className="city__results-text">Кыргызстан / Ош</p>
      </div>
      <button className="data__save">Сохранить</button>
      <Application />
    </div>
  );
};

export default City;
