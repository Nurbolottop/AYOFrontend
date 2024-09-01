import React, { useState } from "react";
import AskQuestionModal from "./AskQuestionModal";
import UpArrow from "../../../../img/icons/UpArrow.svg";
import DownArrow from "../../../../img/icons/DownArrow.svg";

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const questions = [
    {
      question: "Что такое кешбэк?",
      answer:
        "Кешбэк позволяет вам вернуть часть денег, потраченных на покупки, что делает шоппинг более выгодным.",
    },
    {
      question: "Как работает кешбэк?",
      answer:
        "Кешбэк позволяет вам вернуть часть денег, потраченных на покупки, что делает шоппинг более выгодным.",
    },
    {
      question: "С какими магазинами сотрудничает ваш сайт?",
      answer:
        "Кешбэк позволяет вам вернуть часть денег, потраченных на покупки, что делает шоппинг более выгодным.",
    },
    {
      question: "Как я могу вывести свои деньги?",
      answer:
        "Кешбэк позволяет вам вернуть часть денег, потраченных на покупки, что делает шоппинг более выгодным.",
    },
    {
      question: "Как я могу сделать покупку через ваш сайт?",
      answer:
        "Кешбэк позволяет вам вернуть часть денег, потраченных на покупки, что делает шоппинг более выгодным.",
    },
    {
      question: "Как долго ждать кешбек?",
      answer:
        "Кешбэк позволяет вам вернуть часть денег, потраченных на покупки, что делает шоппинг более выгодным.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="faq container">
      <h1 className="faq__title">Часто задаваемые вопросы</h1>
      {questions.map((item, index) => (
        <div key={index} className="faq__item">
          <div className="faq__question" onClick={() => toggleQuestion(index)}>
            {item.question}
            <button className="faq__toggle" id="arrow">
              {openQuestion === index ? (
                <img src={UpArrow} alt="" />
              ) : (
                <img src={DownArrow} alt="" />
              )}
            </button>
            </div>
            <div
              className={`faq__answer ${
              openQuestion === index && "faq__answer-open"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
      <button className="faq__ask-button" onClick={() => setIsModalOpen(true)}>
        Задать вопрос
      </button>
      <AskQuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Questions;
