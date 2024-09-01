import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Application from "../../../../components/Application/Application";
import edit from "../../../../img/Icons.svg";
import { logout } from "../../../../store/auth.reducer";
import { eventHandler } from "../../../../utils/eventHandlers";
import PhoneInput from "react-phone-input-2";
const initialState = {
  id: "",
  first_name: "",
  last_name: "",
  username: "",
  gender: "",
  age: "",
  email: "",
  phone_number: "",
};

const UserEdit = ({ userData = initialState, onSubmit }) => {
  const [state, setState] = useState(userData);
  const [editFields, setEditFields] = useState({});
  const [phone, setPhone] = useState(state.phone_number);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = eventHandler(setState);
  const toggleEdit = (fieldName) => {
    setEditFields((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };
  const onClick = () => {
    dispatch(logout());
    navigate("/");
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData.id, state);
    window.location.reload();
  };
  // console.log(typeof state.phone_number);

  return (
    <form onSubmit={onFormSubmit}>
      <div className="data__column">
        <div className="data__first">
          <p className="data__first-about">О вас</p>
          <div className="data__first-col">
            <div className="data__first-name">
              {editFields.first_name ? (
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="data__first-input"
                  placeholder="Введите ваше имя"
                  value={state.first_name}
                  onChange={onChange}
                />
              ) : (
                <p>{state.first_name}</p>
              )}
              <button type="button" onClick={() => toggleEdit("first_name")}>
                <span>
                  <img src={edit} alt="" />
                </span>
              </button>
            </div>
            <div className="data__first-name">
              {editFields.last_name ? (
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="data__first-input"
                  placeholder="Введите вашу фамилию"
                  value={state.last_name}
                  onChange={onChange}
                />
              ) : (
                <p>{state.last_name}</p>
              )}
              <button type="button" onClick={() => toggleEdit("last_name")}>
                <span>
                  <img src={edit} alt="" />
                </span>
              </button>
            </div>
            <div className="data__first-name">
              <p>Дата рождения</p>{" "}
              <span>
                <img src={edit} alt="" />
              </span>
            </div>
            <div className="data__first-select">
              <input
                type="radio"
                name="gender"
                checked={state.gender === 1}
                onChange={() => setState({ ...state, gender: 1 })}
              />
              <p className="data-first-gender">Мужчина</p>
              <input
                type="radio"
                name="gender"
                checked={state.gender === 2}
                onChange={() => setState({ ...state, gender: 2 })}
              />
              <p className="data-first-gender">Женщина</p>
            </div>
          </div>
        </div>
        <div className="data__second">
          <p className="data__first-about">Контактные данные</p>
          <div className="data__second-name">
            <p>{state.email}</p>
          </div>
          <div className="data__second-name">
            <p>
              <PhoneInput
                country={"kg"}
                value={phone}
                name="phone_number"
                onChange={(value) =>
                  setState({ ...state, phone_number: value })
                }
                enableAreaCodes={true}
                inputStyle={{
                  border: "none",
                  fontFamily: "PP Neue Machina",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "15.44px",
                  textAlign: "left",
                  outline: "none",
                  // paddingBottom: "10px",
                }}
                buttonStyle={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "white",
                  borderBottom: "1px solid white",
                }}
              />
            </p>
          </div>
        </div>
      </div>
      <button className="data__preference">Предпочтения</button> <br />
      <select className="data__select">
        <option value={"1"}>Не указано</option>
        <option>указано</option>
        <option>!указано</option>
      </select>
      <br />
      <p onClick={onClick} className="data__delete">
        Выйти с аккаунта
      </p>
      <button className="data__save">Сохранить</button>
      <Application />
    </form>
  );
};

export default UserEdit;
