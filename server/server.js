import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // load .env file

const app = express();
app.use(express.json());
app.use(cors());

// OTP store in-memory (production me DB use karo)
const otpStore = new Map();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// SMTP check
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP connection error:", error);
  } else {
    console.log("✅ SMTP server is ready to send emails");
  }
});

// OTP generate
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP API
app.post("/request-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).send({ error: "Email required" });

  const otp = generateOTP();
  const expiresAt = Date.now() + 5 * 60 * 1000;

  otpStore.set(email, { otp, expiresAt });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It expires in 5 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send({ message: "OTP sent to your email" });
  } catch (err) {
    console.error("Email send failed:", err);
    res.status(500).send({ error: "Failed to send OTP" });
  }
});

// Verify OTP API
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).send({ error: "Email and OTP required" });

  const record = otpStore.get(email);
  if (!record) return res.status(400).send({ error: "OTP not found" });

  if (record.expiresAt < Date.now()) {
    otpStore.delete(email);
    return res.status(400).send({ error: "OTP expired" });
  }

  if (record.otp !== otp) return res.status(400).send({ error: "Invalid OTP" });

  otpStore.delete(email);
  res.send({ message: "OTP verified" });
});

// Server start on 0.0.0.0 for mobile access
app.listen(4000, "0.0.0.0", () => {
  console.log("🚀 Server started on http://0.0.0.0:4000");
});
