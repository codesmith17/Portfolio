const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS options
const corsOptions = {
  origin: ["http://localhost:5173", "https://krishna-tripathi.vercel.app"], // Add allowed origins
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

// Apply CORS middleware globally
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVICE,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == "465", // true for port 465, false otherwise
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Preflight request handling (optional but recommended)
app.options("*", cors(corsOptions)); // Allow all endpoints to handle OPTIONS request

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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
