import React, { useEffect } from "react";
import UserFooter from "../../../components/UserFooter/UserFooter";
import QrCode from "../../../img/default_qrcode 1.png";
import certificates from "../../../img/messageEmpty.png";
import Organizations from "../Home/Organizations/Organizations";
import Questions from "../Home/Questions/Questions";
import "./UserHome.scss";
import { getUserData, useAuth } from "../../../store/auth.reducer";
import { useDispatch } from "react-redux";
import searchIcon from "../../../img/icons/searchIcon.svg";
import logo from "../../../img/icons/humanLowLogo.svg";
import search from "../../../img/ion_search-outline.png";
import useModal from "../../../hooks/useModal";
import ModalHome from "../../../components/ModalHome/ModalHome";

const UserHome = () => {
  const { user, userData } = useAuth();
  const { modals, activeButton, toggleModal, closeModal } = useModal();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData(user.id));
  }, [dispatch]);
  return (
    <>
      <div className="home__btns">
        <button
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
      <ModalHome isOpen={modals["modal1"]} onClose={() => closeModal("modal1")}>
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
      <ModalHome isOpen={modals["modal2"]} onClose={() => closeModal("modal2")}>
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
        </div>
      </ModalHome>

      <main className="userHome">
        <section className="agency">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <div className="agency__content">
                  <h2 className="agency__content-title">(Организация)</h2>
                  <h4 className="agency__content-subtitle">
                    Lorem ipsum dolor sit amet <br /> consectetur.
                  </h4>
                </div>
              </div>
              <div className="col-3">
                <div className="agency__qr">
                  <div className="showQr__content">
                    <img
                      className="showQr__content-img"
                      src={user?.profile_qr_code}
                      alt=""
                    />
                    <p className="showQr__content-number">
                      {user?.wallet_address}
                    </p>
                    <p className="showQr__content-text">
                      Для оформления заказа <br /> отсканируйте QR-код.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="agency__qr">
                  <div className="showQr__content">
                    <img src={user?.profile_qr_code} alt="" />
                    <p className="showQr__content-number">
                      {user?.wallet_address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="agency__card">
                  <div className="agency__card-row">
                    <h4 className="agency__card-title">Мои сертификаты</h4>
                    <img
                      src={certificates}
                      className="agency__card-img"
                      alt=""
                    />
                  </div>
                  <p className="agency__card-text">
                    У вас пока что нет ни одного <br /> сертификатов
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="agency__card">
                  <div className="agency__card-row">
                    <h4 className="agency__card-title">Сэкономил(а) с AYO</h4>
                    <img
                      src={certificates}
                      className="agency__card-img none"
                      alt=""
                    />
                  </div>
                  <p className="agency__card-total">Общая сумма</p>
                  <div className="agency__card-square">
                    <p className="agency__card-price">0 $</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="agency__card">
                  <div className="agency__card-row">
                    <h4 className="agency__card-title">Мои компании</h4>
                    <img
                      src={certificates}
                      className="agency__card-img"
                      alt=""
                    />
                  </div>
                  <p className="agency__card-text">
                    У вас пока что нет компаний
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Organizations />
        <Questions />
        {/* <Footer /> */}
      </main>
      <UserFooter />
    </>
  );
};

export default UserHome;
