import React from "react";
import Zoom from "react-reveal/Zoom";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="venue_location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.314654873072!2d-81.5071243843316!3d28.379562794017986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c15025203cfe35f!2sHyatt+Regency+Grand+Cypress!5e0!3m2!1sen!2sus!4v1536877604393"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
      />
      <Zoom delay={250}>
        <div className="location_tag">
          <div>Location</div>
        </div>
      </Zoom>
    </div>
  );
};

export default Location;
