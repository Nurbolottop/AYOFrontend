import { Column } from "@ant-design/plots";
import React from "react";
import "./Tools.scss";

const Tools = ({ selectedPeriod, data, toggleModal }) => {
  const configColumn = {
    data,
    xField: "month",
    yField: "value",
    slider: {
      x: {
        values: [0.1, 0.2],
      },
    },
    style: {
      color: "#000",
      fill: "#AF251C",
    },
  };
  return (
    <section className="tools container">
      <h1 className="tools__title">Инструменты аналитики</h1>
      <div className="tools__col">
        <div className="tools__col-block1">
          <h2 className="tools__col-title">Количество новых клиентов</h2>
        </div>

        <div className="tools__col-block2">
          <h2 className="tools__col-title">
            Общее кол. кешбека в кошельке у клиентов
          </h2>
        </div>
      </div>
      <div className="tools__column">
        <h2 className="tools__column-title">
          Количество клиентов в общем
          <button onClick={toggleModal}>{selectedPeriod}</button>
        </h2>
        <Column {...configColumn} />
      </div>
    </section>
  );
};

export default Tools;