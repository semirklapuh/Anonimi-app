import React, { useState, useEffect, useRef } from "react";
import "./style.css";

import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

import { RiAccountCircleFill } from "react-icons/ri";

export default function NavigationBar() {
  // const [token, setToken] = useState("");
  // const [log, setLog] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("user") !== null) {
  //     setToken(localStorage.getItem("user"));
  //     setLog(true);
  //   }
  // }, []);

  function onButtonClick() {
    // setToken();
    // setLog(false);
    // localStorage.clear("user");

    console.log("Upgrade account button");
  }

  function onAccountIconClick() {
    console.log("Account icon click");
  }

  return (
    <>
      <Navbar
        bg="black"
        variant="dark"
        className="navigation-container"
        style={{ padding: "0" }}>
        <Navbar.Brand as={Link} to="/" className="navigation-brand">
          <img
            alt=""
            src={logo}
            width="40"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <p className="navigation-brand-txt">ANONIMI</p>
        </Navbar.Brand>
        <div className="account">
          <div className="Button-div">
            <button className="button" onClick={onButtonClick}>
              Upgrade plan
            </button>
          </div>
          <div className="account-icon">
            <RiAccountCircleFill
              style={{ height: "2rem", width: "2rem"}}
              onClick={onAccountIconClick}
            />
          </div>
        </div>
      </Navbar>
    </>
  );
}
