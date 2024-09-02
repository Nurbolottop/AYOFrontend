import React, { useState, useEffect, useRef } from "react";
import { Column, Line, Pie } from "@ant-design/plots";
import "./ProfileAgency.scss";
import human from "../../img/icons/humanProfile.svg";
import Client from "./Client/Client";
import DataAgency from "./DataAgency/DataAgency";
import Transaction from "./Transaction/Transaction";
import DataBanner from "./Banner/DataBanner";

import MessageAgency from "./MessageAgency/MessageAgency";
import Tools from "./Tools/Tools";
import "./Tools/Tools.scss";
import NoticeAgency from "../NoticeAgency/NoticeAgency";

const ProfileAgency = () => {
  const [tab, setTab] = useState("notice");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("За месяц");

  const data = [
    { month: "Янв", value: 4 },
    { month: "Фев", value: 5 },
    { month: "Мар", value: 6 },
    { month: "Апр", value: 8 },
    { month: "Май", value: 5 },
    { month: "Июн", value: 13 },
    { month: "Июл", value: 17 },
    { month: "Авг", value: 15 },
    { month: "Сен", value: 20 },
    { month: "Окт", value: 20 },
    { month: "Ноя", value: 20 },
    { month: "Дек", value: 20 },
  ];

  const configLine = {
    data,
    colorField: "type",
    xField: "month",
    yField: "value",
    point: {
      shapeField: "square",
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    scale: { color: { range: ["#AF251C"] } },
  };

  const configPie = {
    data: [
      { type: "мужчины", value: 50 },
      { type: "женщины", value: 50 },
    ],
    angleField: "value",
    colorField: "type",
    innerRadius: 0.6,
    label: {
      text: "value",
      fontSize: 18,
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
    annotations: [
      {
        type: "text",
        style: {
          text: "100%",
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 100,
          fontStyle: "PP Neue Machina",
        },
      },
    ],
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    setIsModalVisible(false);
  };

  const chartRef = useRef();
  useEffect(() => {
    console.log({ chartRef });
    if (chartRef.current) {
    }
  }, []);

  let section = <DataAgency />;
  switch (tab) {
    case "data":
      section = <DataAgency />;
      break;
    case "transaction":
      section = <Transaction />;
      break;
    case "loadBanner":
      section = <DataBanner />
      break;
    case "message":
      section = <MessageAgency />;
      break;
    case "tools":
      section = (
        <Tools
          selectedPeriod={selectedPeriod}
          toggleModal={toggleModal}
          handlePeriodChange={handlePeriodChange}
          data={data}
        />
      );
      break;
    case "client":
      section = <Client />;
      break;
    case "notice":
      section = <NoticeAgency />;
    default:
      section = <DataAgency />;
      break;
  }

  return (
    <main className="container">
      <div className="profile">
        <section className="profile__first">
          <div className="profile__first-col">
            <img className="profile__first-logo" src={human} alt="" />
            <p className="profile__first-edit">Изменить лого</p>
            <h3 className="profile__first-name">Ayana Kubanychbekova</h3>
          </div>
          <span className="profile__first-line"></span>
          <div className="profile__first-none">
            <b className="profile__first-bold">Личный кабинет</b>
            <ul className="profile__first-menu">
              <li
                className={
                  tab === "data"
                    ? "profile__first-text active"
                    : "profile__first-text"
                }
                onClick={() => setTab("data")}
              >
                Данные компании
              </li>
              <li
                className={
                  tab === "transaction"
                    ? "profile__first-text active"
                    : "profile__first-text"
                }
                onClick={() => setTab("transaction")}
              >
                История транкзации
              </li>
              <li
                className={
                  tab === "loadBanner"
                    ? "profile__first-text active"
                    : "profile__first-text"
                }
                onClick={() => setTab("loadBanner")}
              >
                Загрузка баннеров
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
                  tab === "tools"
                    ? "profile__first-text active"
                    : "profile__first-text"
                }
                onClick={() => setTab("tools")}
              >
                Инструменты аналитики
              </li>
              <li
                className={
                  tab === "client"
                    ? "profile__first-text active"
                    : "profile__first-text"
                }
                onClick={() => setTab("client")}
              >
                Информация о клиентах
              </li>
            </ul>
          </div>
        </section>
        <section className="profile__second">{section}</section>
      </div>
      {tab === "tools" && (
        <React.Fragment>
          <div className="tools__line">
            <h2 className="tools__line-title">
              Общая прибыль и снижение продаж
              <button onClick={toggleModal}>{selectedPeriod}</button>
            </h2>
            <Line {...configLine} />
          </div>
          <div className="tools__pie">
            <Pie {...configPie} />
          </div>

          {isModalVisible && (
            <div className="modalBlock">
              <div className="modalBlock-content">
                <ul>
                  <li onClick={() => handlePeriodChange("За день")}>За день</li>
                  <li onClick={() => handlePeriodChange("За неделю")}>
                    За неделю
                  </li>
                  <li onClick={() => handlePeriodChange("За месяц")}>
                    За месяц
                  </li>
                  <li onClick={() => handlePeriodChange("За год")}>За год</li>
                </ul>
                <button onClick={toggleModal} className="close-button">
                  ×
                </button>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </main>
  );
};

export default ProfileAgency;
