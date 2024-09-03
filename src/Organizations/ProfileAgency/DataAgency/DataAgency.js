import React, { useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import { useDispatch } from "react-redux";
import {
  getItemOrganization,
  organizationEdit,
  useOrganization,
} from "../../../store/organization.reducer";
import "./DataAgency.scss";
import DataAgencyEdit from "./DataAgencyEdit";

const DataAgency = () => {
  const dispatch = useDispatch();
  const { organizationData, organization } = useOrganization();
  const onSubmit = (id, state) => {
    dispatch(organizationEdit({ id, editData: state }));
  };
  useEffect(() => {
    if (organization && organization.id) {
      dispatch(getItemOrganization(organization.id));
    }
  }, [dispatch, organization]);
  return (
    <section className="DataAgency ">
      <h1 className="DataAgency__title">Данные компании</h1>
      {organizationData && (
        <DataAgencyEdit
          onSubmit={onSubmit}
          organizationData={organizationData}
        />
      )}
    </section>
  );
};
export default DataAgency;
