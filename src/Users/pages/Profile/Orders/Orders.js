import React from "react";
import logo from "../../../../img/LogoNotice.svg";
import image from "../../../../img/image.png";
import empty from "../../../../img/Exclamation.png";
import Application from "../../../../components/Application/Application";
import "./Orders.scss";
const Orders = () => {
  const orders = [
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
  return (
    <div className="orders">
      <h2 className="data__title">Мои заказы</h2>
      {orders.length === 0 ? (
        <div>
          <p className="notice__notnotice">Вы еще ничего не заказали</p>
          <img className="notice__img" src={empty} alt="" />
          <button className="data__save">Главная</button>
        </div>
      ) : (
        <>
          {orders.map((order) => {
            return (
              <div className="notice__content" key={order.id}>
                <div className="notice__content-head">
                  <img src={order.logo} alt="" />
                  <div>
                    <h3 className="notice__content-title">{order.title}</h3>
                    <div>
                      <p className="notice__content-date">{order.date}</p>
                      <p className="notice__content-date">09:30 ам</p>
                    </div>
                  </div>
                </div>
                <div className="notice__content-body">
                  <img
                    className="notice__content-img"
                    src={order.image}
                    alt=""
                  />
                  <div>
                    <p className="notice__content-text">{order.text}</p>
                    <button className="orders__btn">Завершен</button>
                  </div>
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

export default Orders;
