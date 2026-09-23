import React, { useState } from "react";
import MyLoadingAnimation from "./MyLoadingAnimation";

const Map = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? <MyLoadingAnimation /> : null}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.318!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704709085748!5m2!1sen!2sin"
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
