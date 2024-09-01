import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <h2 className="banner__title">
          Получите деньги <br /> обратно за каждую <br /> покупку!
        </h2>
        <div className="banner__content">
          <Link className="banner__content-login" to={"/login"}>
            Войти
          </Link>
          <Link className="banner__content-register" to={"/register"}>
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
