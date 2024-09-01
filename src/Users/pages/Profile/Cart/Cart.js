import React from "react";
import image from "./image.png";
import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cart">
      <h2 className="data__title">Моя корзина</h2>
      <div className="cart__content">
        <div className="cart__content-item">
          <div className="cart__content-row">
            <img src={image} className="cart__content-img" alt="" />
            <div className="cart__content-col">
              <div>
                <h3 className="cart__content-title">Название товара</h3>
                <p className="cart__content-text">Информация о товаре</p>
              </div>
              <p className="cart__content-price">1600 сом</p>
            </div>
          </div>
          <div className="cart__content-count">
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>
        </div>
        <div className="cart__content-item">
          <div className="cart__content-row">
            <img src={image} className="cart__content-img" alt="" />
            <div className="cart__content-col">
              <div>
                <h3 className="cart__content-title">Название товара</h3>
                <p className="cart__content-text">Информация о товаре</p>
              </div>
              <p className="cart__content-price">1600 сом</p>
            </div>
          </div>
          <div className="cart__content-count">
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>
        </div>
        <div className="cart__content-item">
          <div className="cart__content-row">
            <img src={image} className="cart__content-img" alt="" />
            <div className="cart__content-col">
              <div>
                <h3 className="cart__content-title">Название товара</h3>
                <p className="cart__content-text">Информация о товаре</p>
              </div>
              <p className="cart__content-price">1600 сом</p>
            </div>
          </div>
          <div className="cart__content-count">
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>
        </div>
        <button className="cart__content-total">
          <p>Оформить заказ</p>
          <p>на сумму: 1390 $</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
