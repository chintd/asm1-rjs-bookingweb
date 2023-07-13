import { useState } from "react";
import styles from "./Home.module.css";
import NavBarItem from "./NavBarItem";
import HomePageHeader from "./HomePageHeader.jsx";
import navBarArray from "../../data/navBar";
import city from "../../data/city";
import hotelType from "../../data/type";
import CityListHomePage from "./CityListHomePage";
import HotelListHomePage from "./HotelListHomePage";
import HotelLists from "../../data/hotel_list";
import HomeGuest from "./HomesGuest";
import Register from "./signin-register/Register";
import FooterValue from "../../data/footer";
import Footer from "./Footer";
const Home = (props) => {
  // them cac component vao trang home page va gan props
  return (
    <div>
      {/* // navbar component */}
      <nav className={styles.navbar}>
        <div className={styles["nav-head"]}>
          <h3>Booking Website</h3>
          <button id="register-btn" type="button">
            Register
          </button>
          <button id="login-btn" type="button">
            Login
          </button>
        </div>
        <NavBarItem items={navBarArray} />
      </nav>
      <HomePageHeader />
      <CityListHomePage cityArr={city} />
      <HotelListHomePage hotelLists={hotelType} />
      <HomeGuest homeArr={HotelLists} />
      <Register />
      <Footer footerArr={FooterValue} />
    </div>
  );
};

export default Home;
