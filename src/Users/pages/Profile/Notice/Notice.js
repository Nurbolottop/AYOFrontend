import React from "react";
import logo from "../../../../img/LogoNotice.svg";
import image from "../../../../img/image.png";
import empty from "../../../../img/Exclamation.png";

import "./Notice.scss";
import Application from "../../../../components/Application/Application";
const Notice = () => {
  const notices = [
    {
      id: 1,
      title: "Организация",
      text: "Lorem ipsum dolor sit amet consectetur.Bibendum lacus orci sagittis vitae tristique massa.",
      date: "06/09/2024",
      logo: logo,
      image: image,
    },
    {
      id: 2,
      title: "Организация",
      text: "Lorem ipsum dolor sit amet consectetur.Bibendum lacus orci sagittis vitae tristique massa.",
      date: "06/09/2024",
      logo: logo,
      image: image,
    },
  ];
  console.log(notices);
  return (
    <div className="notice">
      <h2 className="data__title">Уведомления</h2>
      {notices.length === 0 ? (
        <div>
          <p className="notice__notnotice">У вас пока что нет уведомлений</p>
          <img className="notice__img" src={empty} alt="" />
          <button className="data__save">Главная</button>
        </div>
      ) : (
        <>
          {notices.map((notice) => {
            return (
              <div className="notice__content" key={notice.id}>
                <div className="notice__content-head">
                  <img src={notice.logo} alt="" />
                  <div>
                    <h3 className="notice__content-title">{notice.title}</h3>
                    <p className="notice__content-date">{notice.date}</p>
                  </div>
                </div>
                <div className="notice__content-body">
                  <img
                    className="notice__content-img"
                    src={notice.image}
                    alt=""
                  />
                  <p className="notice__content-text">{notice.text}</p>
                </div>
              </div>
            );
          })}
        </>
      )}
      <Application />
    </div>
  );
};

export default Notice;
