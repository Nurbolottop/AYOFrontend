import React, { useState } from "react";
import leftIcon from "../../../img/icons/LEFT.svg";
import logoIcon from "../../../img/LogoNotice.svg";
import background from "../../../img/lightBackground.png";
import none from "../../../img/company.png";

import "./Company.scss";
const Company = () => {
  const [companyTab, setCompanyTab] = useState("back");
  let section;
  const orders = [
    {
      id: 1,
      title: "Организация",
      text: "Lorem ipsum dolor sit amet consectetur.Bibendum lacus orci sagittis vitae tristique massa.",
      date: "06/09/2024",
      status: "Активные",
      logo: logoIcon,
      image: background,
    },
    {
      id: 2,
      title: "Организация",
      text: "Lorem ipsum dolor sit amet consectetur.Bibendum lacus orci sagittis vitae tristique massa.",
      date: "06/09/2024",
      status: "Активные",
      logo: logoIcon,
      image: background,
    },
  ];
  switch (companyTab) {
    case "back": {
      section = orders.map((item) => {
        return (
          <div className="col-6">
            <div className="company__content">
              <div className="company__content-head">
                <div>
                  <img src={logoIcon} alt="" />
                  <h3 className="company__content-title">(организация)</h3>
                </div>
              </div>
              <img className="company__content-img" src={background} alt="" />
            </div>
          </div>
        );
      });
      break;
    }
    case "archive": {
      section = orders.map((item) => {
        return (
          <div className="col-6">
            <div className="company__content">
              <div className="company__content-head">
                <div>
                  <img src={logoIcon} alt="" />
                  <h3 className="company__content-title">(организация)</h3>
                </div>
                <p className="company__content-status">Архив</p>
              </div>
              <img className="company__content-img" src={background} alt="" />
            </div>
          </div>
        );
      });
      break;
    }
  }

  return (
    <section className="company">
      <div className="container">
        <div className="company__head">
          <h2 className="company__head-title">Мои компании</h2>
          <div className="company__head-buttons">
            <button
              onClick={() => setCompanyTab("archive")}
              className="company__head-last"
            >
              Архив
            </button>
            {orders.length === 0 ? (
              ""
            ) : (
              <button
                onClick={() => setCompanyTab("back")}
                className="company__head-first"
              >
                <img src={leftIcon} alt="" />
              </button>
            )}
          </div>
        </div>
        {orders.length === 0 ? (
          <div className="company__none">
            <p className="company__none-text">
              У вас пока что нет добавленных компаний!
            </p>
            <img src={none} alt="" />
          </div>
        ) : (
          <div className="row">{section}</div>
        )}
      </div>
    </section>
  );
};

export default Company;
