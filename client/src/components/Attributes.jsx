import { Button } from "react-bootstrap";

export default function Attributes() {
  return (
    <div className="attr-container" id="attributes">
      <div className="attr-section">
        <div className="attribute-1">
          <h2>EXPERT SERVICE</h2>
          <p>
            At our company, excellence isn't just a goal; it's our standard.
            With a meticulous attention to detail and a steadfast commitment to
            customer satisfaction, we stand as a beacon of reliability in the
            realm of water damage mitigation. Our team of skilled professionals
            combines years of expertise with cutting-edge technology to deliver
            swift and effective solutions tailored to your specific needs.
          </p>
        </div>
        <div className="attribute-2">
          <h2>EFFICIENCY</h2>
          <p>
            From the initial assessment to the final restoration, we prioritize
            transparency, communication, and efficiency every step of the way.
            With us, you can trust that your property is in capable hands, and
            that we'll work tirelessly to bring it back to its pre-damaged
            state, ensuring peace of mind and a seamless recovery process for
            you.
          </p>
        </div>
        <div className="attribute-3">
          <h2>EMERGENCY RESPONSE</h2>
          <p>
            We understand that water damage emergencies can happen at any time,
            day or night, which is why we offer around-the-clock availability.
            Our dedicated team is on standby 24/7, ready to spring into action
            the moment you reach out to us. Whether it's a burst pipe, flooding,
            or any other water-related disaster, our rapid response ensures that
            help is never far away.
          </p>
        </div>
      </div>
      <div className="button-container">
        <Button className="attr-btn-custom" href="#contact">Contact Us</Button>
      </div>
    </div>
  );
}
