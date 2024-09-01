import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Application from "../../../../components/Application/Application";
import ModalHistory from "../../../../components/ModalHistory/ModalHistory";
import ModalHome from "../../../../components/ModalHome/ModalHome";
import useModal from "../../../../hooks/useModal";
import logo from "../../../../img/LogoNotice.svg";
import empty from "../../../../img/history.png";
import closeIcon from "../../../../img/icons/closeIcon.svg";
import search from "../../../../img/icons/searchIcon.svg";
import searchLight from "../../../../img/icons/searchLightIcon.svg";
import image from "../../../../img/image.png";
import Calendar from "./CalendarModal";
import "./History.scss";

const History = () => {
  const [value, onChange] = useState(new Date());
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(100);
  const [rangeValue, setRangeValue] = useState(50);
  const { modals, openModal, closeModal, toggleModal } = useModal();
  const history = [
    {
      id: 1,
      title: "Ocak Kebap Ош",
      text: "Lorem ipsum dolor sit amet consectetur.Bibendum lacus orci sagittis vitae tristique massa.",
      date: "09.04.2024",
      logo: logo,
      image: image,
      price: 100,
      cashback: 100,
      point: 100,
    },
    {
      id: 2,
      title: "Ocak Kebap Ош",
      text: "Lorem ipsum dolor sit amet consectetur.Bibendum lacus orci sagittis vitae tristique massa.",
      date: "09.04.2024",
      logo: logo,
      image: image,
      price: 100,
      cashback: 100,
      point: 100,
    },
  ];

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
    setRangeValue(Math.max(value, rangeValue));
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
    setRangeValue(Math.min(value, rangeValue));
  };

  return (
    <div className="history">
      <h2 className="data__title">История операции</h2>
      <div
        className={
          history.length === 0 ? "history__btns history__mb" : "history__btns"
        }
      >
        <button
          className="history__btns-first"
          onClick={() => openModal("historySort")}
        >
          Сортировать
        </button>
        <button
          className="history__btns-last"
          onClick={() => openModal("historySearch")}
        >
          <img src={searchLight} alt="" />
        </button>
      </div>
      <ModalHistory
        isOpen={modals["historySort"]}
        onClose={() => closeModal("historySort")}
      >
        <div className="history__modal-content">
          <div className="history__modal-head">
            <h3 className="history__modal-title">Сумма</h3>
            <button
              className="history__modal-close"
              onClick={() => closeModal("historySort")}
            >
              <img src={closeIcon} alt="" />
            </button>
          </div>
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={rangeValue}
            onChange={handleRangeChange}
            id="rangeSlider"
            className="history__modal-range"
          />
          <div className="history__modal-labels">
            <p>{minValue} $</p>
            <p>{maxValue} $</p>
          </div>
          <div className="history__modal-box">
            <div>
              <label htmlFor="minValue">От</label>
              <input
                type="number"
                id="minValue"
                value={minValue}
                onChange={handleMinChange}
              />
            </div>
            <div>
              <label htmlFor="maxValue">До</label>
              <input
                type="number"
                id="maxValue"
                value={maxValue}
                onChange={handleMaxChange}
              />
            </div>
          </div>
          <h4 className="history__modal-byDate">По дате</h4>
          <button
            className="history__modal-choose"
            onClick={() => openModal("calendar")}
          >
            Выбрать дату
          </button>
        </div>
        <Calendar
          isOpen={modals["calendar"]}
          onClose={() => closeModal("calendar")}
          value={value}
          onChange={onChange}
        />
      </ModalHistory>
      <ModalHome
        isOpen={modals["historySearch"]}
        onClose={() => closeModal("historySearch")}
      >
        <div className="city__form-input">
          <input type="text" placeholder="Поиск" />
          <button>
            <img src={search} alt="" />
          </button>
        </div>
        <div className="home__content-entity">
          <h4 className="home__content-popular">организации</h4>
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
      {history.length === 0 ? (
        <div>
          <p className="notice__notnotice">
            У вас пока что нет сертификатов в архиве
          </p>
          <img className="notice__img history__empty" src={empty} alt="" />
          <button className="data__save">Главная</button>
        </div>
      ) : (
        <>
          <p className="message__chat-date">{history[0].date}</p>
          {history.map((item) => {
            return (
              <div className="history__content" key={item.id}>
                <div className="history__content-col">
                  <img
                    src={item.logo}
                    className="history__content-img"
                    alt=""
                  />
                  <h3 className="history__content-title">{item.title}</h3>
                </div>
                <div className={"history__content-row"}>
                  <div className="history__content-cash">
                    <p>Сумма покупки: {item.cashback} $</p>
                    <p>Сумма кешбека: {item.price} $</p>
                  </div>
                  <b className="history__content-point">Б {item.point}+</b>
                </div>
                <div className="history__content-cash">
                  <p>Сумма покупки: {item.cashback} $</p>
                  <p>Сумма кешбека: {item.price} $</p>
                </div>
                <b className="history__content-point">Б {item.point}+</b>
              </div>
            );
          })}
        </>
      )}
      <Application />
    </div>
  );
};

export default History;
