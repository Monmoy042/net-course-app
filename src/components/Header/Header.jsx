import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../images/netSchoolLogo2.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <NavLink to="/home">
            <img className="logo" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="col-md-12 menubar">
          <nav className="navbar">
            <NavLink className="navbar-item" to="/">
              Home
            </NavLink>
            <NavLink className="navbar-item" to="/about">
              About
            </NavLink>
            <NavLink className="navbar-item" to="/courses">
              Courses
            </NavLink>
            <NavLink className="navbar-item" to="/contact">
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
