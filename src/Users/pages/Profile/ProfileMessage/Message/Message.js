import React from "react";
import Application from "../../../../../components/Application/Application";
import logo from "../../../../../img/LogoNotice.svg";
import back from "../../../../../img/icons/back.svg";
import voice from "../../../../../img/icons/voice.svg";
import send from "../../../../../img/icons/send.svg";
import smile from "../../../../../img/icons/smile.svg";

import massageImage from "../../../../../img/message.png";

const messages = [
  {
    id: 1,
    user: "back",
    title: "Организация",
    text: "Lorem ipsum dolor sit amet consectetur. Urna suspendisse donec eget odio quis sit mattis odio a. Velit commodo sit tortor non. Vitae molestie augue sed tellus quam. Viverra justo in non lacus egestas vitae.",
    date: "06.09.2024",
    logo: logo,
  },
  {
    id: 2,
    user: "front",
    title: "Организация",
    text: "Lorem ipsum dolor sit amet consectetur. Urna suspendisse donec eget odio quis sit mattis odio a. Velit commodo sit tortor non. Vitae molestie augue sed tellus quam. Viverra justo in non lacus egestas vitae.",
    date: "06.09.2024",
    logo: logo,
  },
];
const Message = () => {
  return (
    <div>
      {messages.length === 0 ? (
        <div>
          <p className="notice__notnotice">
            Хотите забронировать столик или узнать о меню? Мы <br /> всегда на
            связи! Пишите нам на странице компании.
          </p>
          <img className="notice__img" src={massageImage} alt="" />
          <button className="data__save">Главная</button>
          <Application />
        </div>
      ) : (
        <>
          <div className="message__chat">
            <div className="message__chat-head">
              <span className="message__chat-back">
                <img src={back} alt="" />
              </span>
              <span className="message__chat-logo">
                <img src={logo} alt="" />
              </span>
              <h4 className="message__chat-title">Организация</h4>
            </div>
            <p className="message__chat-date">06.09.2024</p>
            <div className="message__chat-body">
              <div className="message__chat-mass ">
                <p className="message__chat-mass-text">
                  Lorem ipsum dolor sit amet consectetur. Urna suspendisse donec
                  eget odio quis sit mattis odio a. Velit commodo sit tortor
                  non. Vitae molestie augue sed tellus quam. Viverra justo in
                  non lacus egestas vitae.
                </p>
                <p className="message__chat-mass-date">06.09.2024</p>
              </div>
              <div className="message__chat-mass chat-right">
                <p className="message__chat-mass-text">
                  Lorem ipsum dolor sit amet consectetur. Urna suspendisse donec
                  eget odio quis sit mattis odio a. Velit commodo sit tortor
                  non. Vitae molestie augue sed tellus quam. Viverra justo in
                  non lacus egestas vitae.
                </p>
                <p className="message__chat-mass-date">06.09.2024</p>
              </div>
            </div>
            <div className="message__chat-foot">
              <input type="text" placeholder="Написать сообщение..." />
              <div className="message__chat-horizon">
                <span>
                  <img src={smile} alt="" />
                </span>
                <span>
                  <img src={voice} alt="" />
                </span>
                <span>
                  <img src={send} alt="" />
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
