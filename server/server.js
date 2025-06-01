import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Setup for ES Modules (to use __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Serve static files (frontend build)
app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// OTP store in memory
const otpStore = new Map();

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP connection error:", error);
  } else {
    console.log("✅ SMTP server is ready to send emails");
  }
});

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// API: Send OTP
app.post("/request-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  const otp = generateOTP();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 min

  otpStore.set(email, { otp, expiresAt });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It expires in 5 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "OTP sent to your email" });
  } catch (err) {
    console.error("Email send failed:", err);
    res.status(500).json({ error: "Failed to send OTP" });
  }
});

// API: Verify OTP
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ error: "Email and OTP required" });

  const record = otpStore.get(email);
  if (!record) return res.status(400).json({ error: "OTP not found" });

  if (record.expiresAt < Date.now()) {
    otpStore.delete(email);
    return res.status(400).json({ error: "OTP expired" });
  }

  if (record.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });

  otpStore.delete(email);
  res.json({ message: "OTP verified" });
});

// Start server
app.listen(4000, "0.0.0.0", () => {
  console.log("🚀 Server started on http://0.0.0.0:4000");
});
