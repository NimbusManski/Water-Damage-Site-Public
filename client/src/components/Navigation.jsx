import React, { useState, useEffect, useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Navigation() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Navbar
      expand="lg"
      className={visible ? "navbar-custom" : "navbar-custom navbar-hidden"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            width="35"
            height="35"
            className="d-inline-block align-top"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto">
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#water-extraction">
                Emergency Water Extraction
              </NavDropdown.Item>
              <NavDropdown.Item href="#moisture-detection">
                Moisture Detection and Assessment
              </NavDropdown.Item>
              <NavDropdown.Item href="#insurance">
                Insurance Claim Assistance
              </NavDropdown.Item>
              <NavDropdown.Item href="#roofing">
                Roofing Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#excavation">
                Excavation Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#plumbing">
                Plumbing Services
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#payment">Make a Payment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
