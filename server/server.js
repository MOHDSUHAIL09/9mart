import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// OTP इन-मेमोरी स्टोर (प्रोडक्शन में DB यूज़ करें)
const otpStore = new Map();

// Nodemailer transporter सेटअप (Gmail App Password डालें)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
     user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// SMTP कनेक्शन चेक करें
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection error:", error);
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

// OTP जनरेट करने का फंक्शन
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();  // 6 अंकों का OTP
}

// OTP भेजने का API
app.post("/request-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).send({ error: "Email required" });

  const otp = generateOTP();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 मिनट में एक्सपायर

  otpStore.set(email, { otp, expiresAt });

  const mailOptions = {
    from: "suhailmohd7799@gmail.com",
    to: email,
    subject: "Your OTP for Login",
    text: `Your OTP is ${otp}. It expires in 5 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send({ message: "OTP sent to your email" });
  } catch (error) {
    console.error("Mail sending failed:", error);
    res.status(500).send({ error: "Failed to send OTP" });
  }
});

// OTP verify करने का API
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).send({ error: "Email and OTP required" });

  const record = otpStore.get(email);
  if (!record) return res.status(400).send({ error: "OTP not requested or expired" });

  if (record.expiresAt < Date.now()) {
    otpStore.delete(email);
    return res.status(400).send({ error: "OTP expired" });
  }

  if (record.otp !== otp) return res.status(400).send({ error: "Invalid OTP" });

  otpStore.delete(email);
  res.send({ message: "Login successful", email });
});

// Server start
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
