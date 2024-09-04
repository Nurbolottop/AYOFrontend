import React from "react";
import Banner from "./Banner/Banner";
import Shop from "./Shop/Shop";
import Organizations from "./Organizations/Organizations";
import Questions from "./Questions/Questions";
import ModalHome from "../../../components/ModalHome/ModalHome";
import useModal from "../../../hooks/useModal";
// import Footer from "../../../../components/Footer/Footer";
import Footer from "../../../components/Footer/Footer";
import "./Home.scss";
import "./MediaHome.scss";
import searchIcon from "../../../img/icons/searchIcon.svg";
import logo from "../../../img/icons/humanLowLogo.svg";
import search from "../../../img/ion_search-outline.png";

const Home = () => {
  return (
    <React.Fragment>
      <main className="home">
        <Banner />
        <Shop />
        <Organizations />
        <Questions />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
