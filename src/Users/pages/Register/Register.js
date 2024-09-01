import React from "react";
import RegisterForm from "../../../components/Auth/RegisterForm";
import "./Register.scss";
import { useDispatch } from "react-redux";
import { userRegister } from "../../../store/auth.reducer";
const Register = ({ setEmail }) => {
  const dispatch = useDispatch();
  const onSubmit = (credentials) => {
    dispatch(userRegister(credentials));
  };
  return (
    <section className="register">
      <RegisterForm onSubmit={onSubmit} setEmail={setEmail} />
    </section>
  );
};

export default Register;
