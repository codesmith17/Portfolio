const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVICE,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Email endpoint
app.post("/send-email", async (req, res) => {
  const { fullname, email, message } = req.body;

  try {
    // Confirmation email to the user
    await transporter.sendMail({
      from: `"KRISHNA TRIPATHI" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting us!",
      html: `
        <html>
          <body>
            <p>Dear ${fullname},</p>
            <p>Thank you for contacting us. I have received your message and will get back to you within the next 24 hours.</p>
            <br/>
            <p>Best regards,</p>
            <p>Krishna Tripathi</p>
          </body>
        </html>
      `,
    });

    // Notification email to the admin
    await transporter.sendMail({
      from: `"KRISHNA TRIPATHI" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Message from Contact Form",
      html: `
        <html>
          <body>
            <p>Name: ${fullname}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
          </body>
        </html>
      `,
    });

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ error: "Failed to send emails." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
