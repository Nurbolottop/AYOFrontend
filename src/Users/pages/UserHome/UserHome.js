import React, { useEffect } from "react";
import UserFooter from "../../../components/UserFooter/UserFooter";
import QrCode from "../../../img/default_qrcode 1.png";
import certificates from "../../../img/messageEmpty.png";
import Organizations from "../Home/Organizations/Organizations";
import Questions from "../Home/Questions/Questions";
import "./UserHome.scss";
import { getUserData, useAuth } from "../../../store/auth.reducer";
import { useDispatch } from "react-redux";
const UserHome = () => {
  const { user, userData } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData(user.id));
  }, [dispatch]);
  return (
    <>
      <main className="userHome">
        <section className="agency">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <div className="agency__content">
                  <h2 className="agency__content-title">(Организация)</h2>
                  <h4 className="agency__content-subtitle">
                    Lorem ipsum dolor sit amet <br /> consectetur.
                  </h4>
                </div>
              </div>
              <div className="col-3">
                <div className="agency__qr">
                  <div className="showQr__content">
                    <img
                      className="showQr__content-img"
                      src={user?.profile_qr_code}
                      alt=""
                    />
                    <p className="showQr__content-number">
                      {user?.wallet_address}
                    </p>
                    <p className="showQr__content-text">
                      Для оформления заказа <br /> отсканируйте QR-код.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="agency__qr">
                  <div className="showQr__content">
                    <img src={user?.profile_qr_code} alt="" />
                    <p className="showQr__content-number">
                      {user?.wallet_address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="agency__card">
                  <div className="agency__card-row">
                    <h4 className="agency__card-title">Мои сертификаты</h4>
                    <img
                      src={certificates}
                      className="agency__card-img"
                      alt=""
                    />
                  </div>
                  <p className="agency__card-text">
                    У вас пока что нет ни одного <br /> сертификатов
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="agency__card">
                  <div className="agency__card-row">
                    <h4 className="agency__card-title">Сэкономил(а) с AYO</h4>
                    <img
                      src={certificates}
                      className="agency__card-img none"
                      alt=""
                    />
                  </div>
                  <p className="agency__card-total">Общая сумма</p>
                  <div className="agency__card-square">
                    <p className="agency__card-price">0 $</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="agency__card">
                  <div className="agency__card-row">
                    <h4 className="agency__card-title">Мои компании</h4>
                    <img
                      src={certificates}
                      className="agency__card-img"
                      alt=""
                    />
                  </div>
                  <p className="agency__card-text">
                    У вас пока что нет компаний
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Organizations />
        <Questions />
        {/* <Footer /> */}
      </main>
      <UserFooter />
    </>
  );
};

export default UserHome;
