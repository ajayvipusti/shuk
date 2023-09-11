import React from "react";

const MapComponent = () => {
  let urlStr =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.083030519249!2d77.37250329999999!3d28.627273499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550adec536d%3A0xfc9a748d99d8bd07!2sITHUM%20TOWER%2C%20GALAXY%20BUSINESS%20PARK%2C%20Block%20A%2C%20Industrial%20Area%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1683711950671!5m2!1sen!2sin";
  return (
    <div>
      <iframe
        title="Google Map"
        className="map-contact"
        style={{ border: "0", width: "100%", height: "270px" }}
        src={urlStr}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
