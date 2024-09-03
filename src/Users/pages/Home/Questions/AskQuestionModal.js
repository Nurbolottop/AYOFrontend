import React, { useState } from "react";
import ReactDOM from "react-dom";
import closeIcon from "../../../../img/icons/closeIcon.svg";

const AskQuestionModal = ({ isOpen, onClose }) => {
  const [question, setQuestion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__content">
        {!isSubmitted ? (
          <>
            <button className="modal__content-close-btn" onClick={onClose}>
              <img src={closeIcon} alt="" />
            </button>
            <h2 className="modal__title">Задать вопрос</h2>
            <p className="modal__subtitle">
              Напишите вопрос, который вас интересует.
            </p>
            <form onSubmit={handleSubmit} className="modal__form">
              <input
                type="text"
                className="modal__input"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Напишите вопрос"
                required
              />
              <button type="submit" className="modal__submit-button">
                Отправить
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="modal__title">Ваш вопрос отправлен</h2>
            <p className="modal__subtitle">
              Подождите немного.. Мы обрабатываем ваш запрос. Ответ будет готов
              в течение 24 часов. 😊
            </p>
            <button onClick={onClose} className="modal__ok-button">
              Ок
            </button>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};

export default AskQuestionModal;
