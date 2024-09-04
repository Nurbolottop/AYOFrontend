import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Expectation.scss";
import {
  getItemOrganization,
  useOrganization,
} from "../../store/organization.reducer";

const Expectation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { organizationData, organization } = useOrganization();

  const checkOrganizationStatus = useCallback(() => {
    if (organizationData?.true) {
      navigate("/confirmed");
    }
  }, [organizationData, navigate]);

  useEffect(() => {
    if (organization && organization.id) {
      dispatch(getItemOrganization(organization.id));
    }
  }, [dispatch, organization]);

  useEffect(() => {
    checkOrganizationStatus();
  }, [organizationData, checkOrganizationStatus]);

  return (
    <section className="expectation">
      <div className="container">
        <h2 className="expectation__title">Идёт подтверждение</h2>
        <p className="expectation__wait">Пожалуйста, проверьте почту...</p>
        {/* <div className="loader"></div> */}
      </div>
    </section>
  );
};

export default Expectation;
