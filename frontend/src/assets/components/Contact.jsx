import React, { useState } from "react";
import Map from "./Map";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: formData.fullname,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormData({
          fullname: "",
          email: "",
          message: "",
        });
        alert("Your message has been sent successfully!");
      } else {
        throw new Error("Failed to send emails.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <Map />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button
            type="submit"
            className="form-btn"
            disabled={
              loading || !formData.fullname || !formData.email || !formData.message
            }
            data-form-btn
          >
            {loading ? (
              <span className="loading-spinner">
                <div className="spinner"></div> Sending...
              </span>
            ) : (
              <>
                <FaPaperPlane />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
