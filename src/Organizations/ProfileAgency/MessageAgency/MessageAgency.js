import React, { useState } from "react";
import useModal from "../../../hooks/useModal";
import logo from "../../../img/LogoNotice.svg";
import back from "../../../img/icons/back.svg";
import send from "../../../img/icons/send.svg";
import smile from "../../../img/icons/smile.svg";
import tools from "../../../img/icons/tools.svg";
import voice from "../../../img/icons/voice.svg";
import muteLogo from "../../../img/icons/mute.svg";
import turnOffLogo from "../../../img/icons/turnOff.svg";
import turnOffTimeLogo from "../../../img/icons/turnOffTime.svg";
import Notify from "../../../components/Notify/Notify";
const MessageAgency = () => {
  const { modals, activeButton, toggleModal, closeModal, openModal } =
    useModal();
  const [alert, setAlert] = useState({});

  return (
    <div className="message messageAgency">
      <div className="message__chat">
        <div className="message__chat-head">
          <div>
            <span className="message__chat-back">
              <img src={back} alt="" />
            </span>
            <span className="message__chat-logo">
              <img src={logo} alt="" />
            </span>
            <h4 className="message__chat-title">Организация</h4>
            {alert && (
              <div>
                {alert === "turnoff" && <img src={turnOffLogo} alt="" />}
                {alert === "turnofftime" && (
                  <img src={turnOffTimeLogo} alt="" />
                )}
                {alert === "mute" && <img src={muteLogo} alt="" />}
              </div>
            )}
          </div>
          <button onClick={() => openModal("notify")}>
            <img src={tools} alt="" />
          </button>
        </div>
        <p className="message__chat-date">06.09.2024</p>
        <div className="message__chat-body">
          <div className="message__chat-mass ">
            <p className="message__chat-mass-text">
              Lorem ipsum dolor sit amet consectetur. Urna suspendisse donec
              eget odio quis sit mattis odio a. Velit commodo sit tortor non.
              Vitae molestie augue sed tellus quam. Viverra justo in non lacus
              egestas vitae.
            </p>
            <p className="message__chat-mass-date">06.09.2024</p>
          </div>
          <div className="message__chat-mass chat-right">
            <p className="message__chat-mass-text">
              Lorem ipsum dolor sit amet consectetur. Urna suspendisse donec
              eget odio quis sit mattis odio a. Velit commodo sit tortor non.
              Vitae molestie augue sed tellus quam. Viverra justo in non lacus
              egestas vitae.
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
      <Notify
        alert={alert}
        setAlert={setAlert}
        isOpen={modals["notify"]}
        onClose={() => closeModal("notify")}
      />
    </div>
  );
};

export default MessageAgency;
