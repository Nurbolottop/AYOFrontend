import React from "react";
import close from "../../img/icons/closeIcon.svg";
import muteLogo from "../../img/icons/mute.svg";
import muteActiveLogo from "../../img/icons/muteActive.svg";
import turnOffLogo from "../../img/icons/turnOff.svg";
import turnOffActiveLogo from "../../img/icons/turnoffActive.svg";
import turnOffTimeLogo from "../../img/icons/turnOffTime.svg";
import selectSongLogo from "../../img/icons/selectSong.svg";
import "./Notify.scss";

const ForWhile = () => {
  return <div></div>;
};

const Notify = ({ alert, setAlert, isOpen, onClose }) => {
  if (!isOpen) return null;
  const handleAlert = (alert) => {
    setAlert((prevAlert) => (prevAlert === alert ? "" : alert));
  };
  return (
    <>
      <div className="backdrop" onClick={onClose} />
      <div className="notify">
        <div className="notify__content">
          <div className="notify__content-text button-close">
            <button
              className={
                alert === "turnoff"
                  ? "notify__content-text notify-active"
                  : "notify__content-text"
              }
              onClick={() => handleAlert("turnoff")}
            >
              {alert === "turnoff" ? (
                <img src={turnOffActiveLogo} alt="" />
              ) : (
                <img src={turnOffLogo} alt="" />
              )}
              Выключить уведмление
            </button>
            <button onClick={onClose}>
              <img src={close} alt="" />
            </button>
          </div>
          <button className={"notify__content-text "}>
            <img src={turnOffTimeLogo} alt="" />
            Выключить на время...
          </button>
          <button
            className={
              alert === "mute"
                ? "notify__content-text notify-active"
                : "notify__content-text"
            }
            onClick={() => handleAlert("mute")}
          >
            {alert === "mute" ? (
              <img src={muteActiveLogo} alt="" />
            ) : (
              <img src={muteLogo} alt="" />
            )}
            Выключить звук
          </button>
          <button className="notify__content-text">
            <img src={selectSongLogo} alt="" />
            Выбрать зкук
          </button>
        </div>
      </div>
    </>
  );
};

export default Notify;
