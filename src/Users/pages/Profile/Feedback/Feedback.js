import React from "react";
import "./Feedback.scss";
import Questions from "../../Home/Questions/Questions";
const Feedback = () => {
  return (
    <div className="feedback">
      <h2 className="data__title">Обратная связь</h2>
      <Questions />
    </div>
  );
};

export default Feedback;
