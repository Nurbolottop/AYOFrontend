import React, { useState } from "react";
import Application from "../../../../components/Application/Application";
import logo from "../../../../img/LogoNotice.svg";
import image from "../../../../img/image.png";
import ActiveCertificates from "./ActiveCertificates/ActiveCertificates";
import Archive from "./Archive/Archive";
import "./Certificates.scss";
const Certificates = () => {
  const [tab, setTab] = useState("active");
  let section = <ActiveCertificates />;
  switch (tab) {
    case "active": {
      section = <ActiveCertificates />;
      break;
    }
    case "archive": {
      section = <Archive />;
      break;
    }
  }
  const orders = [
    {
      id: 1,
      title: "Организация",
      text: "Lorem ipsum dolor sit amet consectetur.Bibendum lacus orci sagittis vitae tristique massa.",
      date: "06/09/2024",
      status: "Активные",
      logo: logo,
      image: image,
    },
    {
      id: 2,
      title: "Организация",
      text: "Lorem ipsum dolor sit amet consectetur.Bibendum lacus orci sagittis vitae tristique massa.",
      date: "06/09/2024",
      status: "Активные",
      logo: logo,
      image: image,
    },
  ];
  return (
    <div className="certificates">
      <h2 className="data__title">Мои сертификаты</h2>
      <div className="certificates__btns">
        <button
          className="certificates__btns-first"
          onClick={() => setTab("active")}
        >
          Активные
        </button>
        <button
          className="certificates__btns-last"
          onClick={() => setTab("archive")}
        >
          Архив
        </button>
      </div>
      {section}
      <Application />
    </div>
  );
};

export default Certificates;
