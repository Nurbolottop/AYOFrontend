import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import UserHeader from "./components/Header/UserHeader";
import { setUser, useAuth } from "./store/auth.reducer";
import Assortment from "./Users/pages/Assortment/Assortment";
import Cert from "./Users/pages/Cert/Cert";
import Company from "./Users/pages/Company/Company";
import Confirm from "./Users/pages/Confirm/Confirm";
import Home from "./Users/pages/Home/Home";
import LogIn from "./Users/pages/LogIn/LogIn";
import Product from "./Users/pages/Product/Product";
import Profile from "./Users/pages/Profile/Profile";
import ProfileAgency from "./Organizations/ProfileAgency/ProfileAgency";
import QrCode from "./Users/pages/QrCode/QrCode";
import Register from "./Users/pages/Register/Register";
import Request from "./Users/pages/Request/Request";
import UserHome from "./Users/pages/UserHome/UserHome";
import Expectation from "./Organizations/Expectation/Expectation";
import Confirmed from "./Organizations/Confirmed/Confirmed";
import "./style/style.scss";
import { setOrganization, useOrganization } from "./store/organization.reducer";
import OrganizationConfirm from "./Organizations/OrganizationConfirm/OrganizationConfirm";
const App = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  // const { organization } = useOrganization();
  const [tab, setTab] = useState("user");
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("email") || "";
  });

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    const organization = JSON.parse(
      window.localStorage.getItem("organization")
    );
    dispatch(setUser(user));
    dispatch(setOrganization(organization));
  }, []);

  return (
    <BrowserRouter>
      {Boolean(user) ? <UserHeader tab={tab} setTab={setTab} /> : <Header />}
      <Routes>
        <Route path="/" element={Boolean(user) ? <UserHome /> : <Home />} />
        {user && (
          // добавьте сюда те страници если оно используются после регистрации пользователя
          <React.Fragment>
            <Route path="/user" element={<UserHome />} />
            <Route
              path="/profile"
              element={<Profile user={user} tab={tab} setTab={setTab} />}
            />
          </React.Fragment>
        )}
        {!user && (
          // а сюда если пользователь не зарегистрирован
          <React.Fragment>
            <Route
              path="/confirm"
              element={<Confirm email={email} setEmail={setEmail} />}
            />
            <Route
              path="/login"
              element={<LogIn email={email} setEmail={setEmail} />}
            />
            <Route
              path="/register"
              element={<Register email={email} setEmail={setEmail} />}
            />
          </React.Fragment>
        )}
        <Route path="/profileAgency" element={<ProfileAgency />} />

        <Route path="/request" element={<Request />} />

        <Route path="/Mycert" element={<Cert />} />
        <Route path="/Mycompany" element={<Company />} />
        <Route path="/Assortment" element={<Assortment />} />
        <Route path="/product" element={<Product />} />
        <Route path="/qr" element={<QrCode />} />
        <Route path="/expectation" element={<Expectation />} />
        <Route path="/confirmed" element={<Confirmed />} />
        <Route path="/OrConfirm" element={<OrganizationConfirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
