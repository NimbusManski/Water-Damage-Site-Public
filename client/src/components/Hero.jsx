import { Container, Row, Col,Button } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="hero">
      <Container className="header-section">
        <Row className="justify-content-center align-items-center vh-100">
          <Col md={8} className="text-center hero-col-custom">
            <h1 className="display-3">
            American Mitigation</h1>
            <div className="lead-wrapper">
              <span className="lead"></span>
              <div className="button-wrapper mt-3">
              <Button href="#contact" className="btn-custom">Request a Quote</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}