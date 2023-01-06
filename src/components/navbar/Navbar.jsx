import React, { useState, useEffect, useRef } from "react";
import "./style.css";

import { Nav, NavDropdown, Container, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";

import { ButtonGroup, Dropdown } from "react-bootstrap";

import { NavLink, Link } from "react-router-dom";

export default function NavigationBar() {
  const [token, setToken] = useState("");
  const [log, setLog] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setToken(localStorage.getItem("user"));
      setLog(true);
    }
  }, []);

  function onClick() {
    setToken();
    setLog(false);
    localStorage.clear("user");
  }

  const handleClickScroll1 = () => {
    const element = document.getElementById("industries-section");
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <>
      <Navbar bg="black" variant="dark" className="navigation-container">
        <Container>
          <Navbar.Brand href="home" className="navigation-brand">
            <img alt="" src={logo} width="40" height="30" className="d-inline-block align-top" />{" "}
            <p className="navigation-brand-txt">ANONIMI</p>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-center centered-nav">
            <Nav>
              <NavDropdown title="Product" id="basic-nav-dropdown" className="centered-nav-item">
                <NavDropdown.Item href="anonimi-features">Features overview</NavDropdown.Item>
                <NavDropdown.Item href="anonimi-platform">Anonimi platform</NavDropdown.Item>
                <NavDropdown.Item href="about-ai">Face anonymization</NavDropdown.Item>
                <NavDropdown.Item href="about-ai">Licence plates detection</NavDropdown.Item>
                <NavDropdown.Item href="anonimi-platform">Watermarks</NavDropdown.Item>
                <NavDropdown.Item href="anonimi-features">Api access</NavDropdown.Item>
                <Dropdown.Divider />
                <NavDropdown.Item href="home">Showcase</NavDropdown.Item>
                <NavDropdown.Item href="api">Demo</NavDropdown.Item>
                <Dropdown.Divider />
                <NavDropdown.Item href="home">Industries</NavDropdown.Item>
                <Dropdown.Divider />
                <NavDropdown.Item href="about-ai">Documentations</NavDropdown.Item>
                <NavDropdown.Item href="home">FAQ</NavDropdown.Item>
                
              </NavDropdown>

              <Nav.Link as={Link} to="pricing" className="centered-nav-item">
                Pricing
              </Nav.Link>

              <NavDropdown title="About" id="basic-nav-dropdown" className="centered-nav-item">
              <NavDropdown.Item href="about">Our vision</NavDropdown.Item>
                <NavDropdown.Item href="about">Team</NavDropdown.Item>
                <NavDropdown.Item href="anonimi-platform">Privacy</NavDropdown.Item>
                <Dropdown.Divider />
                <NavDropdown.Item href="anonimi-platform">Contact Us</NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <ButtonGroup className="btn-group">
                {log ? (
                  <button onClick={onClick} className="btn-register">
                    Sign out
                  </button>
                ) : (
                  <div style={{ display: "flex" }}>
                    <Nav.Link href="login">
                      <button className="btn-login">Sign in</button>
                    </Nav.Link>

                    <Nav.Link href="register">
                      <button className="btn-register">Try for free</button>
                    </Nav.Link>
                  </div>
                )}

                <NavDropdown title="LN" className="btn-ln" disabled={true}>
                  EN
                </NavDropdown>
              </ButtonGroup>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}