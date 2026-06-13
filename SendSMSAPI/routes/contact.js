const express = require("express");
const router = express.Router();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

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

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "harshmishra37992@gmail.com",
      subject: "Portfolio Contact Message",
      html: `
        <h2>Portfolio Contact Form</h2>
        <p><strong>From:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    res.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;