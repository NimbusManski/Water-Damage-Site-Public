import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPaypal } from "react-icons/fa";

export default function PaymentSection() {
  return (
    <div className="payment-section my-5" id="payment"> 
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={8} className="text-center">
            <h2 className="mb-4">Make a Payment</h2>
            <p className="mb-4">Click the button below to sign in to PayPal and make a payment.</p>
            <Button
              href="https://www.paypal.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="btn-paypal"
            >
              <FaPaypal className="mr-2" /> Sign in to PayPal
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


