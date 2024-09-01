import React from "react";
import empty from "../../../../../img/messageEmpty.png";
import logo from "../../../../../img/LogoNotice.svg";
import image from "../../../../../img/icons/Rectangle 4443.png";
const Archive = () => {
  const orders = [
    {
      id: 1,
      title: "Организация",
      text: "Lorem ipsum",
      date: "06/09/2024",
      status: "Архив",
      logo: logo,
      image: image,
    },
    {
      id: 2,
      title: "Организация",
      text: "Lorem ipsum",
      date: "06/09/2024",
      status: "Архив",
      logo: logo,
      image: image,
    },
  ];
  return (
    <>
      {orders.length === 0 ? (
        <div>
          <p className="notice__notnotice">
            У вас пока что нет сертификатов в архиве
          </p>
          <img className="notice__img" src={empty} alt="" />
          <button className="data__save">Главная</button>
        </div>
      ) : (
        <>
          {orders.map((order) => {
            return (
              <div className="certificates__content" key={order.id}>
                <div className="certificates__content-head">
                  <img src={order.logo} alt="" />
                  <p className="certificates__content-title">{order.title}</p>
                  <p className="certificates__content-subtitle">{order.text}</p>
                  <p className="certificates__content-bold">{order.status}</p>
                </div>
                <div className="certificates__content-body">
                  <img
                    className="certificates__content-img"
                    src={order.image}
                    alt=""
                  />
                  <p className="certificates__content-subtitle">{order.text}</p>
                  <p className="certificates__content-title">{order.title}</p>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Archive;
