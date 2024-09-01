import React from "react";
import { Link } from "react-router-dom";

const Application = () => {
  return (
    <div className="data__application">
      <p className="data__application-text">
        Хотите, чтобы ваша компания тоже была в AYO?
      </p>
      <Link className="data__save" to={"/request"}>
        Откликнуться
      </Link>
    </div>
  );
};

export default Application;
