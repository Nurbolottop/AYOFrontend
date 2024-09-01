import React from "react";
import closeIcon from "../../img/icons/closeIcon.svg";
import { Link } from "react-router-dom";

const Burger = ({ setTab, tab, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="backdrop" onClick={onClose} />
      <div className="burger">
        <span className="burger__close">
          <img src={closeIcon} onClick={onClose} alt="" />
        </span>
        <div className="header__languages">
          <p className="header__languages-text active">RU</p>
          <p className="header__languages-text">EN</p>
          <p className="header__languages-text">SPA</p>
        </div>
        <ul className="profile__first-menu">
          <li
            className={
              tab === "notice"
                ? "profile__first-text active"
                : "profile__first-text"
            }
            onClick={() => setTab("notice")}
          >
            <Link to={"/profile"}>Уведомление</Link>
          </li>
          <li
            className={
              tab === "user"
                ? "profile__first-text active"
                : "profile__first-text"
            }
            onClick={() => setTab("user")}
          >
            <Link to={"/profile"}>Личные данные</Link>
          </li>
          <li
            className={
              tab === "orders"
                ? "profile__first-text active"
                : "profile__first-text"
            }
            onClick={() => setTab("orders")}
          >
            <Link to={"/profile"}>Мои заказы</Link>
          </li>
          <li
            className={
              tab === "city"
                ? "profile__first-text active"
                : "profile__first-text"
            }
            onClick={() => setTab("city")}
          >
            <Link to={"/profile"}>Мой город</Link>
          </li>
          <li
            className={
              tab === "code"
                ? "profile__first-text active"
                : "profile__first-text"
            }
            onClick={() => setTab("code")}
          >
            <Link to={"/profile"}>Ввести промокод</Link>
          </li>
          <li
            className={
              tab === "message"
                ? "profile__first-text active"
                : "profile__first-text"
            }
            onClick={() => setTab("message")}
          >
            <Link to={"/profile"}>Сообщения</Link>
          </li>
          <li
            className={
              tab === "certificates"
                ? "profile__first-text active"
                : "profile__first-text"
            }
            onClick={() => setTab("certificates")}
          >
            <Link to={"/profile"}>Мои сертификаты</Link>
          </li>
          <li
            className={
              tab === "history"
                ? "profile__first-text active"
                : "profile__first-text"
            }
            onClick={() => setTab("history")}
          >
            <Link to={"/profile"}>История операции</Link>
          </li>
          <li
            className="profile__first-text"
            onClick={() => setTab("connection")}
          >
            Обратная связь
          </li>
        </ul>
      </div>
    </>
  );
};

export default Burger;
