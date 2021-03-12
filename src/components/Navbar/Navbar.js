import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "./Navbar.css";

const Navbar = (props) => {
  const [navOpen, toggleNav] = useState(true);
  const toggle = () => {
    toggleNav(!navOpen);
    props.blurContent(!props.blur);
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
          <div className="github-logo"></div>
          <div className="login-button-text">Login</div>
        </div>
      </div>
      <div className="hamburger" onClick={() => toggle()}>
        {navOpen ? <MenuIcon /> : <CloseIcon />}
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
