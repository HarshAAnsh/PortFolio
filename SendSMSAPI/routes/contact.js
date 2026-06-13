const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "Email and Message are required"
      });
    }

    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: "bhaskarharsh37992@gmail.com",
      subject: "Portfolio Contact Message",

      html: `
        <h2>Portfolio Contact Form</h2>

        <p><strong>From:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `
    });

    res.json({
      success: true,
      message: "Email sent successfully"
    });

  }catch (err) {
  console.error("Email Error:", err);

  res.status(500).json({
    success: false,
    message: err.message
  });
}
});

module.exports = router;