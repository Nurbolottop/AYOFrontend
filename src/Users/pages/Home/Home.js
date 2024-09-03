import React from "react";
import Banner from "./Banner/Banner";
import Shop from "./Shop/Shop";
import Organizations from "./Organizations/Organizations";
import Questions from "./Questions/Questions";
import ModalHome from "../../../components/ModalHome/ModalHome";
import useModal from "../../../hooks/useModal";
// import Footer from "../../../../components/Footer/Footer";
import Footer from "../../../components/Footer/Footer";
import "./Home.scss";
import "./MediaHome.scss";
import searchIcon from "../../../img/icons/searchIcon.svg";
import logo from "../../../img/icons/humanLowLogo.svg";
import search from "../../../img/ion_search-outline.png";

const Home = () => {
  const { modals, activeButton, toggleModal, closeModal } = useModal();

  return (
    <React.Fragment>
      <main className="home">
        {/* <div className="home__btns"> */}
          {/* <button
            className={
              activeButton === "modal1"
                ? "home__btns-btn home__btns-filter home-btn-active"
                : "home__btns-btn home__btns-filter"
            }
            onClick={() => toggleModal("modal1")}
          >
            Фильтрация
          </button>
          <button
            className={
              activeButton === "modal2"
                ? "home__btns-btn home__btns-search home-btn-active"
                : "home__btns-btn home__btns-search"
            }
            onClick={() => toggleModal("modal2")}
          >
            {}
            <img src={searchIcon} alt="" />
          </button>
        </div>
        <ModalHome
          isOpen={modals["modal1"]}
          onClose={() => closeModal("modal1")}
        >
          <h2 className="home__content-title">Фильтрация организации</h2>
          <h4 className="home__content-category">Категории</h4>
          <div className="home__content-col">
            <select className="home__content-col-select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select className="home__content-col-select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <select className="home__content-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <h4 className="home__content-category">Сортировка</h4>
          <div className="home__content-radio">
            <input type="radio" name="sort" />
            <p>Организация по рейтингу</p>
          </div>
          <div className="home__content-radio">
            <input type="radio" name="sort" />
            <p>По популярности</p>
          </div>
          <div className="home__content-radio">
            <input type="radio" name="sort" />
            <p>По дате добавления</p>
          </div>
          <div className="home__content-btns">
            <button className="home__content-btn1">Сбросить</button>
            <button className="home__content-btn2">Показать</button>
          </div>
          <p className="home__content-countResults">35 Результатов</p>
        </ModalHome>
        <ModalHome
          isOpen={modals["modal2"]}
          onClose={() => closeModal("modal2")}
        >
          <div className="city__form-input">
            <input type="text" placeholder="Поиск" />
            <button>
              <img src={search} alt="" />
            </button>
          </div>
          <div className="home__content-entity">
            <h4 className="home__content-popular">Популярные организации</h4>
            <div className="home__content-results">
              <div className="home__content-item">
                <img src={logo} alt="" />
                <p>Lorem ipsum</p>
              </div>
              <div className="home__content-item">
                <img src={logo} alt="" />
                <p>Lorem ipsum</p>
              </div>
              <div className="home__content-item">
                <img src={logo} alt="" />
                <p>Lorem ipsum</p>
              </div>
              <div className="home__content-item">
                <img src={logo} alt="" />
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div> */}
        {/* </ModalHome> */}
        <Banner />
        <Shop />
        <Organizations />
        <Questions />
      </main>
      <Footer />
    </React.Fragment>
    
  );
};

export default Home;
