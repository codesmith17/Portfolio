import React, { useState } from "react";
import MyLoadingAnimation from "./MyLoadingAnimation";

const Map = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? <MyLoadingAnimation /> : null}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.0642676894254!2d79.0237998747672!3d20.9499340904823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0529518230f%3A0x45b76be0621cbb88!2sIndian%20Institute%20of%20Information%20Technology%2C%20Nagpur%20(IIITN)!5e0!3m2!1sen!2sin!4v1704709085748!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{ border: "0" }}
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoading(false)}
        title="Google Maps"
      ></iframe>
    </>
  );
};

export default Map;
