import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  editUserData,
  getUserData,
  useAuth,
} from "../../../../store/auth.reducer";
import UserEdit from "./UserEdit";
import "./Data.scss";

const Data = () => {
  const dispatch = useDispatch();
  const { userData, user } = useAuth();
  const onSubmit = (id, state) => {
    dispatch(editUserData({ id, editData: state }));
  };
  useEffect(() => {
    dispatch(getUserData(user.id));
    // userData && setState(userData);
  }, [dispatch, user.id]);

  return (
    <div className="data">
      <h2 className="data__title">Личные данные</h2>
      {userData && <UserEdit onSubmit={onSubmit} userData={userData} />}
    </div>
  );
};

export default Data;
