import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useModal from "../../../hooks/useModal";
import clothes from "../../../img/clothes.png";
import QrImg from "../../../img/default_qrcode 1.png";
import closeIcon from "../../../img/icons/closeIcon.svg";
import exclamation from "../../../img/icons/exclamation.svg";
import leftIcon from "../../../img/icons/LEFT.svg";
import logo from "../../../img/icons/logoCompany.svg";
import nextArrow from "../../../img/icons/nextArrow.svg";
import percent from "../../../img/icons/percent.svg";
import prevArrow from "../../../img/icons/prevArrow.svg";
import qrIcon from "../../../img/icons/qrIcon.svg";
import qrImg from "../../../img/icons/qrImg.svg";
import share from "../../../img/icons/share.svg";
import star from "../../../img/icons/star.svg";
import background from "../../../img/lightBackground.png";
import certificates from "../../../img/messageEmpty.png";
import "./Assortment.scss";
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/components/navigation/navigation.min.css';

const Qr = ({ onClose, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className="backdrop" onClick={onClose} />
      <div className="assortment__qr">
        <button className="assortment__qr-close" onClick={onClose}>
          <img src={closeIcon} alt="" />
        </button>
        <img className="assortment__qr-img" src={QrImg} alt="" />
        <p className="assortment__qr-number">789 456</p>
      </div>
    </div>
  );
};

const Assortment = () => {
  const { modals, openModal, closeModal } = useModal();

  const navigate = useNavigate();
  return (
    <main className="assortment">
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
              <h4>{company_name}</h4>
            </div>
          </div>
          <p className="assortment__head-category">(Категория компании)</p>
        </div>
        <section>
          <div
            style={{ backgroundImage: `url(${background})` }}
            className="assortment__background"
          >
            <div>
              <img src={share} alt="" />
              <img src={exclamation} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="assortment__col">
              <p className="assortment__col-text">
                Lorem ipsum dolor sit amet consectetur. Nibh imperdiet
                pellentesque nisi vulputate quis consectetur lobortis.
              </p>
            </div>
            <div className="assortment__column">
              <button className="assortment__column-button">INSTAGRAM</button>
              <button className="assortment__column-button">TIK TOK</button>
            </div>
          </div>
        </section>
        <section className="cards">
          <div className="row">
            <div className="col-3">
              <div className="cards__card">
                <img className="cards__card-img" src={certificates} alt="" />
                <h4 className="cards__card-title">Приветственные баллы</h4>
                <div className="agency__card-square">
                  <p className="agency__card-price">0 Б</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="cards__card">
                <img src={star} className="cards__card-position" alt="" />
                <h4 className="cards__card-title">Списание баллами</h4>
                <div className="agency__card-square">
                  <p className="agency__card-price">0 %</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="cards__card">
                <img src={percent} className="cards__card-position" alt="" />
                <h4 className="cards__card-title">Кешбек</h4>
                <div className="agency__card-square">
                  <p className="agency__card-price">0 %</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="cards__card">
                <img src={qrImg} className="cards__card-position" alt="" />
                <h4 className="cards__card-title">Код скидики</h4>
                <button
                  className="cards__card-btn"
                  onClick={() => openModal("qrModal")}
                >
                  <img src={qrIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <Qr isOpen={modals["qrModal"]} onClose={() => closeModal("qrModal")} />
        <section className="product">
          <h3 className="product__title">Ассортимент</h3>
          <div className="row">
            <div className="col-6">
              <div className="product__content">
                <div className="product__content-img">
                  <button className="product__content-prev">
                    <img src={prevArrow} alt="" />
                  </button>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{
                      nextEl: ".product__content-next",
                      prevEl: ".product__content-prev",
                    }}
                    modules={[Navigation]}
                  >
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                  <button className="product__content-next">
                    <img src={nextArrow} alt="" />
                  </button>
                </div>
                <div className="product__content-row">
                  <h3 className="product__content-title">(Название товара)</h3>
                  <p className="product__content-price">1600 сом</p>
                </div>
                <p className="product__content-text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="product__content">
                <div className="product__content-img">
                  <button className="product__content-prev">
                    <img src={prevArrow} alt="" />
                  </button>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{
                      nextEl: ".product__content-next",
                      prevEl: ".product__content-prev",
                    }}
                    modules={[Navigation]}
                  >
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                  <button className="product__content-next">
                    <img src={nextArrow} alt="" />
                  </button>
                </div>
                <div className="product__content-row">
                  <h3 className="product__content-title">(Название товара)</h3>
                  <p className="product__content-price">1600 сом</p>
                </div>
                <p className="product__content-text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="product__content">
                <div className="product__content-img">
                  <button className="product__content-prev">
                    <img src={prevArrow} alt="" />
                  </button>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{
                      nextEl: ".product__content-next",
                      prevEl: ".product__content-prev",
                    }}
                    modules={[Navigation]}
                  >
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="product__content-image"
                        src={clothes}
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                  <button className="product__content-next">
                    <img src={nextArrow} alt="" />
                  </button>
                </div>
                <div className="product__content-row">
                  <h3 className="product__content-title">(Название товара)</h3>
                  <p className="product__content-price">1600 сом</p>
                </div>
                <p className="product__content-text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Assortment;
