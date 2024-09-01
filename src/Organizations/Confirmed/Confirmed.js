import React from "react";
import { Link } from "react-router-dom";
import confirmedLogo from "../../img/icons/confirmed.svg";
import "./Confirmed.scss";
const Confirmed = () => {
  return (
    <section className="confirmed">
      <div className="container confirmed__content">
        <h2 className="expectation__title">Подтверждено!</h2>
        <img className="confirmed__content-img" src={confirmedLogo} alt="" />
        <Link to={"/profileAgency"} className="confirmed__content-link">
          Перейти в профиль
        </Link>
      </div>
    </section>
  );
};

export default Confirmed;
