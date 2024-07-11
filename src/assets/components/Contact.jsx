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
    // console.log(import.meta);
    apiKey.apiKey = import.meta.env.VITE_REACT_APP_BREVO_API_KEY;

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
    <article className="contact" data-page="contact" style={styles.article}>
      <header>
        <h2 className="h2 article-title" style={styles.headerTitle}>
          Contact
        </h2>
      </header>

      <section className="mapbox" data-mapbox style={styles.mapbox}>
        <figure>
          <Map />
        </figure>
      </section>

      <section className="contact-form" style={styles.contactFormSection}>
        <h3 className="h3 form-title" style={styles.formTitle}>
          Contact Form
        </h3>

        <form
          onSubmit={handleSubmit}
          className="form"
          data-form
          style={styles.form}
        >
          <div className="input-wrapper" style={styles.inputWrapper}>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              style={styles.input}
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
              style={styles.input}
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
            style={{ ...styles.input, ...styles.textarea }}
          ></textarea>

          <button
            type="submit"
            className="form-btn"
            disabled={
              !formData.fullname || !formData.email || !formData.message
            }
            data-form-btn
            style={styles.button}
          >
            <FaPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

const styles = {
  article: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "'Poppins', sans-serif",
    color: "#e0e0e0",
    background: "linear-gradient(135deg, #2c3e50 0%, #1a2530 100%)",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  headerTitle: {
    color: "#3498db",
    marginBottom: "30px",
    fontSize: "2.5rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  },
  mapbox: {
    marginBottom: "40px",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  contactFormSection: {
    background: "rgba(26, 37, 47, 0.9)",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    backdropFilter: "blur(10px)",
  },
  formTitle: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#3498db",
    fontSize: "2rem",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "15px",
    backgroundColor: "rgba(52, 73, 94, 0.7)",
    border: "2px solid #34495e",
    borderRadius: "10px",
    fontSize: "16px",
    color: "#e0e0e0",
    transition: "all 0.3s ease",
    "&:focus": {
      borderColor: "#3498db",
      boxShadow: "0 0 0 2px rgba(52,152,219,0.2)",
      outline: "none",
    },
  },
  textarea: {
    minHeight: "150px",
    resize: "vertical",
  },
  button: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "15px 30px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#2980b9",
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(52,152,219,0.3)",
    },
    "&:disabled": {
      opacity: "0.6",
      cursor: "not-allowed",
    },
  },
  "@media (min-width: 768px)": {
    inputWrapper: {
      flexDirection: "row",
    },
  },
};
export default Contact;
