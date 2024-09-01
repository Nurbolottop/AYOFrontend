import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useModal from "../../hooks/useModal";
import logo from "../../img/icons/ayoLogo.svg";
import bell from "../../img/icons/bell.svg";
import burger from "../../img/icons/burger.svg";
import bellBlack from "../../img/icons/bellBlack.svg";
import human from "../../img/icons/human.svg";
import qr from "../../img/icons/qr.svg";
import Alert from "../Alert/Alert";
import ShowQr from "../ShowQr/ShowQr";
import "./Header.scss";
import Burger from "../Burger/Burger";
const UserHeader = ({ tab, setTab, user }) => {
  const location = useLocation();
  const { modals, openModal, closeModal } = useModal();
  const [modalsOpened, setModalsOpened] = useState({
    modal3: false,
    modal4: false,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      if (location.pathname !== "/" && !modalsOpened.modal3) {
        openModal("modal3");
        setModalsOpened((prev) => ({ ...prev, modal3: true }));
      }
      if (location.pathname !== "/profile" && !modalsOpened.modal4) {
        openModal("modal4");
        setModalsOpened((prev) => ({ ...prev, modal4: true }));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname, modalsOpened, openModal]);
  return (
    <header className="header">
      <div className="header__container container">
        <Link to={"/"}>
          <img src={logo} alt="" className="header__logo" />
        </Link>
        <Link to={"/profile"} className="header__data">
          <img src={human} alt="" className="header__data-img" />
          <h3 className="header__data-name">{user.username}</h3>
        </Link>
        <div className="header__menu">
          <div className="header__languages">
            <p className="header__languages-text active">RU</p>
            <p className="header__languages-text">EN</p>
            <p className="header__languages-text">SPA</p>
          </div>
          <span onClick={() => openModal("modal5")}>
            <img src={qr} className="header__qr" alt="" />
          </span>
          <span className="header__menu-bell" onClick={() => setTab("notice")}>
            <Link to={"/profile"}>
              {tab === "notice" && location.pathname === "/profile" ? (
                <img src={bellBlack} alt="" />
              ) : (
                <React.Fragment>
                  <img src={bell} alt="" />
                  <span className="header__menu-count">9</span>
                </React.Fragment>
              )}
            </Link>
          </span>
          <button
            className="header__menu-burger"
            onClick={() => openModal("burger")}
          >
            <img src={burger} alt="" />
          </button>
        </div>
      </div>
      <Burger
        setTab={setTab}
        tab={tab}
        isOpen={modals["burger"]}
        onClose={() => closeModal("burger")}
      />
      <Alert
        isOpen={modals["modal3"]}
        onClose={() => closeModal("modal3")}
        title="Что бы перейти на главную страницу нажмите на лого"
      />
      <div className="alert2">
        <Alert
          isOpen={modals["modal4"]}
          onClose={() => closeModal("modal4")}
          title="Что бы перейти на личный кабинет нажмите на свой профиль"
        />
      </div>
      <ShowQr isOpen={modals["modal5"]} onClose={() => closeModal("modal5")} />
    </header>
  );
};

export default UserHeader;
