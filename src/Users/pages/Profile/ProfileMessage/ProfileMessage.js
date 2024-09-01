import React from "react";
import Application from "../../../../components/Application/Application";
import logo from "../../../../img/LogoNotice.svg";
import back from "../../../../img/icons/back.svg";
import voice from "../../../../img/icons/voice.svg";
import send from "../../../../img/icons/send.svg";
import smile from "../../../../img/icons/smile.svg";
import massageImage from "../../../../img/message.png";

import "./ProfileMessage.scss";
import Message from "./Message/Message";
const ProfileMessage = () => {
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
  return (
    <div className="message">
      <h2 className="data__title">Сообщение</h2>
      {messages.map((message) => {
        return (
          <div className="message__content" key={message.id}>
            <img src={message.logo} alt="" className="message__content-logo" />
            <h4 className="message__content-title">{message.title}</h4>
          </div>
        );
      })}
      <Message />
      <Application />
    </div>
  );
};

export default ProfileMessage;
