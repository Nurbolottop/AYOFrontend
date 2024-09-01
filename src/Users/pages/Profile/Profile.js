import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import human from "../../../img/icons/humanProfile.svg";
import { logout, useAuth } from "../../../store/auth.reducer";
import Cart from "./Cart/Cart";
import Certificates from "./Certificates/Certificates";
import City from "./City/City";
import Data from "./Data/Data";
import Feedback from "./Feedback/Feedback";
import History from "./History/History";
import Notice from "./Notice/Notice";
import Orders from "./Orders/Orders";
import ProfileMessage from "./ProfileMessage/ProfileMessage";
import PromoCode from "./PromoCode/PromoCode";
import "./Profile.scss";
const Profile = ({ tab, setTab, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useAuth();
  const onClick = () => {
    dispatch(logout());
    navigate("/");
  };
  let section = <Data user={user} />;
  switch (tab) {
    case "orders": {
      section = <Orders />;
      break;
    }
    case "cart": {
      section = <Cart />;
      break;
    }
    case "city": {
      section = <City />;
      break;
    }
    case "code": {
      section = <PromoCode />;
      break;
    }
    case "message": {
      section = <ProfileMessage />;
      break;
    }
    case "certificates": {
      section = <Certificates />;
      break;
    }
    case "notice": {
      section = <Notice />;
      break;
    }
    case "history": {
      section = <History />;
      break;
    }
    case "feedback": {
      section = <Feedback />;
      break;
    }
    default: {
      section = <Data user={user} />;
      break;
    }
  }
  return (
    <div className="profile container">
      <section className="profile__first">
        <div className="profile__first-col">
          <img className="profile__first-logo" src={human} alt="" />
          <p className="profile__first-edit">Изменить профиль</p>
          <h3 className="profile__first-name">Ayana Kubanychbekova</h3>
        </div>
        <span className="profile__first-line"></span>
        <div className="profile__first-none">
          <b className="profile__first-bold">Личный кабинет</b>
          <ul className="profile__first-menu">
            <li
              className={
                tab === "user"
                  ? "profile__first-text active"
                  : "profile__first-text"
              }
              onClick={() => setTab("user")}
            >
              Личные данные
            </li>
            <li
              className={
                tab === "orders"
                  ? "profile__first-text active"
                  : "profile__first-text"
              }
              onClick={() => setTab("orders")}
            >
              Мои заказы
            </li>
            <li
              className={
                tab === "cart"
                  ? "profile__first-text active"
                  : "profile__first-text"
              }
              onClick={() => setTab("cart")}
            >
              Моя корзина
            </li>
            <li
              className={
                tab === "city"
                  ? "profile__first-text active"
                  : "profile__first-text"
              }
              onClick={() => setTab("city")}
            >
              Мой город
            </li>
            <li
              className={
                tab === "code"
                  ? "profile__first-text active"
                  : "profile__first-text"
              }
              onClick={() => setTab("code")}
            >
              Ввести промокод
            </li>
            <li
              className={
                tab === "message"
                  ? "profile__first-text active"
                  : "profile__first-text"
              }
              onClick={() => setTab("message")}
            >
              Сообщения
            </li>
            <li
              className={
                tab === "certificates"
                  ? "profile__first-text active"
                  : "profile__first-text"
              }
              onClick={() => setTab("certificates")}
            >
              Мои сертификаты
            </li>
            <li
              className={
                tab === "history"
                  ? "profile__first-text active"
                  : "profile__first-text"
              }
              onClick={() => setTab("history")}
            >
              История операции
            </li>
            <li
              className={
                tab === "feedback"
                  ? "profile__first-text active"
                  : "profile__first-text"
              }
              onClick={() => setTab("feedback")}
            >
              Обратная связь
            </li>
            <p
              onClick={onClick}
              className="profile__first-delete profile__first-text"
            >
              Выйти с аккаунта
            </p>
          </ul>
        </div>
      </section>
      <section className="profile__second">{section}</section>
    </div>
  );
};

export default Profile;
