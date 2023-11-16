import React from "react";
import "./Nav.css";
import logo from "../Nav/logo.png";

function Nav() {
  return (
    <div className="nav">
      <div className="logoContainer">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="verticalLine"></div>
      <div  className="navname">
        <p>STORIES</p>
      </div>
      <div className="course">
        <button >Courses</button>
      </div>
    </div>
  );
}

export default Nav;
