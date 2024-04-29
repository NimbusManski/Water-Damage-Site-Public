import React, { useState } from "react";

export default function Services() {
  const [showDetails, setShowDetails] = useState({
    service1: false,
    service2: false,
    service3: false,
  });

  const toggleDetails = (service) => {
    setShowDetails({ ...showDetails, [service]: !showDetails[service] });
  };

  return (
    <div className="services-section" id="services">
      <h2 className="services-section-header">Services</h2>
      <hr className="services-divider" /> 
   
      <div className="service-section service-section1" id="water-extraction">
        <div className="service-section-img">
          <img src="/images/service-section-img1.jpeg" alt="Service 1" />
        </div>
        <div className="service-section-text">
          <h2 className="service-title">Emergency Water Extraction</h2>
          <p>Quick response to remove standing water from flooded areas.</p>
          <div className="service-highlights">
            <ul>
              <li>24/7 emergency service</li>
              <li>Professional water removal</li>
              <li>Advanced drying techniques</li>
            </ul>
          </div>
          <button
            className="learn-more-btn"
            onClick={() => toggleDetails("service1")}
          >
            {showDetails.service1 ? "Hide Details" : "Learn More"}
          </button>
          <div
            className={`details ${
              showDetails.service1 ? "details-visible" : "details-hidden"
            }`}
          >
            <ul>
              <li>
                <h5>Rapid Response:</h5>
                <p>
                  A reputable water damage mitigation company understands the
                  urgency of the situation and offers 24/7 emergency services.
                  Upon receiving a distress call, a team of trained
                  professionals promptly mobilizes to the site equipped with
                  specialized tools and equipment.
                </p>
              </li>
              <li>
                <h5>Assessment and Safety:</h5>
                <p>
                  Upon arrival, the team conducts a quick assessment of the
                  extent of water damage and identifies any safety hazards such
                  as electrical dangers or structural instability. Safety
                  protocols are implemented to ensure the well-being of both
                  occupants and technicians.
                </p>
              </li>
              <li>
                <h5>Water Removal:</h5>
                <p>
                  Utilizing powerful pumps, wet vacuums, and other
                  state-of-the-art extraction equipment, the team begins the
                  process of removing standing water from the affected area.
                  Every effort is made to extract water quickly and efficiently,
                  minimizing the risk of secondary damage such as mold growth
                  and structural deterioration.
                </p>
              </li>
              <li>
                <h5>Moisture Detection:</h5>
                <p>
                  In addition to visible standing water, moisture may have
                  infiltrated porous materials such as drywall, carpeting, and
                  insulation. Advanced moisture detection tools such as moisture
                  meters and thermal imaging cameras are employed to identify
                  hidden pockets of moisture that require targeted extraction.
                </p>
              </li>
              <li>
                <h5>Documentation:</h5>
                <p>
                  Throughout the extraction process, detailed documentation is
                  maintained, including photographs, moisture readings, and
                  notes on the extent of the damage. This documentation serves
                  as vital evidence for insurance claims and provides
                  transparency for the property owner throughout the restoration
                  process.
                </p>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div className="service-section service-section2" id="moisture-detection">
        <div className="service-section-img">
          <img src="/images/service-section-img2.jpeg" alt="Service 2" />
        </div>
        <div className="service-section-text">
          <h2 className="service-title">Moisture Detection and Assessment</h2>
          <p>Using advanced equipment to detect hidden moisture.</p>
          <div className="service-highlights">
            <ul>
              <li>State-of-the-art moisture detection</li>
              <li>Comprehensive assessment reports</li>
              <li>Experienced technicians</li>
            </ul>
          </div>

          <button
            className="learn-more-btn"
            onClick={() => toggleDetails("service2")}
          >
            {showDetails.service2 ? "Hide Details" : "Learn More"}
          </button>

          <div
            className={`details ${
              showDetails.service2 ? "details-visible" : "details-hidden"
            }`}
          >
            <ul>
              <li>
                <h5>Advanced Equipment Utilization:</h5>
                <p>
                  Moisture Meters: These devices measure the moisture content of
                  various materials such as wood, drywall, concrete, and
                  insulation. They provide quantitative data, indicating the
                  extent of moisture saturation in affected areas.
                </p>
              </li>
              <li>
                <h5>Thermal Imaging Cameras: </h5>
                <p>
                  Also known as infrared cameras, these tools detect temperature
                  variations on surfaces, revealing areas of moisture
                  accumulation. Moisture tends to alter surface temperatures,
                  making it possible to identify hidden moisture behind walls,
                  under floors, or above ceilings.
                </p>
              </li>
              <li>
                <h5>Comprehensive Inspection:</h5>
                <p>
                  Detailed documentation is essential during the moisture
                  detection and assessment process. Technicians record moisture
                  readings, observations, and findings using digital
                  documentation tools. Moisture maps, inspection reports, and
                  photographic evidence are compiled into a comprehensive
                  assessment report, which serves as a reference for developing
                  an effective mitigation and restoration plan.
                </p>
              </li>
              <li>
                <h5>Documentation and Reporting:</h5>
                <p>
                  Also known as infrared cameras, these tools detect temperature
                  variations on surfaces, revealing areas of moisture
                  accumulation. Moisture tends to alter surface temperatures,
                  making it possible to identify hidden moisture behind walls,
                  under floors, or above ceilings.
                </p>
              </li>
              <li>
                <h5>Data Analysis and Interpretation:</h5>
                <p>
                  The collected data is analyzed to determine the extent of
                  moisture damage and the necessary steps for remediation.
                  Technicians interpret moisture readings, assess the risk of
                  secondary damage such as mold growth, and prioritize areas for
                  targeted drying efforts.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="service-section service-section4" id="plumbing">
        <div className="service-section-img">
          <img src="/images/plumbing-section-img.jpeg" alt="Service 4" />
        </div>
        <div className="service-section-text">
          <h2 className="service-title">Plumbing Services</h2>
          <p>Immediate solutions for burst pipes, leaks, and backups.</p>
          <div className="service-highlights">
            <ul>
              <li>Emergency Plumbing Repairs</li>
              <li>Leak Detection and Repair</li>
              <li>Pipe Replacement and Repiping</li>
            </ul>
          </div>
          <button
            className="learn-more-btn"
            onClick={() => toggleDetails("service3")}
          >
            {showDetails.service3 ? "Hide Details" : "Learn More"}
          </button>
          <div
            className={`details ${
              showDetails.service3 ? "details-visible" : "details-hidden"
            }`}
          >
            <ul>
              <li>
                <h5>Emergency Plumbing Repairs:</h5>
                <p>
                  A water damage mitigation company with plumbing services
                  offers emergency repairs for plumbing issues that contribute
                  to or result from water damage incidents. This includes burst
                  pipes, leaking fixtures, malfunctioning water heaters, and
                  sewage backups. Immediate response to plumbing emergencies can
                  help prevent further water damage and mitigate the impact on
                  the property.
                </p>
              </li>
              <li>
                <h5>Leak Detection and Repair:</h5>
                <p>
                  Trained technicians utilize advanced leak detection technology
                  to identify hidden water leaks within the plumbing system.
                  Whether it's a concealed pipe leak behind walls or a slab leak
                  beneath the foundation, prompt detection and repair are
                  essential to prevent water damage and conserve water
                  resources.
                </p>
              </li>
              <li>
                <h5>Pipe Replacement and Repiping:</h5>
                <p>
                  In cases where aging or damaged pipes pose a risk of recurrent
                  leaks or failures, the mitigation company offers pipe
                  replacement and repiping services. This involves removing old,
                  corroded pipes and installing new, durable piping materials to
                  ensure the long-term integrity of the plumbing system.
                </p>
              </li>
              <li>
                <h5>Fixture Installation and Repair:</h5>
                <p>
                  The company's plumbing experts handle the installation,
                  repair, and replacement of various plumbing fixtures,
                  including faucets, sinks, toilets, showers, and bathtubs.
                  Properly functioning fixtures are essential for preventing
                  water leaks and maintaining efficient water usage in the
                  property.
                </p>
              </li>
              <li>
                <h5>Water Heater Services:</h5>
                <p>
                  Water heaters are susceptible to leaks, corrosion, and other
                  issues that can lead to water damage if left unchecked. The
                  plumbing team offers maintenance, repair, and replacement
                  services for water heaters of all types, including traditional
                  tank-style heaters and tankless water heaters.
                </p>
              </li>
              <li>
                <h5>Sump Pump Installation and Maintenance:</h5>
                <p>
                  Sump pumps play a crucial role in preventing basement flooding
                  and water intrusion in areas prone to excess groundwater or
                  heavy rain. The company installs, tests, and maintains sump
                  pump systems to ensure they are in optimal working condition
                  when needed most.
                </p>
              </li>
              <li>
                <h5>Backflow Prevention and Testing:</h5>
                <p>
                  Backflow prevention devices are installed to safeguard against
                  the contamination of potable water by preventing the reverse
                  flow of non-potable water into the plumbing system. The
                  mitigation company offers installation, testing, and
                  maintenance services for backflow prevention devices to comply
                  with local regulations and protect water quality.
                </p>
              </li>
              <li>
                <h5>Preventive Plumbing Inspections:</h5>
                <p>
                  Routine plumbing inspections are essential for identifying
                  potential issues before they escalate into costly water damage
                  incidents. The mitigation company conducts thorough
                  inspections of the plumbing system, identifying weaknesses,
                  leaks, and other issues that require attention
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="service-section service-section5" id="excavation">
        <div className="service-section-img">
          <img src="/images/excavation-section-img.jpeg" alt="Service 5" />
        </div>
        <div className="service-section-text">
          <h2 className="service-title">Excavation Services</h2>
          <p>Precision excavation solutions for our clients property needs.</p>
          <div className="service-highlights">
            <ul>
              <li>Foundation Repair and Waterproofing</li>
              <li>Sewer Line Installation and Repair</li>
              <li>Land Grading and Leveling</li>
            </ul>
          </div>
          <button
            className="learn-more-btn"
            onClick={() => toggleDetails("service3")}
          >
            {showDetails.service3 ? "Hide Details" : "Learn More"}
          </button>
          <div
            className={`details ${
              showDetails.service3 ? "details-visible" : "details-hidden"
            }`}
          >
            <ul>
              <li>
                <h5>Foundation Repair and Waterproofing:</h5>
                <p>
                  Our excavation services include digging around the foundation
                  of your property to facilitate foundation repair and
                  waterproofing. Whether addressing cracks, settling, or water
                  intrusion issues, our skilled team ensures the integrity of
                  your foundation and protects your property from moisture
                  damage.
                </p>
              </li>
              <li>
                <h5>Sewer Line Installation and Repair:</h5>
                <p>
                  When it comes to sewer line installation or repair, excavation
                  is often necessary to access underground pipes. Our excavation
                  specialists utilize precision digging techniques to excavate
                  trenches for new sewer line installations or to repair damaged
                  sewer lines, ensuring efficient sewage disposal and preventing
                  backups.
                </p>
              </li>
              <li>
                <h5>Utility Line Installation and Repair:</h5>
                <p>
                  Excavation is essential for installing or repairing
                  underground utility lines, such as water lines, gas lines, and
                  electrical conduits. Our team carefully excavates trenches
                  according to local regulations and safety standards,
                  minimizing disruptions and ensuring the proper functioning of
                  utility systems.
                </p>
              </li>
              <li>
                <h5>Drainage System Installation:</h5>
                <p>
                  Proper drainage is crucial for preventing water damage and
                  erosion around your property. Our excavation services include
                  the installation of drainage systems, such as French drains or
                  surface drains, to redirect excess water away from your home
                  or commercial building and protect your foundation.
                </p>
              </li>
              <li>
                <h5>Septic System Installation and Repair:</h5>
                <p>
                  For properties not connected to municipal sewer systems,
                  septic systems provide essential wastewater treatment. Our
                  excavation experts handle the installation of septic tanks,
                  drain fields, and distribution lines, ensuring compliance with
                  local regulations and optimal system performance.
                </p>
              </li>
              <li>
                <h5>Land Grading and Leveling:</h5>
                <p>
                  Excavation plays a key role in land grading and leveling to
                  prepare sites for construction projects or landscaping
                  enhancements. Whether creating a building pad, shaping slopes,
                  or leveling uneven terrain, our team uses precision excavation
                  techniques to achieve the desired topography.
                </p>
              </li>
              <li>
                <h5>Trenching for Utilities and Irrigation:</h5>
                <p>
                  Trenching services are essential for laying underground
                  utilities, such as water lines, electrical conduits, or
                  irrigation pipes. Our excavation specialists carefully
                  excavate trenches of varying depths and widths, ensuring
                  proper placement and protection of utility lines for long-term
                  reliability.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="service-section service-section6" id="roofing">
        <div className="service-section-img">
          <img src="/images/roofing-section-img.jpeg" alt="Service 6" />
        </div>
        <div className="service-section-text">
          <h2 className="service-title">Roofing Services</h2>
          <p>Roofing services for all aspects of roof care and maintenance.</p>
          <div className="service-highlights">
            <ul>
              <li>Roof Replacement and Installation</li>
              <li>Gutter Installation and Repair</li>
              <li>Insurance Claim Assistance</li>
            </ul>
          </div>
          <button
            className="learn-more-btn"
            onClick={() => toggleDetails("service3")}
          >
            {showDetails.service3 ? "Hide Details" : "Learn More"}
          </button>
          <div
            className={`details ${
              showDetails.service3 ? "details-visible" : "details-hidden"
            }`}
          >
            <ul>
              <li>
                <h5>Complete Roof Replacement:</h5>
                <p>
                  When your roof is beyond repair or nearing the end of its
                  lifespan, our team specializes in complete roof replacement.
                  We handle every aspect of the project, from removing the old
                  roofing materials to installing a new, durable roof that
                  enhances the protection and aesthetics of your property.
                </p>
              </li>
              <li>
                <h5>Partial Roof Repair and Replacement:</h5>
                <p>
                  For localized damage or areas of concern on your roof, we
                  offer partial repair and replacement services. Whether it's
                  replacing damaged shingles, repairing flashing, or addressing
                  leaks, our skilled technicians ensure targeted solutions that
                  restore the integrity of your roof without the need for a full
                  replacement.
                </p>
              </li>
              <li>
                <h5>Roof Inspection and Assessment:</h5>
                <p>
                  Our roofing services always begin with a thorough inspection
                  and assessment of your roof's condition. We identify any areas
                  of damage, deterioration, or potential issues, providing you
                  with a comprehensive evaluation and recommendations for repair
                  or replacement as needed.
                </p>
              </li>
              <li>
                <h5>Emergency Roofing Repairs:</h5>
                <p>
                  Proper gutter systems are essential for protecting your roof
                  and property from water damage. We offer gutter installation
                  and repair services to ensure efficient water drainage and
                  prevent issues such as roof leaks, foundation damage, and
                  erosion.
                </p>
              </li>
              <li>
                <h5>Roof Maintenance Programs:</h5>
                <p>
                  To prolong the lifespan of your roof and prevent costly
                  repairs, we offer customizable roof maintenance programs.
                  Scheduled inspections, cleaning, and minor repairs are
                  performed regularly to keep your roof in optimal condition and
                  address issues before they escalate.
                </p>
              </li>
              <li>
                <h5>Insurance Claim Assistance:</h5>
                <p>
                  Dealing with roof damage can be overwhelming, especially when
                  navigating the insurance claims process. Our team provides
                  assistance with insurance claims, including documentation,
                  assessment, and communication with insurance adjusters, to
                  ensure you receive fair compensation for covered damages.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="service-section service-section3" id="insurance">
        <div className="service-section-img">
          <img src="/images/service-section-img3.jpeg" alt="Service 3" />
        </div>
        <div className="service-section-text">
          <h2 className="service-title">Insurance Claim Assistance</h2>
          <p>Guiding clients through the insurance claims process.</p>
          <div className="service-highlights">
            <ul>
              <li>Expert assistance with insurance claims</li>
              <li>Documentation of damages</li>
              <li>Maximize claim benefits</li>
            </ul>
          </div>
          <button
            className="learn-more-btn"
            onClick={() => toggleDetails("service3")}
          >
            {showDetails.service3 ? "Hide Details" : "Learn More"}
          </button>
          <div
            className={`details ${
              showDetails.service3 ? "details-visible" : "details-hidden"
            }`}
          >
            <ul>
              <li>
                <h5>Initial Consultation:</h5>
                <p>
                  Upon contacting a water damage mitigation company, clients are
                  provided with an initial consultation to discuss their
                  situation and assess their needs. During this consultation,
                  the company gathers relevant information about the water
                  damage incident, including the cause, extent of damage, and
                  insurance coverage details.
                </p>
              </li>
              <li>
                <h5>Documentation of Damages:</h5>
                <p>
                  Trained professionals conduct a thorough inspection of the
                  property to assess the extent of water damage and document all
                  affected areas. This documentation includes detailed notes,
                  photographs, and sometimes videos that provide visual evidence
                  of the damage. Precise documentation is crucial for
                  substantiating insurance claims and ensuring that all eligible
                  damages are accounted for.
                </p>
              </li>
              <li>
                <h5>Review of Insurance Policy:</h5>
                <p>
                  The water damage mitigation company reviews the client's
                  insurance policy to understand the coverage limits,
                  exclusions, deductibles, and other relevant terms and
                  conditions. This step is essential for determining the scope
                  of coverage and identifying any potential issues that may
                  arise during the claims process.
                </p>
              </li>
              <li>
                <h5>Documentation of Damages:</h5>
                <p>
                  Trained professionals conduct a thorough inspection of the
                  property to assess the extent of water damage and document all
                  affected areas. This documentation includes detailed notes,
                  photographs, and sometimes videos that provide visual evidence
                  of the damage. Precise documentation is crucial for
                  substantiating insurance claims and ensuring that all eligible
                  damages are accounted for.
                </p>
              </li>
              <li>
                <h5>Claims Preparation and Submission:</h5>
                <p>
                  Based on the assessment of damages and the insurance policy
                  review, the mitigation company assists the client in preparing
                  and submitting the insurance claim. This involves completing
                  claim forms, compiling supporting documentation, and ensuring
                  that all necessary information is accurately provided to the
                  insurance company.
                </p>
              </li>
              <li>
                <h5>Negotiation with Insurance Adjusters:</h5>
                <p>
                  Throughout the claims process, the mitigation company acts as
                  an advocate for the client, representing their interests and
                  negotiating with insurance adjusters on their behalf. This
                  includes providing additional documentation or clarification
                  as needed, addressing any discrepancies or disputes, and
                  advocating for fair and timely resolution of the claim.
                </p>
              </li>
              <li>
                <h5>Supplemental Claims Assistance:</h5>
                <p>
                  In some cases, additional damages or expenses may emerge
                  during the restoration process that were not initially
                  accounted for in the insurance claim. The mitigation company
                  assists the client in preparing supplemental claims to ensure
                  that all eligible damages are properly documented and
                  submitted for coverage.
                </p>
              </li>
              <li>
                <h5>Final Settlement and Resolution:</h5>
                <p>
                  Once the insurance company has reviewed the claim and reached
                  a settlement, the mitigation company assists the client in
                  reviewing the settlement offer and ensuring that it accurately
                  reflects the extent of the damages and the coverage provided
                  by the policy. Any discrepancies or issues are addressed, and
                  final settlement negotiations may occur if necessary.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
