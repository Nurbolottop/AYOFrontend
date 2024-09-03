import React, { useState, useEffect, useRef, Children } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import changePen from "../../../img/icons/changePenIcon.svg";
import { eventHandler } from "../../../utils/eventHandlers";
import useModal from "../../../hooks/useModal";

const initialState = {
  id: "",
  organization_banner: [],
  name: "",
  lost_name: "",
  email: "",
  true: false,
  phone_number: "",
  company_name: "",
  description: "",
  address: "",
  city: 1,
  country: 1,
  business_areas: 1,
};

const ModalAddress = ({ onClose, isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div className="backdrop" onClick={onClose} />
      {children}
    </div>
  );
};

const DataAgencyEdit = ({ onSubmit, organizationData = initialState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { 0: state, 1: setState } = useState(organizationData);
  const [schedule, setSchedule] = useState({
    from: "09:00",
    to: "18:00",
    startDay: "Пн",
    endDay: "Сб",
  });
  const [editFields, setEditFields] = useState({});
  const [tempSchedule, setTempSchedule] = useState({ ...schedule });
  const popoverRef = useRef(null);

  const togglePopover = () => {
    setTempSchedule({ ...schedule });
    setIsOpen(!isOpen);
  };
  const { modals, openModal, closeModal } = useModal();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScheduleChange = (event) => {
    const { name, value } = event.target;
    setTempSchedule((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setSchedule({ ...tempSchedule });
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const toggleEdit = (fieldName) => {
    setEditFields((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const onChange = eventHandler(setState);
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(organizationData.id, state);
  };

  const [phone, setPhone] = useState(state.phone_number);
  return (
    <form onSubmit={onFormSubmit} action="">
      <div className="DataAgency__block">
        <div className="DataAgency__contactDetails">
          <p className="DataAgency__contactDetails-title">Контактные данные</p>
          <div className="DataAgency__contactDetails-emNum">
            <PhoneInput
              country={"kg"}
              value={phone}
              onChange={(value) => setState({ ...state, phone_number: value })}
              enableAreaCodes={true}
              inputStyle={{
                width: "222px",
                border: "none",
                borderBottom: "1px solid black",
                fontFamily: "PP Neue Machina",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "15.44px",
                textAlign: "left",
                outline: "none",
                paddingBottom: "10px",
                borderRadius: "0",
              }}
              buttonStyle={{
                border: "none",
                outline: "none",
                backgroundColor: "white",
                borderBottom: "1px solid black",
                borderRadius: "0",
              }}
            />
          </div>
          <div className="DataAgency__contactDetails-address DataAgency__margin">
            <p className="DataAgency__contactDetails-text">{state.address}</p>
            <button
              className="DataAgency__button"
              onClick={() => openModal("address")}
            >
              <img src={changePen} alt="" />
            </button>
          </div>
          <div className="DataAgency__contactDetails-address">
            <input
              type="email"
              placeholder="examle35@gmail.com"
              value={state.email}
              onChange={onChange}
              name="email"
              className="DataAgency__contactDetails-emNum__input"
            />
            <button className="DataAgency__button">
              <img src={changePen} alt="" />
            </button>
          </div>
        </div>
        <ModalAddress
          isOpen={modals["address"]}
          onClose={() => closeModal("address")}
        >
          <div className="DataAgency__modal">
            <h3 className="DataAgency__modal-title">
              Добавить ссылку местоположения
            </h3>
            <input
              type="text"
              name="address"
              onChange={onChange}
              value={state.address}
              className="DataAgency__modal-input"
              placeholder="Напишите адрес"
            />
            <input
              type="text"
              className="DataAgency__modal-input"
              placeholder="Вставьте ссылку"
            />
            <div onClick={() => closeModal("address")}>
              <button className="DataAgency__modal-btn firstData" type="button">
                Отмена
              </button>
              <button
                className="DataAgency__modal-btn secondData"
                onClick={onFormSubmit}
                type="submit"
              >
                Ок
              </button>
            </div>
          </div>
        </ModalAddress>
        <div className="DataAgency__companyName">
          <h1 className="DataAgency__companyName-title">Называние компании</h1>
          <div className="DataAgency__companyName-inp">
            <input
              type="text"
              onChange={onChange}
              value={state.company_name}
              placeholder="Компания"
              name="company_name"
              className="DataAgency__companyName-input"
            />
            <button className="DataAgency__button">
              <img src={changePen} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="DataAgency__aboutCompany">
        <h1 className="DataAgency__aboutCompany-title">О компании</h1>
        <div className="DataAgency__aboutCompany-inp">
          <input
            type="text"
            placeholder="Описание компании"
            onChange={onChange}
            name="description"
            value={state.description}
            className="DataAgency__aboutCompany-input"
          />
          <button className="DataAgency__button">
            <img src={changePen} alt="" />
          </button>
        </div>
      </div>
      <div className="DataAgency__category">
        <div className="DataAgency__category-title">
          <select className="">
            <option>Категория 1</option>
            <option>Категория 2</option>
          </select>
        </div>

        <div className="DataAgency__category-inp">
          <input
            type="text"
            value={`${schedule.from} - ${schedule.to}, ${schedule.startDay} - ${schedule.endDay}`}
            readOnly
            style={{ padding: "8px", width: "250px", marginRight: "8px" }}
            className="DataAgency__category-inp__input"
          />
          <div style={{ position: "relative", display: "inline-block" }}>
            {isOpen && (
              <div
                ref={popoverRef}
                style={{
                  position: "absolute",
                  top: "40px",
                  width: "300px",
                  border: "1px solid #AF251C",
                  background: "white",
                  height: "auto",
                  padding: "15px",
                  right: "0",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                  borderRadius: "0",
                  fontFamily: "PP Neue Machina",
                }}
              >
                <h2 style={{ marginBottom: "15px" }}>Время работы</h2>
                <div style={{ marginBottom: "10px" }}>
                  <label style={{}}>
                    От
                    <input
                      type="time"
                      name="from"
                      value={tempSchedule.from}
                      onChange={handleScheduleChange}
                      style={{
                        width: "100px",
                        marginLeft: "10px",
                        padding: "5px",
                        backgroundColor: "#ECECEC",
                        border: "none",
                        borderRadius: "3px",
                      }}
                    />
                  </label>
                  <label>
                    До
                    <input
                      type="time"
                      name="to"
                      value={tempSchedule.to}
                      onChange={handleScheduleChange}
                      style={{
                        width: "100px",
                        marginLeft: "10px",
                        padding: "5px",
                        backgroundColor: "#ECECEC",
                        border: "none",
                        borderRadius: "3px",
                      }}
                    />
                  </label>
                </div>
                <h2 style={{ marginBottom: "15px" }}>Дни работы</h2>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ marginRight: "10px" }}>
                    От
                    <select
                      name="startDay"
                      value={tempSchedule.startDay}
                      onChange={handleScheduleChange}
                      style={{
                        width: "100px",
                        marginLeft: "10px",
                        padding: "5px",
                        backgroundColor: "#ECECEC",
                        border: "none",
                        borderRadius: "3px",
                      }}
                    >
                      <option value="Пн">ПН</option>
                      <option value="Вт">ВТ</option>
                      <option value="Ср">СР</option>
                      <option value="Чт">ЧТ</option>
                      <option value="Пт">ПТ</option>
                      <option value="Сб">СБ</option>
                      <option value="Вс">ВС</option>
                    </select>
                  </label>
                  <label>
                    До
                    <select
                      name="endDay"
                      value={tempSchedule.endDay}
                      onChange={handleScheduleChange}
                      style={{
                        width: "100px",
                        padding: "5px",
                        backgroundColor: "#ECECEC",
                        border: "none",
                        borderRadius: "3px",
                      }}
                    >
                      <option value="Пн">ПН</option>
                      <option value="Вт">ВТ</option>
                      <option value="Ср">СР</option>
                      <option value="Чт">ЧТ</option>
                      <option value="Пт">ПТ</option>
                      <option value="Сб">СБ</option>
                      <option value="Вс">ВС</option>
                    </select>
                  </label>
                </div>
                <div style={{ textAlign: "right" }}>
                  <button
                    onClick={handleCancel}
                    style={{
                      width: "127px",
                      height: "50px",
                      backgroundColor: "#AF251C",
                      color: "#fff",
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "3px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Отменить
                  </button>
                  <button
                    onClick={handleSave}
                    style={{
                      width: "127px",
                      height: "50px",
                      backgroundColor: "#FF5757",
                      color: "#fff",
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Ок
                  </button>
                </div>
              </div>
            )}

            <button className="DataAgency__button" onClick={togglePopover}>
              <img src={changePen} alt="" />
            </button>
          </div>
          <hr />
        </div>
      </div>
      <div className="DataAgency__socialContacts">
        <h1 className="DataAgency__socialContacts-title">соцети</h1>
        <div className="DataAgency__socialContacts-con">
          <div className="DataAgency__socialContacts-con__block">Добавить</div>
          <div className="DataAgency__socialContacts-con__block">Добавить</div>
          <div className="DataAgency__socialContacts-con__block">Добавить</div>
          <div className="DataAgency__socialContacts-con__block">+</div>
        </div>
      </div>
      <button className="DataAgency__btn">Сохранить</button>
    </form>
  );
};

export default DataAgencyEdit;
