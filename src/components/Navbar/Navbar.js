import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "./Navbar.css";

const Navbar = ({
  blurContent,
  blur,
  login,
  changeLogin,
  auth,
  changeAuth,
  changeEvents,
}) => {
  const [navOpen, toggleNav] = useState(true);
  const toggle = () => {
    toggleNav(!navOpen);
    blurContent(!blur);
  };
  const log = () => {
    if (!login) {
      changeAuth(true);
    } else {
      // Reset events to empty after user has logged out
      changeEvents([]);
      changeLogin(false);
    }
  };
  return (
    <div className="navbar">
      <div className="logo-container">
        <div className="logo"></div>
      </div>
      <div className={navOpen ? "options-container" : "sidebar"}>
        <div className="nav-item transform-color">Search</div>
        <div className="nav-item transform-color">Learn More</div>
        <div className="nav-item transform-color">FAQ</div>
        <div className="login-button">
          <div className="login-button-text" onClick={() => log()}>
            {login ? "Logout" : "Login"}
          </div>
        </div>
      </div>
      <div className="hamburger" onClick={() => toggle()}>
        {navOpen ? (
          <MenuIcon style={{ color: "black" }} />
        ) : (
          <CloseIcon style={{ color: "black" }} />
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
