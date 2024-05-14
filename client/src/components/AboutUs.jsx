import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function AboutUs() {
  return (
    <div className="about-us-container" id="about">
      <h2 className="about-us-heading text-center mb-4">About Us</h2>
      <hr className="about-us-divider" />
      <Container fluid >
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="about-us-card rounded">
              <div className="about-us-content">
                <p>
                  Founded in 2020, American Mitigation brings together a
                  team of experts with over 30 years of collective experience in
                  the industry. Our journey began with a vision to provide
                  unparalleled service and support to homeowners and businesses
                  facing water damage emergencies.
                
                  At American Mitigation, we understand the devastating impact water damage can
                  have on properties and lives. That's why we are committed to
                  offering swift and effective solutions to mitigate the damage
                  and restore peace of mind to our clients.
                  Our approach is rooted in empathy and professionalism. We
                  believe in going above and beyond to assist our customers
                  during challenging times. Whether it's a burst pipe, flooding,
                  or any other water-related disaster, our dedicated team is
                  always prepared to spring into action. With state-of-the-art equipment and advanced techniques, we
                  ensure thorough and efficient water extraction, drying, and
                  restoration processes. Our goal is not just to fix the
                  immediate problem but also to prevent future issues and
                  protect your property from further damage.
                </p>
                <p>
                 
                  Beyond our technical expertise, what truly sets American Mitigation apart is
                  our genuine care for our clients. We treat every situation
                  with the utmost urgency and compassion, guiding you through
                  every step of the mitigation and restoration journey.
                  As a trusted partner in water damage mitigation, American Mitigation is here
                  to support you whenever you need us. Let us help you navigate
                  through the challenges of water damage and restore your
                  property to its pre-damaged state.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
