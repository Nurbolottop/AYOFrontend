import React from "react";
import LoginForm from "../../../components/Auth/LoginForm";
import "./LogIn.scss";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../store/auth.reducer";
const LogIn = () => {
  const dispatch = useDispatch();
  const onSubmit = async (credentials) => {
    try {
      const response = await dispatch(userLogin(credentials)).unwrap();
      return response;
    } catch (error) {
      throw error;
    }
  };
  return (
    <section className="login">
      <LoginForm onSubmit={onSubmit} />
    </section>
  );
};

export default LogIn;
