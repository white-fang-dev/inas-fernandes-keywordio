import React, { useState } from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import hamburgerIcon from "./../images/hamburger.svg";
import close from "./../images/close.svg";

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const toggleNavBar = () => {
    setToggleNav((prev) => !prev);
  };
  return (
    <nav className="navigationBar">
      <h2 className="appLogo">APP LOGO</h2>
      <div className={`navLinks ${toggleNav && "activeNavLinks"}`}>
        <NavLink
          onClick={() => setToggleNav(false)}
          to={"/"}
          className="navLink"
        >
          DASHBOARD
        </NavLink>
        <NavLink
          onClick={() => setToggleNav(false)}
          to={"/create-ads"}
          className="navLink"
        >
          CREATE ADS
        </NavLink>
        <img
          onClick={toggleNavBar}
          className="closeBtn"
          src={close}
          alt="close"
        />
      </div>
      <img
        onClick={toggleNavBar}
        src={hamburgerIcon}
        className="hamburgerMenu"
        alt="menu"
      />
    </nav>
  );
};
export default Navigation;
