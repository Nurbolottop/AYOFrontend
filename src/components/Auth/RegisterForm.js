import React, { useState, useEffect } from "react";
import google from "../../img/icons/google.svg";
import facebook from "../../img/icons/facebook.svg";
import telegram from "../../img/icons/telegram.svg";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce"; // импортируйте useDebounce
import { eventHandler } from "../../utils/eventHandlers";

const RegisterForm = ({ onSubmit, setEmail }) => {
  const navigate = useNavigate();
  const { 0: state, 1: setState } = useState({
    username: "",
    first_name: "",
    email: "",
  });
  const onChange = eventHandler(setState);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(state);
    localStorage.setItem("email", state.email);
    navigate("/confirm");
  };

  return (
    <form className="register__form" onSubmit={onFormSubmit}>
      <h2 className="login__form-title">Регистрация</h2>
      <div>
        <input
          type="text"
          name="username"
          className="login__form-input"
          placeholder="Имя"
          onChange={onChange}
        />
        <input
          type="text"
          name="first_name"
          className="login__form-input"
          placeholder="Фамилия"
          onChange={onChange}
        />
      </div>
      <input
        type="email"
        name="email"
        className="login__form-input"
        placeholder="Электронная почта"
        onChange={onChange}
      />
      <button className="login__form-enter">
        Войти с помощью{" "}
        <span>
          <img src={google} alt="" />
        </span>
      </button>
      <button className="login__form-enter">
        Войти с помощью{" "}
        <span>
          <img src={facebook} alt="" />
        </span>
      </button>
      <button className="login__form-enter">
        Войти с помощью{" "}
        <span>
          <img src={telegram} alt="" />
        </span>
      </button>
      <button className="login__form-submit">Создать</button>
    </form>
  );
};

export default RegisterForm;

// import React, { useState } from "react";
// import google from "../../img/icons/google.svg";
// import facebook from "../../img/icons/facebook.svg";
// import telegram from "../../img/icons/telegram.svg";
// import { useNavigate } from "react-router-dom";
// const RegisterForm = ({ onSubmit }) => {
//   const navigate = useNavigate();
//   const { 0: state, 1: setState } = useState({
//     username: "",
//     first_name: "",
//     email: "",
//   });
//   const email = state.email;
//   console.log(email);

//   const onChange = (e) => {
//     const { value, name } = e.target;
//     setState((prev) => ({ ...prev, [name]: value }));
//   };
//   const onFormSubmit = async (e) => {
//     // debugger;
//     e.preventDefault();
//     await onSubmit(state);
//     navigate("/");
//   };
//   return (
//     <form className="register__form" onSubmit={onFormSubmit}>
//       <h2 className="login__form-title">Регистрация</h2>
//       <div>
//         <input
//           type="text"
//           name="username"
//           className="login__form-input"
//           placeholder="Имя"
//           onChange={onChange}
//         />
//         <input
//           type="text"
//           name="first_name"
//           className="login__form-input"
//           placeholder="Фамилия"
//           onChange={onChange}
//         />
//       </div>
//       <label className="login__form-label">Не верная эл.почта</label>
//       <input
//         type="email"
//         name="email"
//         className="login__form-input"
//         placeholder="Электронная почта"
//         onChange={onChange}
//       />
//       <button className="login__form-enter">
//         Войти с помощью{" "}
//         <span>
//           <img src={google} alt="" />
//         </span>
//       </button>
//       <button className="login__form-enter">
//         Войти с помощью{" "}
//         <span>
//           <img src={facebook} alt="" />
//         </span>
//       </button>
//       <button className="login__form-enter">
//         Войти с помощью{" "}
//         <span>
//           <img src={telegram} alt="" />
//         </span>
//       </button>
//       <button className="login__form-submit">Создать</button>
//     </form>
//   );
// };

// export default RegisterForm;
