import React from "react";
import arrow from "../../img/Vector.png";
import "./Alert.scss";
const Alert = ({ title, onClose, isOpen }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="backdrop" onClick={onClose} />
      <div className="alert">
        <div className="alert__content">
          <img className="alert__content-arrow" src={arrow} alt="" />
          <p className="alert__content-text">{title}</p>
          <button className="alert__content-close" onClick={onClose}>
            Понятно
          </button>
        </div>
      </div>
    </>
  );
};

export default Alert;
