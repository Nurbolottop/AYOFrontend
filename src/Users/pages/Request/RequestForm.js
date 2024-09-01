import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getBusinessAreas,
  getCity,
  getCounty,
  useOrganization,
} from "../../../store/organization.reducer";
import { eventHandler } from "../../../utils/eventHandlers";
import axiosApi from "../../../services/AxiosApi";

const RequestForm = ({ onSubmit }) => {
  const [phone, setPhone] = useState("");
  const [state, setState] = useState({
    name: "",
    lost_name: "",
    email: "",
    phone_number: "",
    company_name: "",
    city: "",
    country: "",
    business_areas: "",
  });

  const { country: countries, city: cities, businessAreas } = useOrganization();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = eventHandler(setState);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = { ...state, phone_number: phone };
    await onSubmit(formData);
    navigate("/expectation");
  };

  useEffect(() => {
    dispatch(getCounty());
    dispatch(getCity());
    dispatch(getBusinessAreas());
  }, [dispatch]);

  return (
    <form onSubmit={onFormSubmit} action="" className="request__form">
      <div className="request__form-row">
        <h2 className="login__form-title">Отправить запрос</h2>
        <div>
          <input
            type="text"
            name="name"
            required
            className="login__form-input"
            placeholder="Имя"
            onChange={onChange}
          />
          <input
            type="text"
            name="lost_name"
            required
            className="login__form-input"
            placeholder="Фамилия"
            onChange={onChange}
          />
        </div>
        <input
          type="email"
          required
          name="email"
          className="login__form-input"
          placeholder="Электронная почта"
          onChange={onChange}
        />
        <PhoneInput
          country={"kg"}
          value={phone}
          name="phone_number"
          onChange={(value) => setPhone(value)}
          enableAreaCodes={true}
          inputStyle={{
            fontFamily: "PP Neue Machina",
            fontSize: "25px",
            fontWeight: "400",
            lineHeight: "24.12px",
            textAlign: "left",
            background: "#ffe1df",
            padding: "38px 25px",
            marginLeft: "40px",
            outline: "none",
            border: "none",
            borderRadius: "10px",
            width: "100%",
          }}
          buttonStyle={{
            fontFamily: "PP Neue Machina",
            fontSize: "25px",
            fontWeight: "400",
            lineHeight: "24.12px",
            textAlign: "left",
            background: "#ffe1df",
            paddingLeft: "20px",
            outline: "none",
            border: "none",
            borderRadius: "10px",
          }}
        />
        <input
          required
          type="text"
          className="login__form-input"
          name="company_name"
          onChange={onChange}
          placeholder="Название компании"
        />
        <select
          name="country"
          id=""
          onChange={onChange}
          className="login__form-input"
        >
          <option>Страна</option>
          {countries.map((country) => {
            return (
              <option value={country.id} key={country.id}>
                {country.title}
              </option>
            );
          })}
        </select>
        <select
          name="city"
          onChange={onChange}
          id=""
          className="login__form-input"
        >
          <option value="1">Город</option>
          {cities.map((city) => {
            return (
              <option value={city.id} key={city.id}>
                {city.title}
              </option>
            );
          })}
        </select>
        <select
          name="business_areas"
          onChange={onChange}
          id=""
          className="login__form-input"
        >
          <option value="1">1</option>
          {businessAreas.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.title}
              </option>
            );
          })}
        </select>
      </div>
      <button className="login__form-submit" type="submit">
        Запросить
      </button>
    </form>
  );
};

export default RequestForm;
