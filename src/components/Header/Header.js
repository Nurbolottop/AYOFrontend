import React, { useState } from "react";
import logo from "../../img/icons/ayoLogo.svg";
import humanLogo from "../../img/icons/humanLogo.svg";
// import bell from "../../img/icons/bell.svg";
// import massageIcon from "../../img/icons/massageIcon.svg";
import profileIcon from "../../img/icons/profileIcon.svg";
import { Link, useLocation } from "react-router-dom";
import burgerMenu from "../../img/icons/burgerMenu.svg";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={location.pathname === "/" ? "header header__black" : "header"}
    >
      <div className="header__container container">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="header__logo" />
        </Link>
        <div className="header__menu">
          <Link to={"/"} className="header__menu-link">
            Главная
          </Link>
          <div className="header__languages">
            <p className="header__languages-text active">RU</p>
            <p className="header__languages-text">EN</p>
            <p className="header__languages-text">SPA</p>
          </div>
          {location.pathname !== "/" ? (
            <>
              <img src={humanLogo} alt="Human Logo" />
            </>
          ) : (
            <>
              <img src={profileIcon} alt="Profile Icon" />
            </>
          )}
          <button className="header__menu-burger" onClick={toggleMenu}>
            <img src={burgerMenu} alt="" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="overlay" onClick={closeMenu}>
          <div
            className="header__menu-content open"
            onClick={(e) => e.stopPropagation()}
          >
            <Link to={"/"} className="header__menu-link" onClick={closeMenu}>
              Главная
            </Link>
            <div className="header__languages">
              <p className="header__languages-text active">RU</p>
              <p className="header__languages-text">EN</p>
              <p className="header__languages-text">SPA</p>
            </div>
            {location.pathname !== "/" ? (
              <>
                <img src={humanLogo} alt="Human Logo" />
              </>
            ) : (
              <>
                <img src={profileIcon} alt="Profile Icon" />
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
