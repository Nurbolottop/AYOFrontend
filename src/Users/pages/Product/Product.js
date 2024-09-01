import React from "react";
import { useNavigate } from "react-router-dom";
import leftIcon from "../../../img/icons/LEFT.svg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../../img/icons/logoCompany.svg";
import "./Product.scss";
const Product = () => {
  const navigate = useNavigate();
  return (
    <div className="products">
      <div className="container">
        <div className="assortment__head">
          <div className="assortment__back">
            <button
              className="assortment__back-button"
              onClick={() => navigate(-1)}
            >
              <img src={leftIcon} alt="" />
            </button>
            <div className="assortment__back-company">
              <img src={logo} alt="" />
              <h4>(название компании)</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="products__col">
            <Swiper spaceBetween={10} slidesPerView={1}></Swiper>
          </div>
          <div className="products__column"></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
