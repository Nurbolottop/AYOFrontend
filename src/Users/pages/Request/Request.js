import React from "react";

import { useDispatch } from "react-redux";
import { organizationRequest } from "../../../store/organization.reducer";
import "./Request.scss";
import RequestForm from "./RequestForm";
const Request = () => {
  const dispatch = useDispatch();
  const onSubmit = (credentials) => {
    dispatch(organizationRequest(credentials));
  };
  return (
    <section className="request">
      <div className="container">
        <RequestForm onSubmit={onSubmit} />
      </div>
    </section>
  );
};

export default Request;
