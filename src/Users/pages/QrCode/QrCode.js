import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserData, useAuth } from "../../../store/auth.reducer";
import image from "../../../img/Exclamation.png";
import "./QrCode.scss";
const QrCode = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      dispatch(getUserData(user.id));
    }
  }, [dispatch, user]);

  return (
    <section className="code">
      <div className="container">
        <div className="code__content">
          <h2 className="login__form-title">Готово!</h2>
          <p className="code__content-subtitle">
            Подождите, происходит генерация вашего QR-кода
          </p>
          <img src={user?.profile_qr_code} alt="" />
          <p className="code__content-code">{user?.wallet_address}</p>
          <p className="code__content-text">
            Мы серьезно относимся к защите ваших данных и не продаем их <br />{" "}
            третьим лицам. Ваша информация используется только для <br />{" "}
            улучшения вашего опыта работы с AYO и хранится в безопасности <br />{" "}
            с помощью шифрования.
          </p>
          <Link to={"/profile"} className="login__form-submit">
            Продолжить
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QrCode;
