import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import closeIcon from "../../img/icons/closeIcon.svg";
import { getUserData, useAuth } from "../../store/auth.reducer";
import "./ShowQr.scss";
const ShowQr = ({ onClose, isOpen }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      dispatch(getUserData(user.id));
    }
  }, [dispatch, user]);
  if (!isOpen) return null;
  return (
    <>
      <div
        className={isOpen ? "backdrop active" : "backdrop"}
        onClick={onClose}
      />
      <div className={isOpen ? "showQr active" : "showQr"}>
        <span className="showQr__close" onClick={onClose}>
          <img src={closeIcon} alt="" />
        </span>
        <div className="showQr__content">
          <img
            className="showQr__content-img"
            src={user.profile_qr_code}
            alt=""
          />
          <p className="showQr__content-number">{user?.wallet_address}</p>
          <p className="showQr__content-text">
            Для оформления заказа <br /> отсканируйте QR-код.
          </p>
        </div>
      </div>
    </>
  );
};

export default ShowQr;
