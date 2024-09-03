import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import leftIcon from "../../../../img/icons/LEFT.svg";
import rigthIcon from "../../../../img/icons/right.svg";
import organizationsImg1 from "../../../../img/organization1.png";
import {
  getOrganization,
  useOrganization,
} from "../../../../store/organization.reducer";

const Card = ({ item }) => (
  <Link to={"/Assortment"}>
    <div
      className="carousel__card"
      style={{ backgroundImage: `url(${organizationsImg1})` }}
      key={item.id}
    >
      <div className="carousel__title">{item.company_name}</div>
    </div>
  </Link>
);

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const randomClassId = (Math.random() * 1000).toFixed();
  const handleNext = () => {
    setIndex((index + 1) % items.length);
  };

  const handlePrev = () => {
    setIndex((index - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <div className="carousel__navigation">
        <button
          className={"carousel__button carousel__button-next" + randomClassId}
        >
          {<img src={leftIcon} alt="" />}
        </button>
        <button
          className={"carousel__button carousel__button-prev" + randomClassId}
        >
          {<img src={rigthIcon} alt="" />}
        </button>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          nextEl: ".carousel__button-prev" + randomClassId,
          prevEl: ".carousel__button-next" + randomClassId,
        }}
        modules={[Navigation]}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          720: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 2.1,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 2.6,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Org = () => {
  const dispatch = useDispatch();
  const { organizations } = useOrganization();
  const filterOrganizations = organizations.filter((organization) => {
    return organization.true;
  });

  useEffect(() => {
    dispatch(getOrganization());
  }, [dispatch]);
  return (
    <div className="Org container">
      <section className="Org__section">
        <h2 className="Org__section-title">Организации</h2>
        <Carousel items={filterOrganizations} />
      </section>
      <section className="Org__section">
        <h2 className="Org__section-title">Рекомендуемые организации</h2>
        <Carousel items={filterOrganizations} />
      </section>
    </div>
  );
};

export default Org;
