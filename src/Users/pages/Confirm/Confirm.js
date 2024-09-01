import React from "react";
import "./Confirm.scss";
import ConfirmForm from "../../../components/Auth/ConfirmForm";
import { ConfirmUser } from "../../../store/auth.reducer";
import { useDispatch } from "react-redux";

const Confirm = ({ email }) => {
  const dispatch = useDispatch();

  const onSubmit = async (credentials) => {
    try {
      const response = await dispatch(ConfirmUser(credentials)).unwrap();
      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="confirm">
      <div className="container">
        <ConfirmForm email={email} onSubmit={onSubmit} />
      </div>
    </section>
  );
};

export default Confirm;
