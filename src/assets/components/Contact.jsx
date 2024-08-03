import React, { useState } from "react";
import Map from "./Map";
import { FaPaperPlane } from "react-icons/fa";
import SibApiV3Sdk from "sib-api-v3-sdk"; // Import Brevo SDK

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Instantiate the Brevo API client
    var defaultClient = SibApiV3Sdk.ApiClient.instance;
    var apiKey = defaultClient.authentications["api-key"];
    console.log(import.meta);
    apiKey.apiKey = import.meta.env.VITE_REACT_APP_BREVO_API_KEY;

    console.log(apiKey);
    var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    // Construct the email message for user confirmation
    sendSmtpEmail.subject = "Thank you for contacting us!";
    sendSmtpEmail.htmlContent = `
      <html>
        <body>
          <p>Dear ${formData.fullname},</p>
          <p>Thank you for contacting us. I have received your message and will get back to you within the next 24 hours.</p>
          <br/>
          <p>Best regards,</p>
          <p>Krishna Tripathi</p>
        </body>
      </html>
    `;
    sendSmtpEmail.sender = {
      email: "kanchanlatakrishna@gmail.com",
      name: "KRISHNA TRIPATHI",
    };
    sendSmtpEmail.to = [{ email: formData.email, name: formData.fullname }];

    // Construct the email message for admin notification
    var adminEmail = new SibApiV3Sdk.SendSmtpEmail();
    adminEmail.subject = "Message from Contact Form";
    adminEmail.htmlContent = `
      <html>
        <body>
          <p>Name: ${formData.fullname}</p>
          <p>Email: ${formData.email}</p>
          <p>Message: ${formData.message}</p>
        </body>
      </html>
    `;
    adminEmail.sender = {
      email: "kanchanlatakrishna@gmail.com",
      name: "KRISHNA TRIPATHI",
    };
    adminEmail.to = [
      { email: "kanchanlatakrishna@gmail.com", name: "KRISHNA TRIPATHI" },
    ];

    try {
      // Send confirmation email to user
      const userConfirmation = await apiInstance.sendTransacEmail(
        sendSmtpEmail
      );
      console.log(
        "User confirmation email sent successfully:",
        userConfirmation
      );

      // Send message email to admin
      const adminNotification = await apiInstance.sendTransacEmail(adminEmail);
      console.log(
        "Admin notification email sent successfully:",
        adminNotification
      );

      // Clear form fields after successful submission
      setFormData({
        fullname: "",
        email: "",
        message: "",
      });

      // Show success message (optional)
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Oops! Something went wrong. Please try again later.");
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
              !formData.fullname || !formData.email || !formData.message
            }
            data-form-btn
          >
            <FaPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
