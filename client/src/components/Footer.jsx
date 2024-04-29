import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa"; 

export default function Footer(){
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer mt-5 py-4"> 
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-left text-center">
            <img src="images/logo.png" alt="North Texas Contractor Services" className="footer-logo" />
          </Col>
          <Col md={6} className="text-md-right text-center">
            <Button variant="link" onClick={handleBackToTop} className="btn-back-to-top">
              <FaArrowUp className="mr-2" /> Back to Top
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Water Damage Mitigation Site. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

;
